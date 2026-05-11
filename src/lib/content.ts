import { Selection } from "./selections";
import { getRecentAverage } from "./historyAnalysis";

export type ContentItem = {
  id: string;
  tag: Selection;
  minStress: number;
  maxStress: number;
  text: string;
};

type RecommendationContext = {
  selection: Selection | null;
  stressLevel: number | null;
  history: {
    stressLevel: number | null;
    timestamp: number;
  }[];
};

export const content: ContentItem[] = [
  // Academic - Low Stress
  {
    id: "academic-low-1",
    tag: "academic",
    minStress: 0,
    maxStress: 3,
    text: "Break your study session into 25-minute focus blocks.",
  },

  // Academic - Medium Stress
  {
    id: "academic-mid-1",
    tag: "academic",
    minStress: 4,
    maxStress: 7,
    text: "Focus on completing one task instead of everything at once.",
  },

  // Academic - High Stress
  {
    id: "academic-high-1",
    tag: "academic",
    minStress: 8,
    maxStress: 10,
    text: "You may need to pause and seek support before burnout worsens"

  },

  // Financial - Low Stress

  {
    id: "financial-low-1",
    tag: "financial",
    minStress: 0,
    maxStress: 3,
    text: "Write down your essential expenses first.",
  },

  // Financial - Medium Stress
  {
    id: "financial-mid-1",
    tag: "financial",
    minStress: 4,
    maxStress: 7,
    text: "Avoid comparing your financial journey to others.",
  },

  // Financial - High Stress
  {
    id: "financial-high-1",
    tag: "financial",
    minStress: 8,
    maxStress: 10,
    text: "Pause and seek support before it gets bad."
  },

  // Social - Low Stress
{
  id: "social-low-1",
  tag: "social",
  minStress: 0,
  maxStress: 3,
  text: "A short break from comparison triggers may help.",
},

// Social - Medium Stress
{
  id: "social-mid-1",
  tag: "social",
  minStress: 4,
  maxStress: 7,
  text: "Talk to someone you trust instead of isolating yourself.",
},

// Social - High Stress
{
  id: "social-high-1",
  tag: "social",
  minStress: 8,
  maxStress: 10,
  text: "Persistent social distress deserves deeper support.",
},

  // Family - Low Stress
  {
    id: "family-low-1",
    tag: "family",
    minStress: 0,
    maxStress: 3,
    text: "Try expressing concerns calmly and directly.",
  },

  // Family - Medium Stress
  {
    id: "family-mid-1",
    tag: "family",
    minStress: 4,
    maxStress: 7,
    text: "You are allowed to take emotional space when overwhelmed.",
  },

  // Family - High Stress
  {
    id: "family-high-1",
    tag: "family",
    minStress: 8,
    maxStress: 10,
    text: "Talking to someone who understands you better is helpful."
  }
];


export function getContent({
  selection,
  stressLevel,
  history,
}: RecommendationContext) {
  if (!selection || stressLevel === null){
    return null;
  }

  const recentAverage = getRecentAverage(history);

  let matching = content.filter((item) => {
    return (
      item.tag === selection &&
      stressLevel >= item.minStress &&
      stressLevel <= item.maxStress
    );
  });

  if (matching.length === 0) return null;
  if (recentAverage > 7) {
    matching = matching.filter((item) =>
      item.text.toLowerCase().includes("support")
    );
  }

  if (matching.length === 0) return null;

  const randomIndex = Math.floor(
    Math.random() * matching.length
  );

  return matching[randomIndex];
}