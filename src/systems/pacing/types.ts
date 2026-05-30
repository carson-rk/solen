export type RevealMode = "delayed" | "sequential" | "simultaneous";

export type RevealStep = {
  id: string;
  delayMs: number;
};

export type PacingPlan = {
  mode: RevealMode;
  initialDelayMs: number;
  steps: readonly RevealStep[];
};
