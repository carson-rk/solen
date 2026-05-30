"use client";

import type { CSSProperties, ReactNode } from "react";
import type { EnvironmentResponse } from "@/systems/atmosphere/environmentResponse";
import { cn } from "@/lib/utils";

// 1. The Strict Contract
export type EnvironmentSurfaceContract = {
  backgroundOnly: boolean;          // If true, environment ignores UI completely
  supportsUIInheritance: boolean;   // Deprecated/False for Solen's current direction
  intensityMode: "visual" | "layout" | "physics"; // How resonance affects the engine
};

type EnvironmentSurfaceProps = {
  atmosphere: EnvironmentResponse;
  contract?: Partial<EnvironmentSurfaceContract>;
  children: ReactNode;
  className?: string;
};

const defaultContract: EnvironmentSurfaceContract = {
  backgroundOnly: true,
  supportsUIInheritance: false, // Enforces UI isolation
  intensityMode: "visual",
};

export function EnvironmentSurface({
  atmosphere,
  contract = defaultContract,
  children,
  className,
}: EnvironmentSurfaceProps) {
  const activeContract = { ...defaultContract, ...contract };
  const climate = atmosphere.id === "unselected" ? "neutral" : atmosphere.id;

  return (
    <main
      className={cn("world-engine-root relative w-full overflow-hidden", className)}
      data-climate={climate}
      data-resonance={atmosphere.resonance}
      data-intensity-mode={activeContract.intensityMode}
      // Maps continuous pressure (e.g., 0.0 to 1.0) for CSS interpolation
      style={{ "--atmospheric-pressure": String(atmosphere.pressure) } as CSSProperties}
    >
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
    </main>
  );
}
