"use client";

import { AtmosphericStack } from "@/components/layout/environmental/AtmosphericStack";
import { Button } from "@/components/ui/button";
import { climateConfigs, type Climate } from "@/domain/climate";
import { cn } from "@/lib/utils";
import { EnvironmentReveal } from "@/systems/environment/primitives/EnvironmentReveal";
import { settlingPlan } from "@/systems/pacing/plans";
import { usePacedReveal } from "@/systems/pacing/usePacedReveal";

export const settlingClimateIds = [
  "clear_skies",
  "light_rain",
  "heavy_fog",
  "strong_winds",
  "thunderstorm",
] as const;

export type SettlingClimate = (typeof settlingClimateIds)[number];

type SettlingStageProps = {
  resetKey: string;
  selectedClimate: Climate | null;
  previewClimate: SettlingClimate | null;
  onPreviewClimate: (climate: SettlingClimate) => void;
  onClearPreviewClimate: () => void;
  onSelectClimate: (climate: SettlingClimate) => void;
  onSkip: () => void;
};

export function SettlingStage({
  resetKey,
  selectedClimate,
  previewClimate,
  onPreviewClimate,
  onClearPreviewClimate,
  onSelectClimate,
  onSkip,
}: SettlingStageProps) {
  const reveal = usePacedReveal({
    ...settlingPlan,
    resetKey,
  });

  return (
    <AtmosphericStack className="settling-stage">
      <EnvironmentReveal
        className="settling-support-wrap"
        phase={reveal.getPhase("settling-support")}
      >
        <p className="settling-support">what&apos;s the weather like inside?</p>
      </EnvironmentReveal>

      <EnvironmentReveal phase={reveal.getPhase("settling-title")}>
        <h1 className="heading settling-title">you do not need to explain it.</h1>
      </EnvironmentReveal>

      <EnvironmentReveal
        className="settling-orbs-wrap"
        phase={reveal.getPhase("settling-orbs")}
      >
        <ul className="settling-orb-row" aria-label="Room climates">
          {settlingClimateIds.map((climate) => {
            const isSelected = selectedClimate === climate;
            const isPreviewed = previewClimate === climate;
            const label = climateConfigs[climate].label;

            return (
              <li key={climate}>
                <button
                  type="button"
                  className={cn(
                    "climate-orb",
                    isSelected && "is-selected",
                    isPreviewed && "is-previewed"
                  )}
                  data-climate={climate}
                  aria-pressed={isSelected}
                  onBlur={onClearPreviewClimate}
                  onClick={() => onSelectClimate(climate)}
                  onFocus={() => onPreviewClimate(climate)}
                  onPointerEnter={() => onPreviewClimate(climate)}
                  onPointerLeave={onClearPreviewClimate}
                >
                  <span className="climate-orb__core" aria-hidden="true" />
                  <span className="climate-orb__label">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </EnvironmentReveal>

      <EnvironmentReveal
        className="settling-skip-wrap"
        phase={reveal.getPhase("settling-skip")}
      >
        <Button intent="withdraw" size="lg" onClick={onSkip}>
          Continue
        </Button>
      </EnvironmentReveal>
    </AtmosphericStack>
  );
}
