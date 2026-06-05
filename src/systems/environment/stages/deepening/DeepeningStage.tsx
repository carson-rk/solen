"use client";

import { useState } from "react";
import { AtmosphericStack } from "@/components/layout/environmental/AtmosphericStack";
import { EnvironmentReveal } from "@/systems/environment/primitives/EnvironmentReveal";
import { ThresholdItem } from "./ThresholdItem";
import { StoryInput } from "./StoryInput";
import { Button } from "@/components/ui/button";
import { deepeningPlan } from "@/systems/pacing/plans";
import { usePacedReveal } from "@/systems/pacing/usePacedReveal";
import { cn } from "@/lib/utils";

import { residueFragments } from "@/worlds/room/data/residueFragments";

type DeepeningStageProps = {
  resetKey: string;
  onContinue?: () => void;
};

type PresenceThreshold = "self" | "resonance" | "human";

export function DeepeningStage({ resetKey, onContinue }: DeepeningStageProps) {
  const reveal = usePacedReveal({
    ...deepeningPlan,
    resetKey,
  });

  const [selectedThreshold, setSelectedThreshold] = useState<PresenceThreshold | null>(null);
  const [storyText, setStoryText] = useState("");
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Sample resonance fragments - in production these would come from a database
  const resonanceFragments = [
    {
      time: "left at 2:14 am · last week",
      text: "I keep arriving at this feeling and I still don't know what to call it. Like standing in a room that used to mean something.",
      resonance: "18 people have sat with this",
    },
    {
      time: "left on a tuesday · this month",
      text: "Tired in a way that sleep doesn't fix.",
      resonance: "41 people have sat with this",
    },
    {
      time: "left at dusk · last winter",
      text: "I thought I was doing better. Then I wasn't. I don't know why I'm surprised by that anymore.",
      resonance: "27 people have sat with this",
    },
  ];

  const handlePanelClose = () => {
    setIsPanelOpen(false);
    setSelectedThreshold(null);
  };

  const handleThresholdSelect = (threshold: PresenceThreshold) => {
    setSelectedThreshold(threshold);
    setIsPanelOpen(true);
  };

  const handleStoryLeave = () => {
    // In production, this would save the story to a database
    setIsPanelOpen(false);
    setSelectedThreshold(null);
    // Optionally transition to lingering stage
    if (onContinue) onContinue();
  };

  return (
    <AtmosphericStack className="deepening-stage">
      
      {/* LAYER 1: ENVIRONMENTAL SILENCE */}
      <EnvironmentReveal phase={reveal.getPhase("deepening-silence")}>
        <div className="deepening-silence" aria-hidden="true">
          <div className="h-8" />
        </div>
      </EnvironmentReveal>

      {/* LAYER 2: PERIPHERAL EMOTIONAL RESIDUE */}
      <EnvironmentReveal phase={reveal.getPhase("deepening-residue")}>
        <div className="deepening-residue flex flex-col gap-3 my-6">
          {residueFragments.map((fragment, index) => (
            <p
              key={index}
              className={cn(
                "deepening-fragment text-sm text-[hsl(var(--text-ambient))] opacity-30 transition-opacity duration-1000",
                index % 3 === 0 && "ml-2 mr-auto text-left",
                index % 3 === 1 && "mx-auto text-center",
                index % 3 === 2 && "ml-auto mr-2 text-right"
              )}
              style={{ animationDelay: `${index * 400}ms` }}
            >
              {fragment}
            </p>
          ))}
        </div>
      </EnvironmentReveal>

      {/* LAYER 3: CENTRAL QUESTION */}
      <EnvironmentReveal phase={reveal.getPhase("deepening-signal")}>
        <p className="text-sm uppercase tracking-widest text-[hsl(var(--text-ambient))]">
          the room is open
        </p>
      </EnvironmentReveal>

      <EnvironmentReveal className="mt-4" phase={reveal.getPhase("deepening-title")}>
        <h1 className="heading">you can move deeper, if you want to.</h1>
      </EnvironmentReveal>

      <EnvironmentReveal className="mt-4" phase={reveal.getPhase("deepening-subtitle")}>
        <p className="max-w-xl text-base text-[hsl(var(--text-secondary))] leading-7">
          Nothing is required here. These are openings, not tasks.
        </p>
      </EnvironmentReveal>

      {/* LAYER 4: PRESENCE THRESHOLDS */}
      <EnvironmentReveal phase={reveal.getPhase("deepening-thresholds")}>
        <div className="deepening-thresholds mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-stretch sm:justify-center sm:gap-6">
          <ThresholdItem
            label="Leave something here"
            path="a thought, a fragment, a weight you've been carrying"
            isSelected={selectedThreshold === "self"}
            onSelect={() => handleThresholdSelect("self")}
          />
          <ThresholdItem
            label="Sit with what others left"
            path="emotional traces, anonymous and quiet"
            isSelected={selectedThreshold === "resonance"}
            onSelect={() => handleThresholdSelect("resonance")}
          />
          <ThresholdItem
            label="Open toward another presence"
            path="someone who understands this kind of weight"
            isSelected={selectedThreshold === "human"}
            onSelect={() => handleThresholdSelect("human")}
          />
        </div>
      </EnvironmentReveal>

      {/* STORY PANEL */}
      {isPanelOpen && selectedThreshold === "self" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--surface-base))] bg-opacity-95 backdrop-blur-sm transition-opacity duration-800">
          <div className="w-full max-w-2xl mx-4 bg-[hsl(var(--surface-base))] rounded-lg border border-[hsl(var(--border-base))]/[0.1] p-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm uppercase tracking-widest text-[hsl(var(--text-ambient))]">your space</p>
              <Button intent="withdraw" onClick={handlePanelClose}>
                leave quietly
              </Button>
            </div>
            <p className="text-[hsl(var(--text-secondary))] mb-8 leading-7">
              You can leave something here. It does not have to be finished.<br />
              The room holds what you bring into it.
            </p>
            <EnvironmentReveal phase={reveal.getPhase("deepening-story")}>
              <StoryInput 
                value={storyText}
                onChange={setStoryText}
                placeholder="Something is here, even if it doesn't have a name yet."
              />
            </EnvironmentReveal>
            <div className="mt-6 pt-6 border-t border-[hsl(var(--border-base))]/[0.1] flex items-center justify-between">
              <p className="text-xs text-[hsl(var(--text-ambient))]">
                {storyText.length > 0 ? "held quietly" : "not saved"}
              </p>
              <Button 
                intent="proceed" 
                onClick={handleStoryLeave}
                disabled={storyText.length === 0}
              >
                leave this here
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* RESONANCE PANEL */}
      {isPanelOpen && selectedThreshold === "resonance" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--surface-base))] bg-opacity-95 backdrop-blur-sm transition-opacity duration-800">
          <div className="w-full max-w-2xl mx-4 bg-[hsl(var(--surface-base))] rounded-lg border border-[hsl(var(--border-base))]/[0.1] p-8 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm uppercase tracking-widest text-[hsl(var(--text-ambient))]">what others left</p>
              <Button intent="withdraw" onClick={handlePanelClose}>
                return
              </Button>
            </div>
            <p className="text-[hsl(var(--text-secondary))] mb-8 leading-7 max-w-md">
              These are fragments from others who passed through this room. No names. No context. Only what they left behind.
            </p>
            <div className="flex flex-col gap-0">
              {resonanceFragments.map((fragment, index) => (
                <div
                  key={index}
                  className="py-6 border-t border-[hsl(var(--border-base))]/[0.1] first:border-t-0 hover:pl-2 transition-all duration-300 cursor-pointer group"
                >
                  <p className="text-xs text-[hsl(var(--text-ambient))] uppercase tracking-wider mb-3">
                    {fragment.time}
                  </p>
                  <p className="text-[hsl(var(--text-secondary))] text-lg leading-8 mb-3 group-hover:text-[hsl(var(--text-primary))] transition-colors">
                    {fragment.text}
                  </p>
                  <p className="text-xs text-[hsl(var(--text-ambient))] group-hover:text-[hsl(var(--text-secondary))] transition-colors">
                    {fragment.resonance}
                  </p>
                  <p className="text-xs text-[hsl(var(--accent-base))] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    hold this with you →
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PRESENCE PANEL */}
      {isPanelOpen && selectedThreshold === "human" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--surface-base))] bg-opacity-95 backdrop-blur-sm transition-opacity duration-800">
          <div className="w-full max-w-md mx-4 bg-[hsl(var(--surface-base))] rounded-lg border border-[hsl(var(--border-base))]/[0.1] p-8 text-center">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm uppercase tracking-widest text-[hsl(var(--text-ambient))]">another presence</p>
              <Button intent="withdraw" onClick={handlePanelClose}>
                return
              </Button>
            </div>
            
            {/* Orbit visualization */}
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border border-[hsl(var(--border-base))]/[0.3]" style={{ width: 160, height: 160, top: 0, left: 0 }} />
              <div className="absolute rounded-full border border-[hsl(var(--border-base))]/[0.3] opacity-50" style={{ width: 110, height: 110, top: 25, left: 25 }} />
              <div className="absolute rounded-full border border-[hsl(var(--border-base))]/[0.3] opacity-30" style={{ width: 60, height: 60, top: 50, left: 50 }} />
              <div className="absolute w-2 h-2 rounded-full bg-[hsl(var(--accent-base))] opacity-60" style={{ top: 79, left: 79, transform: 'translate(-50%, -50%)' }} />
            </div>

            <p className="text-[hsl(var(--text-secondary))] text-lg leading-9 mb-8 max-w-sm mx-auto italic">
              There is someone here who understands this kind of weight. Not to fix it. Just to sit alongside it with you for a while.
            </p>
            <p className="text-xs text-[hsl(var(--text-ambient))] mb-8">
              2 guides available now
            </p>
            <Button intent="proceed" className="mb-6">
              begin a conversation
            </Button>
            <p className="text-xs text-[hsl(var(--text-ambient))] leading-6">
              This is not therapy. This is not an intake process.<br />
              It is simply another person, in the same room.
            </p>
          </div>
        </div>
      )}
      
    </AtmosphericStack>
  );
}