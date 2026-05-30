"use client";

import { useMemo } from "react";

import type { ResonanceId } from "@/domain/resonance"; 
import type { Climate } from "@/domain/climate";
import type { EnvironmentStage } from "@/domain/environmentalPresence";
import { deriveEnvironment } from "@/systems/atmosphere/environmentResponse";
import {
  createEnvironmentState,
  getEnvironmentStateKey,
} from "@/systems/environment/environmentState";

type UseEnvironmentInput = {
  stage: EnvironmentStage;
  climate: Climate | null;
  resonances: ResonanceId[]; 
  continuityWeight?: number;
};

export function useEnvironment({
  stage,
  climate,
  resonances,
  continuityWeight = 0,
}: UseEnvironmentInput) {
  
  // Safe React Stabilization: 
  const resonanceKey = [...resonances].sort().join(",");
  
  const stableResonances = useMemo(
    () => (resonanceKey ? (resonanceKey.split(",") as ResonanceId[]) : []),
    [resonanceKey]
  );

  // Core State Generation:
  const state = useMemo(
    () =>
      createEnvironmentState({
        stage,
        climate,
        resonances: stableResonances,
        continuityWeight,
      }),
    [continuityWeight, climate, stableResonances, stage]
  );

  // The Physical Output:
  
  const environmentResponse = useMemo(() => deriveEnvironment(state), [state]);
  
  const stateKey = useMemo(() => getEnvironmentStateKey(state), [state]);

  return {
    environmentResponse,
    state,
    stateKey,
  };
}