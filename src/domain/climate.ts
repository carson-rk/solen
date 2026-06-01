/**
 * Solen Environmental Entry Language
 * Defines the core atmospheric states and their corresponding felt experiences.
 */

import type { EmergencePacing } from "@/systems/environment/primitives/EnvironmentReveal";  

export const climateIds = [
  "clear_skies",
  "light_rain",
  "heavy_fog",
  "strong_winds",
  "thunderstorm",
  "neutral", // A baseline, non-descript climate for initial states
] as const;

export type Climate = (typeof climateIds)[number];

export type AtmosphericDepth = 0 |1 | 2 | 3 | 4 | 5;

export type InteractionProfile = {
  /** 
   * Tells the rendering/UI engine 
   * that this climate demands structural texture alignment before settling.
   */
  requiresResonanceDeepening: boolean;
  defaultPacing: EmergencePacing;
};

export type ClimateConfig = {
  id: Climate;
  label: string;
  perception: string; //focuses on the felt environmental experience
  depth: AtmosphericDepth;
  interactionProfile: InteractionProfile;
};

// environmental climate
export const climateConfigs: Record<Climate, ClimateConfig> = {
  clear_skies: {
    id: "clear_skies",
    label: "Clear Skies",
    perception: "open and expansive",
    depth: 1,
    interactionProfile: { 
      requiresResonanceDeepening: false,
      defaultPacing: "steady"
    },
  },
  light_rain: {
    id: "light_rain",
    label: "Light Rain",
    perception: "steady but saturated",
    depth: 2,
    interactionProfile: { 
      requiresResonanceDeepening: false,
      defaultPacing: "steady"
    },
  },
  heavy_fog: {
    id: "heavy_fog",
    label: "Heavy Fog",
    perception: "dense and opaque",
    depth: 3,
    interactionProfile: { 
      requiresResonanceDeepening: true, 
      defaultPacing: "lingering"}, 
  },
  strong_winds: {
    id: "strong_winds",
    label: "Strong Winds",
    perception: "turbulent and restless",
    depth: 4,
    interactionProfile: { 
      requiresResonanceDeepening: true,
      defaultPacing: "immediate"
    },
  },
  thunderstorm: {
    id: "thunderstorm",
    label: "Thunderstorm",
    perception: "charged and volatile",
    depth: 5,
    interactionProfile: { 
      requiresResonanceDeepening: true,
      defaultPacing: "immediate"
    },
  },
  neutral: {
    id: "neutral",
    label: "Neutral",
    perception: "balanced and stable",
    depth: 0,
    interactionProfile: { 
      requiresResonanceDeepening: false,
      defaultPacing: "steady"
    },
  }
};

/**
 * Type guard to verify if a given string is a valid Solen climate.
 */
export function isClimate(value: unknown): value is Climate {
  return typeof value === "string" && climateIds.includes(value as Climate);
}

/**
 * Direct lookup utility for rapid runtime depth checks.
 */
export function getAtmosphericDepth(climate: Climate): AtmosphericDepth {
  return climateConfigs[climate].depth;
}