"use client";

import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { RoomFrame } from "@/components/layout/environmental/RoomFrame";
import { AtmosphericStack } from "@/components/layout/environmental/AtmosphericStack";

import { Button } from "@/components/ui/button";
import { EnvironmentReveal } from "@/systems/environment/primitives/EnvironmentReveal";
import { EnvironmentSurface } from "@/systems/environment/EnvironmentSurface";
import { useEnvironment } from "@/features/environment/hooks/useEnvironment";
import { roomArrivalPlan } from "@/systems/pacing/plans";
import { usePacedReveal } from "@/systems/pacing/usePacedReveal";

export default function RoomWorld() {
  const environment = useEnvironment({
    stage: "arrival",
    climate: null,
    resonances: [],
  });
  
  const reveal = usePacedReveal({
    ...roomArrivalPlan,
    resetKey: environment.stateKey,
  });

  return (
    <EnvironmentSurface atmosphere={environment.environmentResponse}>
      <Container>
        <RoomFrame>
          <AtmosphericStack>
            
            <EnvironmentReveal phase={reveal.getPhase("room-signal")}>
              {/* Note: In the future, this text color might use your new token classes like text-text-ambient */}
              <p className="text-sm uppercase text-[hsl(var(--text-ambient))]">
                Solen
              </p>
            </EnvironmentReveal>

            <EnvironmentReveal
              className="mt-6"
              phase={reveal.getPhase("room-title")}
            >
              <h1 className="heading">
                you&apos;re here.
              </h1>
            </EnvironmentReveal>

            <EnvironmentReveal
              className="mt-5"
              phase={reveal.getPhase("room-copy")}
            >
              <p className="max-w-xl text-base leading-7 text-[hsl(var(--text-secondary))] sm:text-lg">
                that is enough for now.
              </p>
            </EnvironmentReveal>

            <EnvironmentReveal
              className="mt-9"
              phase={reveal.getPhase("room-action")}
            >
            
              <Button asChild intent="proceed" size="lg">
                <Link href="/reflect">Continue</Link>
              </Button>
            </EnvironmentReveal>
            
          </AtmosphericStack>
        </RoomFrame>
      </Container>
    </EnvironmentSurface>
  );
}