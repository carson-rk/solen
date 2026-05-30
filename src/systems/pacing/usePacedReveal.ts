"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import type { RevealMode, RevealStep } from "@/systems/pacing/types";
import type { EmergencePhase } from "@/systems/environment/primitives/EnvironmentReveal"; 

type UsePacedRevealInput = {
  steps: readonly RevealStep[];
  mode: RevealMode;
  initialDelayMs?: number;
  active?: boolean;
  resetKey: string;
};

type ScheduledStep = [id: string, delayMs: number];
type RevealState = {
  runKey: string;
  ids: string[];
};

export function usePacedReveal({
  steps,
  mode,
  initialDelayMs = 0,
  active = true,
  resetKey,
}: UsePacedRevealInput) {
  const scheduleKey = JSON.stringify(
    steps.map((step) => [step.id, step.delayMs] satisfies ScheduledStep)
  );
  
  const scheduledSteps = useMemo(
    () => JSON.parse(scheduleKey) as ScheduledStep[],
    [scheduleKey]
  );
  
  const runKey = JSON.stringify({
    active,
    initialDelayMs,
    mode,
    resetKey,
    scheduleKey,
  });
  
  const [revealState, setRevealState] = useState<RevealState>({
    runKey,
    ids: [],
  });
  
  const revealedIds = useMemo(
    () => (revealState.runKey === runKey ? revealState.ids : []),
    [revealState, runKey]
  );

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;

    if (!active || scheduledSteps.length === 0) {
      return () => {
        for (const timer of timers) clearTimeout(timer);
      };
    }

    const reveal = (ids: string[]) => {
      if (cancelled) return;

      setRevealState((current) => {
        const currentIds = current.runKey === runKey ? current.ids : [];
        const next = new Set(currentIds);
        for (const id of ids) next.add(id);
        return {
          runKey,
          ids: Array.from(next),
        };
      });
    };

    if (mode === "simultaneous") {
      timers.push(
        setTimeout(() => {
          reveal(scheduledSteps.map(([id]) => id));
        }, initialDelayMs)
      );
    }

    if (mode === "delayed") {
      for (const [id, delayMs] of scheduledSteps) {
        timers.push(
          setTimeout(() => {
            reveal([id]);
          }, initialDelayMs + delayMs)
        );
      }
    }

    if (mode === "sequential") {
      let elapsedMs = initialDelayMs;

      for (const [id, delayMs] of scheduledSteps) {
        elapsedMs += delayMs;
        timers.push(
          setTimeout(() => {
            reveal([id]);
          }, elapsedMs)
        );
      }
    }

    return () => {
      cancelled = true;
      for (const timer of timers) clearTimeout(timer);
    };
  }, [active, initialDelayMs, mode, runKey, scheduledSteps]);

  const revealedSet = useMemo(() => new Set(revealedIds), [revealedIds]);

  /**
   * Translates internal timing logic directly into atmospheric phases.
   * Later, this can be expanded to return "fading" or "dissolved" during exit sequences.
   */
  const getPhase = useCallback(
    (id: string): EmergencePhase => {
      return revealedSet.has(id) ? "settled" : "hidden";
    },
    [revealedSet]
  );

  return {
    complete:
      scheduledSteps.length > 0 && revealedIds.length >= scheduledSteps.length,
    getPhase,
    revealedIds,
  };
}