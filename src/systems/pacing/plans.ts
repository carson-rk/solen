import type { PacingPlan, RevealStep } from "@/systems/pacing/types";

export const roomArrivalPlan = {
  mode: "sequential",
  initialDelayMs: 250,
  steps: [
    { id: "room-signal", delayMs: 0 },
    { id: "room-title", delayMs: 650 },
    { id: "room-copy", delayMs: 520 },
    { id: "room-action", delayMs: 520 },
  ],
} as const satisfies PacingPlan;

export function getReflectionRevealSteps(
  hasMood: boolean,
  needsIssueSelection: boolean
): RevealStep[] {
  return [
    { id: "reflection-signal", delayMs: 0 },
    { id: "reflection-title", delayMs: 420 },
    { id: "reflection-copy", delayMs: 360 },
    {
      id: hasMood ? "reflection-mood-summary" : "reflection-mood-options",
      delayMs: 420,
    },
    ...(needsIssueSelection
      ? [{ id: "reflection-issues", delayMs: 420 }]
      : []),
    { id: "reflection-continue", delayMs: 360 },
  ];
}

export function getSupportRevealSteps(articleIds: string[]): RevealStep[] {
  return [
    { id: "support-title", delayMs: 0 },
    { id: "support-copy", delayMs: 380 },
    { id: "support-list-heading", delayMs: 420 },
    ...articleIds.map((id) => ({
      id: `support-article-${id}`,
      delayMs: 260,
    })),
  ];
}
