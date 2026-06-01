"use client";

import type { CSSProperties, ReactNode } from "react";
import type { EnvironmentResponse } from "@/systems/atmosphere/environmentResponse";
import type { EnvironmentState } from "@/systems/environment/environmentState";
import { neutralTokens } from "@/systems/atmosphere/tokens/neutral";
import { EnvironmentProvider } from "@/systems/environment/EnvironmentProvider";
import { cn } from "@/lib/utils";

// 1. The Strict Contract
export type EnvironmentSurfaceContract = {
  backgroundOnly: boolean;          // If true, environment ignores UI completely
  supportsUIInheritance: boolean;   // Deprecated/False for Solen's current direction
  intensityMode: "visual" | "layout" | "physics"; // How resonance affects the engine
};

type EnvironmentSurfaceProps = {
  atmosphere: EnvironmentResponse;
  state: EnvironmentState;
  contract?: Partial<EnvironmentSurfaceContract>;
  children: ReactNode;
  className?: string;
};

type AtmosphereStyle = CSSProperties & Record<`--${string}`, string | number>;

const defaultContract: EnvironmentSurfaceContract = {
  backgroundOnly: true,
  supportsUIInheritance: false, // Enforces UI isolation
  intensityMode: "visual",
};

export function EnvironmentSurface({
  atmosphere,
  state,
  contract = defaultContract,
  children,
  className,
}: EnvironmentSurfaceProps) {
  const activeContract = { ...defaultContract, ...contract };
  const climate = atmosphere.id === "unselected" ? "neutral" : atmosphere.id;
  const atmosphereStyle: AtmosphereStyle = {
    "--surface-base": neutralTokens.surface.base,
    "--surface-elevated": neutralTokens.surface.elevated,
    "--text-primary": neutralTokens.text.primary,
    "--text-secondary": neutralTokens.text.secondary,
    "--text-ambient": neutralTokens.text.ambient,
    "--action-proceed": neutralTokens.action.proceed,
    "--action-proceed-foreground": neutralTokens.action.proceedForeground,
    "--action-settle": neutralTokens.action.settle,
    "--action-settle-foreground": neutralTokens.action.settleForeground,
    "--accent-base": neutralTokens.accent.base,
    "--accent-soft": neutralTokens.accent.soft,
    "--atmosphere-fog": neutralTokens.atmosphere.fog,
    "--atmosphere-glow": neutralTokens.atmosphere.glow,
    "--atmosphere-noise": neutralTokens.atmosphere.noise,
    "--atmosphere-shadow": neutralTokens.atmosphere.shadow,
    "--atmosphere-veil": neutralTokens.atmosphere.veil,
    "--border-base": neutralTokens.border,
    "--atmospheric-pressure": atmosphere.continuousPressure,
  };

  return (
    <main
      className={cn("world-engine-root relative w-full overflow-hidden", className)}
      data-climate={climate}
      data-resonance={atmosphere.resonance}
      data-stage={atmosphere.stage}
      data-intensity-mode={activeContract.intensityMode}
      style={atmosphereStyle}
    >
      <EnvironmentProvider state={state}>
        {/* LAYER 1: ATMOSPHERIC CANOPY (Visual Physics & Transition Bridges) */}
        <div 
          className="world-canopy pointer-events-none fixed inset-0 z-0" 
          aria-hidden="true"
        >
          <div className="atmosphere-layer atmosphere-haze absolute inset-0" />
          <div className="atmosphere-layer atmosphere-veil absolute inset-0 mix-blend-multiply" />
        </div>

        {/* LAYER 2: VIEWPORT CONTAINMENT (Scroll & Camera Anchoring) */}
        <div className="world-viewport relative z-10 min-h-screen w-full overflow-x-hidden overflow-y-auto scroll-smooth">
          
          {/* LAYER 3: UI CONTENT ISOLATE (Strict boundary against style bleeding) */}
          <div className="world-content-isolate isolate w-full">
            {children}
          </div>
          
        </div>
      </EnvironmentProvider>
    </main>
  );
}
