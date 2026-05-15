import { moodOptions } from "@/data/reflect/moodOptions";
import { Mood } from "@/features/reflect/hooks/useReflection";

export function getMoodLevel(mood: Mood) {

    const foundMood = moodOptions.find(
      (item) => item.id === mood
    );
  
    return foundMood?.level ?? 1;
}