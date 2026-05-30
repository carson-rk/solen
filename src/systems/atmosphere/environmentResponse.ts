import type { Climate } from "@/domain/climate"; 
import type { EnvironmentState } from "@/systems/environment/environmentState";

/**
 *  Strict Typing for Resonance
 **/
export type EnvironmentResonance =
  | "waiting"
  | "open"
  | "soft"
  | "slow"
  | "steadying"
  | "sheltering";


export type EnvironmentId = Climate | "unselected"
  

export type EnvironmentResponse = {
  id: EnvironmentId;
  label: string;
  resonance: EnvironmentResonance;
  pressure: 0 | 1 | 2 | 3 | 4 | 5; // enforces strict levels
};

/**
 * The translation dictionary.
 * Maps the specific environment ID to its behavioral properties.
 */
const environments = {
  unselected: {
    id: "unselected",
    label: "Room",
    resonance: "waiting",
    pressure: 0,
  },
  clear_skies: {
    id: "clear_skies",
    label: "Clear Skies",
    resonance: "open",
    pressure: 1,
  },
  light_rain: {
    id: "light_rain",
    label: "Light Rain",
    resonance: "soft",
    pressure: 2,
  },
  heavy_fog: {
    id: "heavy_fog",
    label: "Heavy Fog",
    resonance: "slow",
    pressure: 3,
  },
  strong_winds: {
    id: "strong_winds",
    label: "Strong Winds",
    resonance: "steadying",
    pressure: 4,
  },
  thunderstorm: {
    id: "thunderstorm",
    label: "Thunderstorm",
    resonance: "sheltering",
    pressure: 5,
  },
} as const satisfies Record<EnvironmentId, EnvironmentResponse>;

/**
 * The routing function.
 * Currently a 1:1 map, but this is where you will eventually add the logic 
 * to map things like "burnout" or "overthinking" -> "heavy_fog".
 */
export function deriveEnvironment(state: EnvironmentState): EnvironmentResponse {
  
  const activeClimate = state.climate ?? "unselected"; 
  
  // Future many-to-one mapping logic will go here.
  // For now, it simply passes the climate through to find the environment.
  return environments[activeClimate as EnvironmentId] || environments["unselected"];
}