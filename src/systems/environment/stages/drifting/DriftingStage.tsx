"use client";

import { AtmosphericStack } from "@/components/layout/environmental/AtmosphericStack";
import { EnvironmentReveal } from "@/systems/environment/primitives/EnvironmentReveal";
import { driftingPlan } from "@/systems/pacing/plans";
import { usePacedReveal } from "@/systems/pacing/usePacedReveal";
import { Button } from "@/components/ui/button";

type DriftingStageProps = {
  resetKey: string;
  onContinue?: () => void;
};

/**
 * Drifting Stage - The exit state
 * 
 * Not logout. Not session end. Not goodbye.
 * The environment gradually releases the user.
 * 
 * Should feel like "walking away while the room remains."
 * The system should preserve continuity for future return.
 */
export function DriftingStage({ resetKey, onContinue }: DriftingStageProps) {
  const reveal = usePacedReveal({
    ...driftingPlan,
    resetKey,
  });

  return (
    <AtmosphericStack className="drifting-stage">
      {/* LAYER 1: FADE OUT */}
      <EnvironmentReveal phase={reveal.getPhase("drifting-fade")}>
        <div className="drifting-fade h-24" aria-hidden="true" />
      </EnvironmentReveal>

      {/* LAYER 2: DRIFTING MESSAGE */}
      <EnvironmentReveal phase={reveal.getPhase("drifting-message")}>
        <div className="flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-widest text-[hsl(var(--text-ambient))] mb-8">
            the room remains
          </p>
          <p className="heading text-2xl max-w-md leading-relaxed text-[hsl(var(--text-primary))]">
            you can return anytime.
          </p>
          <p className="mt-6 max-w-lg text-base text-[hsl(var(--text-secondary))] leading-7">
            The space will hold your presence until you come back. Nothing is lost.
          </p>
        </div>
      </EnvironmentReveal>

      {/* LAYER 3: EXIT ACTION */}
      <EnvironmentReveal phase={reveal.getPhase("drifting-exit")}>
        <div className="mt-12 flex justify-center">
          <Button 
            intent="proceed" 
            onClick={onContinue}
            size="lg"
          >
            leave the room
          </Button>
        </div>
      </EnvironmentReveal>
    </AtmosphericStack>
  );
}
