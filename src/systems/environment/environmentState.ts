import type { ResonanceId } from "@/domain/resonance";
import { getAtmosphericDepth, type Climate, type AtmosphericDepth } from "@/domain/climate";
import type { EnvironmentStage } from "@/domain/environmentalPresence";

export type EnvironmentState = {
  stage: EnvironmentStage;
  climate: Climate | null;
  resonances: ResonanceId[];
  atmosphericDepth: AtmosphericDepth; 
  continuityWeight: number;               
};

type EnvironmentInitialization = {
  stage: EnvironmentStage;
  climate: Climate | null;
  resonances: ResonanceId[];
  continuityWeight?: number;
};

/**
 * Creates a clean, normalized instance of the current environmental environment.
 */
export function createEnvironmentState({
  stage,
  climate,
  resonances,
  continuityWeight = 0,
}: EnvironmentInitialization): EnvironmentState {
  return {
    stage,
    climate,
    resonances: [...resonances],
    atmosphericDepth: climate ? getAtmosphericDepth(climate) : 0,
    continuityWeight,
  };
}

/**
 * Generates a unique tracking key for state cache and asset management.
 * Solves string key sorting safety cleanly inline.
 */
export function getEnvironmentStateKey(state: EnvironmentState): string {
  const sortedResonanceTokens = [...state.resonances].sort().join(",");

  return [
    state.stage,
    state.climate ?? "unselected",
    state.atmosphericDepth,
    sortedResonanceTokens,
  ].join(":");
}