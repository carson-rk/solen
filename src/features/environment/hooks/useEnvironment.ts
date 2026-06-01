"use client";

import { useMemo } from "react";

import type { ResonanceId } from "@/domain/resonance"; 
import type { Climate } from "@/domain/climate";
import type { EnvironmentStage } from "@/domain/environmentalPresence";
import { deriveEnvironment, type EnvironmentResponse } from "@/systems/atmosphere/environmentResponse";
import {
  createEnvironmentState,
  getEnvironmentStateKey,
  type EnvironmentState,
} from "@/systems/environment/environmentState";

type UseEnvironmentInput = {
  stage: EnvironmentStage;
  climate: Climate | null;
  resonances: ResonanceId[]; 
  continuityWeight?: number;
};

type EnvironmentHookReturn = {
  environmentResponse: EnvironmentResponse;
  state: EnvironmentState; 
  stateKey: string;
};

export function useEnvironment({
  stage: initialStage,
  climate: initialClimate,
  resonances: initialResonances,
  continuityWeight = 0,
}: UseEnvironmentInput): EnvironmentHookReturn {
  const resonanceKey = [...initialResonances].sort().join(",");
  
  const stableResonances = useMemo(
    () => (resonanceKey ? (resonanceKey.split(",") as ResonanceId[]) : []),
    [resonanceKey]
  );

  const state = useMemo(
    () =>
      createEnvironmentState({
        stage: initialStage,
        climate: initialClimate,
        resonances: stableResonances,
        continuityWeight,
      }),
    [continuityWeight, initialClimate, initialStage, stableResonances]
  );

  const environmentResponse = useMemo(() => deriveEnvironment(state), [state]);
  
  const stateKey = useMemo(() => getEnvironmentStateKey(state), [state]);

  return {
    environmentResponse,
    state,
    stateKey,
  };
}
