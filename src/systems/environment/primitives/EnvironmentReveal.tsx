import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useAtmosphericPacing } from "../EnvironmentProvider";

/**
 * Environmental Rendering Primitives
 * These define the atmospheric mechanics of the DOM space.
 */

export type EmergencePhase =
  | "hidden"     // Completely inactive, awaiting presence
  | "revealing"  // Actively emerging into the space
  | "settled"    // Fully present 
  | "fading"     // Retreating into the residue layer
  | "dissolved"; // Gone, but DOM node may still exist temporarily

export type EmergencePacing = 
  | "immediate"  // Sharp, abrupt changes
  | "steady"     // Normal atmospheric shift
  | "lingering"; // Slow, heavy, dragging transitions

type EnvironmentRevealProps = HTMLAttributes<HTMLDivElement> & {
  phase: EmergencePhase;
  pacing?: EmergencePacing;
};

export function EnvironmentReveal({
  phase,
  pacing: manualPacing, // Rename to allow fallback
  className,
  ...props
}: EnvironmentRevealProps) {
  // 1. Read the environment's default physics
    const atmosphericPacing = useAtmosphericPacing();
    
    // 2. Use manual prop if provided, otherwise surrender to the environment
    const activePacing = manualPacing ?? atmosphericPacing;
  
    const isAtmosphericallyHidden = phase === "hidden" || phase === "dissolved";

  return (
    <div
      data-phase={phase}
      data-pacing={activePacing}
      aria-hidden={isAtmosphericallyHidden}
      inert={isAtmosphericallyHidden}
      className={cn("environment-reveal", className)}
      {...props}
    />
  );
}