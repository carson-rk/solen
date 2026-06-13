export type PresenceThreshold = "self" | "resonance" | "human";

export type PresenceThresholdConfig = {
  id: PresenceThreshold;
  label: string;
  path: string;
};

export const presenceThresholds: PresenceThresholdConfig[] = [
  {
    id: "self",
    label: "Leave something here",
    path: "a thought, a fragment, a weight you've been carrying",
  },
  {
    id: "resonance",
    label: "Sit with what others left",
    path: "emotional traces, anonymous and quiet",
  },
  {
    id: "human",
    label: "Open toward another presence",
    path: "someone who understands this kind of weight",
  },
];
