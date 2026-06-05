"use client";

import { AtmosphericStack } from "@/components/layout/environmental/AtmosphericStack";
import { EnvironmentReveal } from "@/systems/environment/primitives/EnvironmentReveal";
import { lingeringPlan } from "@/systems/pacing/plans";
import { usePacedReveal } from "@/systems/pacing/usePacedReveal";
import { Button } from "@/components/ui/button";

type LingeringStageProps = {
  resetKey: string;
  onContinue?: () => void;
};

/**
 * Lingering Stage - The holding state
 * 
 * After the user has interacted, the environment:
 * - slows down
 * - becomes quieter
 * - preserves emotional residue
 * - encourages remaining present
 * 
 * This should feel like "staying in the room after the conversation."
 */
export function LingeringStage({ resetKey, onContinue }: LingeringStageProps) {
  const reveal = usePacedReveal({
    ...lingeringPlan,
    resetKey,
  });

  return (
    <AtmosphericStack className="lingering-stage">
      {/* LAYER 1: ENVIRONMENTAL SILENCE */}
      <EnvironmentReveal phase={reveal.getPhase("lingering-silence")}>
        <div className="lingering-silence h-16" aria-hidden="true" />
      </EnvironmentReveal>

      {/* LAYER 2: LINGERING MESSAGE */}
      <EnvironmentReveal phase={reveal.getPhase("lingering-message")}>
        <div className="flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-widest text-[hsl(var(--text-ambient))] mb-8">
            the room is still here
          </p>
          <p className="heading text-2xl max-w-md leading-relaxed text-[hsl(var(--text-primary))]">
            stay if you want to.
          </p>
          <p className="mt-6 max-w-lg text-base text-[hsl(var(--text-secondary))] leading-7">
            There is no need to leave right away. The space will remain here as long as you do.
          </p>
        </div>
      </EnvironmentReveal>

      {/* LAYER 3: QUIET ACTION */}
      <EnvironmentReveal phase={reveal.getPhase("lingering-quiet")}>
        <div className="mt-12 flex justify-center">
          <Button 
            intent="withdraw" 
            onClick={onContinue}
            size="lg"
          >
            when you&apos;re ready
          </Button>
        </div>
      </EnvironmentReveal>
    </AtmosphericStack>
  );
}
