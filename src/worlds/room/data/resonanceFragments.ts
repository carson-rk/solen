export type ResonanceFragment = {
  time: string;
  text: string;
  resonance: string;
};

/** Mock peer traces for Deepening resonance panel — replace with DB in production. */
export const resonanceFragments: ResonanceFragment[] = [
  {
    time: "left at 2:14 am · last week",
    text: "I keep arriving at this feeling and I still don't know what to call it. Like standing in a room that used to mean something.",
    resonance: "18 people have sat with this",
  },
  {
    time: "left on a tuesday · this month",
    text: "Tired in a way that sleep doesn't fix.",
    resonance: "41 people have sat with this",
  },
  {
    time: "left at dusk · last winter",
    text: "I thought I was doing better. Then I wasn't. I don't know why I'm surprised by that anymore.",
    resonance: "27 people have sat with this",
  },
];
