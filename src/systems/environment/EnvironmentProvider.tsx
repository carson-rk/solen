import { createContext, useContext } from "react";
import type { EnvironmentState } from "./environmentState";
import { climateConfigs } from "@/domain/climate";
import type { EmergencePacing } from "./primitives/EnvironmentReveal";

const EnvironmentContext = createContext<EnvironmentState | null>(null);

/**
 * A specialized hook just for rendering primitives to ask:
 * "What is the physical pacing of the room right now?"
 */
export function useAtmosphericPacing(): EmergencePacing {
  const state = useContext(EnvironmentContext);
  
  // If no environment is active, fallback to a steady baseline
  if (!state || !state.climate) return "steady";
  
  return climateConfigs[state.climate].interactionProfile.defaultPacing;
}