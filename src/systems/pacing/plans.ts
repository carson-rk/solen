import type { PacingPlan } from "@/systems/pacing/types";

export const arrivalPlan = {
  mode: "sequential",
  initialDelayMs: 250,
  steps: [
    { id: "arrival-signal", delayMs: 0 },
    { id: "arrival-title", delayMs: 650 },
    { id: "arrival-copy", delayMs: 520 },
    { id: "arrival-actions", delayMs: 520 },
  ],
} as const satisfies PacingPlan;

export const settlingPlan = {
  mode: "sequential",
  initialDelayMs: 180,
  steps: [
    { id: "settling-title", delayMs: 0 },
    { id: "settling-support", delayMs: 420 },
    { id: "settling-orbs", delayMs: 420 },
    { id: "settling-skip", delayMs: 360 },
  ],
} as const satisfies PacingPlan;
