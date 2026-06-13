"use client";

import Link from "next/link";
import { AtmosphericStack } from "@/components/layout/environmental/AtmosphericStack";
import { Button } from "@/components/ui/button";
import { EnvironmentReveal } from "@/systems/environment/primitives/EnvironmentReveal";
import { arrivalPlan } from "@/systems/pacing/plans";
import { usePacedReveal } from "@/systems/pacing/usePacedReveal";

type ArrivalStageProps = {
  resetKey: string;
  onContinue: () => void;
};

export function ArrivalStage({ resetKey, onContinue }: ArrivalStageProps) {
  const reveal = usePacedReveal({
    ...arrivalPlan,
    resetKey,
  });

  return (
    // Full screen wrapper to control positioning layers
    <div className="relative">
      
      {/* WORDMARK (top-left, outside centered flow) */}
      <div className="absolute top-4 left-4 z-20 sm:top-6 sm:left-6">
        <p className="text-sm text-[hsl(var(--text-ambient))] tracking-wide">
          solen
        </p>
      </div>

      {/* CENTERED CONTENT LAYER */}
      <div className="flex min-h-screen items-center justify-center">
        <AtmosphericStack>

          <EnvironmentReveal
            className="text-center"
            phase={reveal.getPhase("arrival-title")}
          >
            <h1 className="heading">you&apos;re here.</h1>
          </EnvironmentReveal>

          <EnvironmentReveal
            phase={reveal.getPhase("arrival-copy")}
          >
            <p className="text-center leading-7 text-[hsl(var(--text-secondary))]">
              that is enough for now.
            </p>
          </EnvironmentReveal>

          <EnvironmentReveal
            className="mt-9"
            phase={reveal.getPhase("arrival-actions")}
          >
            <div className="flex flex-col items-center gap-2">
              <Button intent="proceed" size="default" onClick={onContinue}>
                continue
              </Button>

              <Button asChild intent="withdraw" size="default">
                <Link href="/about">about solen</Link>
              </Button>
            </div>
          </EnvironmentReveal>

        </AtmosphericStack>
      </div>
    </div>
  );
}