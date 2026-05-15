"use client";

import { useState, useEffect } from "react";

import {
  loadHistory,
  saveHistory,
  HistoryItem,
} from "@/lib/storage/historyStorage";

export type Mood =
  | "clear_skies"
  | "light_rain"
  | "heavy_fog"
  | "strong_winds"
  | "thunderstorm";

export type Issue =
  | "academic"
  | "social"
  | "relationship"
  | "life";

/* mood → level mapping */
const moodLevels: Record<Mood, number> = {
  clear_skies: 1,
  light_rain: 2,
  heavy_fog: 3,
  strong_winds: 4,
  thunderstorm: 5,
};

export function useReflection() {

  const [mood, setMood] =
    useState<Mood | null>(null);

  const [selectedIssues, setSelectedIssues] =
    useState<Issue[]>([]);

  const [history, setHistory] =
    useState<HistoryItem[]>(() => loadHistory());

  useEffect(() => {
    saveHistory(history);
  }, [history]);

  function toggleIssue(issue: Issue) {
    setSelectedIssues((prev) => {
      if (prev.includes(issue)) {
        return prev.filter((i) => i !== issue);
      }
      return [...prev, issue];
    });
  }

  function selectMood(mood: Mood) {
    setMood(mood);

    const newEntry: HistoryItem = {
      moodId: mood,
      level: moodLevels[mood],
      timestamp: Date.now(),
    };

    setHistory((prev) => [...prev, newEntry]);
  }

  return {
    mood,
    selectMood,

    selectedIssues,
    toggleIssue,

    history,
  };
}