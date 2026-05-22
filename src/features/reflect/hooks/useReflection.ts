"use client";

import { useState, useEffect } from "react";

import {
  loadHistory,
  saveHistory,
  type HistoryItem,
} from "@/lib/storage/historyStorage";
import type { Issue, Mood } from "@/features/reflect/types";

const moodLevels: Record<Mood, number> = {
  clear_skies: 1,
  light_rain: 2,
  heavy_fog: 3,
  strong_winds: 4,
  thunderstorm: 5,
};

export function useReflection() {
  const [mood, setMood] = useState<Mood | null>(null);
  const [selectedIssues, setSelectedIssues] = useState<Issue[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>(() => loadHistory());

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

  function selectMood(nextMood: Mood) {
    setMood(nextMood);

    const newEntry: HistoryItem = {
      moodId: nextMood,
      level: moodLevels[nextMood],
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
