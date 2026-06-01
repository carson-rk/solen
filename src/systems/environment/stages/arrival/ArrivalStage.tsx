"use client";

import Link from "next/link";
import { AtmosphericStack } from "@/components/layout/environmental/AtmosphericStack";
import { Button } from "@/components/ui/button";
import { EnvironmentReveal } from "@/systems/environment/primitives/EnvironmentReveal";
import { arrivalPlan } from "@/systems/pacing/plans";
import { usePacedReveal } from "@/systems/pacing/usePacedReveal";

type ArrivalStageProps = {
  resetKey: string;
  onContinue: () => void; // State mutation is passed down from the Orchestrator
};

export function ArrivalStage({ resetKey, onContinue }: ArrivalStageProps) {
  const reveal = usePacedReveal({
    ...arrivalPlan,
    resetKey,
  });

  return (
    <AtmosphericStack>
      <EnvironmentReveal phase={reveal.getPhase("arrival-signal")}>
        <p className="text-sm uppercase text-[hsl(var(--text-ambient))]">
          Solen
        </p>
      </EnvironmentReveal>

      <EnvironmentReveal
        className="mt-6"
        phase={reveal.getPhase("arrival-title")}
      >
        <h1 className="heading">you&apos;re here.</h1>
      </EnvironmentReveal>

      <EnvironmentReveal
        className="mt-5"
        phase={reveal.getPhase("arrival-copy")}
      >
        <p className="max-w-xl text-base leading-7 text-[hsl(var(--text-secondary))] sm:text-lg">
          that is enough for now.
        </p>
      </EnvironmentReveal>

      <EnvironmentReveal
        className="mt-9"
        phase={reveal.getPhase("arrival-actions")}
      >
        {/* Added flex container to prevent actions from collapsing together */}
        <div className="flex items-center gap-4">
          <Button 
            intent="proceed" 
            size="lg" 
            onClick={onContinue}
          >
            Continue
          </Button>

          <Button 
            asChild 
            intent="withdraw" 
            size="lg"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </EnvironmentReveal>
    </AtmosphericStack>
  );
}