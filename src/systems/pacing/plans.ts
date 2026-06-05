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

export const deepeningPlan = {
  mode: "sequential",
  initialDelayMs: 1200, // Longer pause for room to settle before deepening
  steps: [
    { id: "deepening-silence", delayMs: 0 },
    { id: "deepening-residue", delayMs: 800 },
    { id: "deepening-signal", delayMs: 600 },
    { id: "deepening-title", delayMs: 600 },
    { id: "deepening-subtitle", delayMs: 400 },
    { id: "deepening-thresholds", delayMs: 800 },
    { id: "deepening-story", delayMs: 500 },
    { id: "deepening-resonance", delayMs: 500 },
    { id: "deepening-presence", delayMs: 500 },
  ],
} as const satisfies PacingPlan;

export const lingeringPlan = {
  mode: "sequential",
  initialDelayMs: 800,
  steps: [
    { id: "lingering-silence", delayMs: 0 },
    { id: "lingering-message", delayMs: 1200 },
    { id: "lingering-quiet", delayMs: 800 },
  ],
} as const satisfies PacingPlan;

export const driftingPlan = {
  mode: "sequential",
  initialDelayMs: 600,
  steps: [
    { id: "drifting-fade", delayMs: 0 },
    { id: "drifting-message", delayMs: 1000 },
    { id: "drifting-exit", delayMs: 2000 },
  ],
} as const satisfies PacingPlan;
