import type { ResonanceId } from "@/domain/resonance";
import type { Climate } from "@/domain/climate";

/**
 * Temporal Presence
 * Shifts from app-flow steps to the natural stages of inhabiting a space.
 */
export type EnvironmentStage =
  | "arrival"    // First entry, atmosphere is forming
  | "settling"   // Climate is established, noise is reducing
  | "deepening"  // Full immersion, resonance is at its peak
  | "lingering"  // The quiet tail-end, holding space before exit
  | "drifting";  // Unanchored, transitioning or fading

/**
 * Atmospheric Persistence
 * Handles environmental carryover so transitions are not instantaneous.
 * It holds the 'ghost' of the previous climate as it fades.
 */
export type AtmosphericResidue = {
  climate: Climate | null;
  weight: number; // Represents the fading presence (e.g., 1.0 down to 0.0)
};

/**
 * Environmental Presence
 * Describe the user's exact state of being within Solen.
 */
export type EnvironmentalPresence = {
  climate: Climate | null;                 // Current atmospheric condition
  activeResonances: ResonanceId[];         
  stage: EnvironmentStage;                 // Temporal immersion level
  residue: AtmosphericResidue;             // The lingering memory of past states
  updatedAt: number | null;
};

export const initialPresence: EnvironmentalPresence = {
  climate: null,
  activeResonances: [],
  stage: "arrival",
  residue: {
    climate: null,
    weight: 0,
  },
  updatedAt: null,
};