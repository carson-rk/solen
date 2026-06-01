"use client";

import { useState } from "react";

import type { Climate } from "@/domain/climate";
import type { EnvironmentStage } from "@/domain/environmentalPresence";
import { EnvironmentSurface } from "@/systems/environment/EnvironmentSurface";
import { useEnvironment } from "@/features/environment/hooks/useEnvironment";
import { Container } from "@/components/layout/Container";
import { RoomFrame } from "@/components/layout/environmental/RoomFrame";
import { ArrivalStage } from "@/systems/environment/stages/arrival/ArrivalStage";
import {
  SettlingStage,
  type SettlingClimate,
} from "@/systems/environment/stages/settling/SettlingStage";

export default function RoomWorld() {
  const [stage, setStage] = useState<EnvironmentStage>("arrival");
  const [climate, setClimate] = useState<Climate>("neutral");
  const [hoverClimate, setHoverClimate] = useState<SettlingClimate | null>(null);
  const activeClimate = hoverClimate ?? climate;

  const environment = useEnvironment({
    stage,
    climate: activeClimate,
    resonances: [],
  });

  const handleContinue = () => {
    setHoverClimate(null);
    setStage("settling");
  };

  const handleSelectClimate = (selectedClimate: SettlingClimate) => {
    setClimate(selectedClimate);
    setHoverClimate(null);
  };

  const handleSkip = () => {
    setClimate("neutral");
    setHoverClimate(null);
  };

  return (
    <EnvironmentSurface
      atmosphere={environment.environmentResponse}
      state={environment.state}
    >
      <Container>
        <RoomFrame>
          {stage === "arrival" && (
            <ArrivalStage 
              resetKey={stage}
              onContinue={handleContinue} 
            />
          )}

          {stage === "settling" && (
            <SettlingStage
              resetKey={stage}
              selectedClimate={climate}
              previewClimate={hoverClimate}
              onPreviewClimate={setHoverClimate}
              onClearPreviewClimate={() => setHoverClimate(null)}
              onSelectClimate={handleSelectClimate}
              onSkip={handleSkip}
            />
          )}
        </RoomFrame>
      </Container>
    </EnvironmentSurface>
  );
}
