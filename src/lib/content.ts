import { Selection } from "./selections";

export type ContentItem = {
  id: string;
  tag: Selection;
  intensity: string;
  text: string;
};

type RecommendationContext = {
  selection: Selection[];
  intensity: string | null;

  history: {
    intensity: string | null;
    timestamp: number;
  }[];
};

export const content: ContentItem[] = [
  // Academic - Low Stress
  {
    id: "academic-low-1",
    tag: "academic",
    intensity: "light_rain",
    text: "Break your study session into 25-minute focus blocks.",
  },

  // Academic - Medium Stress
  {
    id: "academic-mid-1",
    tag: "academic",
    intensity: "heavy_fog",
    text: "Focus on completing one task instead of everything at once.",
  },

  // Academic - High Stress
  {
    id: "academic-high-1",
    tag: "academic",
    intensity: "strong_winds",
    text: "You may need to pause and seek support before burnout worsens"

  },

  // Financial - Low Stress

  {
    id: "financial-low-1",
    tag: "financial",
    intensity: "light_rain",
    text: "Write down your essential expenses first.",
  },

  // Financial - Medium Stress
  {
    id: "financial-mid-1",
    tag: "financial",
    intensity: "heavy_fog",
    text: "Avoid comparing your financial journey to others.",
  },

  // Financial - High Stress
  {
    id: "financial-high-1",
    tag: "financial",
    intensity: "strong_winds",
    text: "Pause and seek support before it gets bad."
  },

  // Social - Low Stress
{
  id: "social-low-1",
  tag: "social",
  intensity: "light_rain",
  text: "A short break from comparison triggers may help.",
},

// Social - Medium Stress
{
  id: "social-mid-1",
  tag: "social",
  intensity: "heavy_fog",
  text: "Talk to someone you trust instead of isolating yourself.",
},

// Social - High Stress
{
  id: "social-high-1",
  tag: "social",
  intensity: "strong_winds",
  text: "Persistent social distress deserves deeper support.",
},

  // Family - Low Stress
  {
    id: "family-low-1",
    tag: "family",
    intensity: "light_rain",
    text: "Try expressing concerns calmly and directly.",
  },

  // Family - Medium Stress
  {
    id: "family-mid-1",
    tag: "family",
    intensity: "heavy_fog",
    text: "You are allowed to take emotional space when overwhelmed.",
  },

  // Family - High Stress
  {
    id: "family-high-1",
    tag: "family",
    intensity: "strong_winds",
    text: "Talking to someone who understands you better is helpful."
  }
];


export function getContent({
  selection,
  intensity,
}: RecommendationContext) {
  if (selection.length === 0 || !intensity){
    return null;
  }


  const matching = content.filter((item) => {
    return (
      selection.includes(item.tag) &&
      item.intensity === intensity
    );
  });

  if (matching.length === 0) return null;

  const randomIndex = Math.floor(
    Math.random() * matching.length
  );

  return matching[randomIndex];
}