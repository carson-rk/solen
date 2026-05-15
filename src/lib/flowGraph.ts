import { UserState } from "./types";
import { Selection } from "./selections";

export type Transition = {
  target: UserState;
  condition?: (context: Context) => boolean;
};

export type Context = {
  selection: Selection[];
  intensity: string | null;
};

export const flowGraph: Record<UserState, Transition[]> = {
  intro: [
    { target: "intensity" },
  ],

  selection: [
    { target: "selection" },
  ],

  intensity: [
    {
      target: "content",
      condition: (ctx) =>
        ctx.intensity === "light_rain" ||
        ctx.intensity === "heavy_fog",
    },

    {
      target: "peer",
      condition: (ctx) =>
        ctx.intensity === "strong_winds",
    },

    {
      target: "counselor",
      condition: (ctx) =>
        ctx.intensity === "thunderstorm" ||
        ctx.intensity === "numb_skies",
    },
  ],

  content: [],
  peer: [],
  counselor: [],
};