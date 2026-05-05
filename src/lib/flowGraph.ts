import { UserState } from "./types";
import { Selection } from "./selections"

export type Transition = {
  target: UserState;
  condition?: (context: Context) => boolean;
};

export type Context = {
  selection: Selection | null;
  stressLevel: number | null;
  history: {
    stressLevel: number | null;
    timestamp: number;
  }[];
};

function getRecentAverage(history: Context["history"]){
  if (history.length === 0) return 0;

  const lastThree = history.slice(-3);
  const sum = lastThree.reduce(
    (acc, item) => acc + item.stressLevel!,
    0
  );

  return sum / lastThree.length;

}
  
export const flowGraph: Record<UserState, Transition[]> = {
  intro: [
    { target: "selection" },
  ],

  selection: [
    { target: "intensity"}
  ],

  intensity: [
    {
      target: "counselor",
      condition: (ctx) =>
        getRecentAverage(ctx.history) > 7 &&
        (ctx.stressLevel ?? 0) > 5,
    },
  
    {
      target: "counselor",
      condition: (ctx) => (ctx.stressLevel ?? 0) > 7,
    },
  
    {
      target: "peer",
      condition: (ctx) =>
        (ctx.stressLevel ?? 0) > 3 && (ctx.stressLevel ?? 0) <= 7,
    },
  
    {
      target: "content",
      condition: (ctx) => (ctx.stressLevel ?? 0) <= 3,
    },
  ],

  content: [],
  peer: [],
  counselor: [],
};


