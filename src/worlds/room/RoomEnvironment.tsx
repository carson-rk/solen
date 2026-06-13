"use client";

import { useState } from "react";

import type { Climate, SettlingClimate } from "@/domain/climate";
import type { EnvironmentStage } from "@/domain/environmentalPresence";
import { EnvironmentSurface } from "@/systems/environment/EnvironmentSurface";
import { useEnvironment } from "@/features/environment/hooks/useEnvironment";
import { Container } from "@/components/layout/Container";
import { RoomFrame } from "@/components/layout/environmental/RoomFrame";
import { ArrivalStage } from "@/systems/environment/stages/arrival/ArrivalStage";
import { SettlingStage } from "@/systems/environment/stages/settling/SettlingStage";
import { DeepeningStage } from "@/systems/environment/stages/deepening/DeepeningStage";
import { LingeringStage } from "@/systems/environment/stages/lingering/LingeringStage";
import { DriftingStage } from "@/systems/environment/stages/drifting/DriftingStage";

export default function RoomEnvironment() {
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
    setStage("deepening");
  };

  const handleDeepeningComplete = () => {
    setStage("lingering");
  };

  const handleLingeringComplete = () => {
    setStage("drifting");
  };

  const handleDriftingComplete = () => {
    setStage("arrival");
    setClimate("neutral");
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

          {stage === "deepening" && (
            <DeepeningStage 
              resetKey={stage}
              onContinue={handleDeepeningComplete}
            />
          )}

          {stage === "lingering" && (
            <LingeringStage 
              resetKey={stage}
              onContinue={handleLingeringComplete}
            />
          )}

          {stage === "drifting" && (
            <DriftingStage 
              resetKey={stage}
              onContinue={handleDriftingComplete}
            />
          )}
        </RoomFrame>
      </Container>
    </EnvironmentSurface>
  );
}
