/**
 * Solen Resonance Themes
 * Universal emotional textures.
 */

export const resonanceIds = [
  "pressure",
  "disconnection",
  "noise",
  "instability",
  "drifting",
  "unspecified", // Replaces "general" to maintain an abstract baseline
] as const;

export type ResonanceId = (typeof resonanceIds)[number];

// Exclude 'unspecified' for UI selection, as it serves as a default fallback rather than an active theme.
export type SelectableResonance = Exclude<ResonanceId, "unspecified">;

export type ResonanceTheme = {
  id: SelectableResonance;
  title: string;
  texture: string;      // Replaces 'summary'
  experience: string;   // Replaces 'description'
};

export const resonanceThemes = [
  {
    id: "pressure",
    title: "Pressure",
    texture: "A constant, accumulating weight.",
    experience:
      "The environment feels dense and demanding. Every action feels tied to an outcome, and time feels scarce. Rest feels delayed or unearned, as the atmosphere pushes inward.",
  },
  {
    id: "disconnection",
    title: "Disconnection",
    texture: "Vast space, muted signals, isolation.",
    experience:
      "A sense of distance from the immediate surroundings. You are present, but out of sync. Interactions feel distant, and the space between you and everything else feels artificially wide.",
  },
  {
    id: "noise",
    title: "Noise",
    texture: "Overstimulation, crowding, restlessness.",
    experience:
      "Too many signals competing for attention at once. The environment feels loud and crowded, making it difficult to locate a baseline of quiet or steady focus.",
  },
  {
    id: "instability",
    title: "Instability",
    texture: "Shifting ground, unpredictable currents.",
    experience:
      "The baseline feels uneven. Safety or predictability is fluctuating, keeping the mind in a state of high alert. It is difficult to anchor or rest when the environment feels structurally uncertain.",
  },
  {
    id: "drifting",
    title: "Drifting",
    texture: "Lack of gravity, floating, numbness.",
    experience:
      "A lack of friction or anchor. Moving without a clear direction or resistance. The environment feels hazy, and the sense of purpose or immediate reality is suspended.",
  },
] as const satisfies readonly ResonanceTheme[];

/**
 * Type guard to verify if a given string is a valid Resonance.
 */
export function isResonance(value: unknown): value is ResonanceId {
  return typeof value === "string" && resonanceIds.includes(value as ResonanceId);
}