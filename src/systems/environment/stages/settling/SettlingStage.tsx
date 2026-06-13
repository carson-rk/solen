"use client";

import { AtmosphericStack } from "@/components/layout/environmental/AtmosphericStack";
import { Button } from "@/components/ui/button";
import {
  climateConfigs,
  settlingClimateIds,
  type Climate,
  type SettlingClimate,
} from "@/domain/climate";
import { cn } from "@/lib/utils";
import { EnvironmentReveal } from "@/systems/environment/primitives/EnvironmentReveal";
import { settlingPlan } from "@/systems/pacing/plans";
import { usePacedReveal } from "@/systems/pacing/usePacedReveal";

export type { SettlingClimate };

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
    <div className="relative">
      <div className="absolute top-4 left-4 z-20 sm:top-6 sm:left-6">
        <p className="text-sm tracking-wide opacity-50 text-[hsl(var(--text-ambient))]">
          solen
        </p>
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <AtmosphericStack>
          <EnvironmentReveal phase={reveal.getPhase("settling-prompt")}>
            <p className="settling-prompt text-center leading-7">
              what&apos;s the weather like inside?
            </p>
          </EnvironmentReveal>

          <EnvironmentReveal phase={reveal.getPhase("settling-title")}>
            <h1 className="heading settling-title text-center">
              you do not need to explain it.
            </h1>
          </EnvironmentReveal>

          <EnvironmentReveal
            className="mt-12"
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
            className="mt-12 flex justify-center"
            phase={reveal.getPhase("settling-skip")}
          >
            <Button intent="proceed" size="default" onClick={onSkip}>
              Continue
            </Button>
          </EnvironmentReveal>
        </AtmosphericStack>
      </div>
    </div>
  );
}
