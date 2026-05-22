import { moodOptions } from "@/features/reflect/data/moodOptions";
import type { Mood } from "@/features/reflect/types";

export function getMoodLevel(mood: Mood) {

    const foundMood = moodOptions.find(
      (item) => item.id === mood
    );
  
    return foundMood?.level ?? 1;
}