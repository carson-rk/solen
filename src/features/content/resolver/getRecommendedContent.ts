import { articles } from "@/features/content/articles";
import type { Issue, Mood } from "@/features/reflect/types";
import { getMoodLevel } from "./getMoodLevel";

type GetContentProps = {
    mood: Mood;
    issues?: Issue[];
    access?: "public" | "private";
}

export function getRecommendedContent({
    mood,
    issues,
    access = "public",
}: GetContentProps) {
    const level = getMoodLevel(mood);

    const matchingContent = articles.filter((article) => {

        const safeIssues = issues ?? [];
        const matchesIssue = 
          article.tags.includes("general") ||
          article.tags.some((tag) => 
            safeIssues.includes(tag)
        );

        const matchesLevel = 
          level >= article.levelRange[0] &&
          level <= article.levelRange[1];
        
        const matchesAccess = 
          article.access === access ||
          article.access === "public";

        return (
            matchesIssue &&
            matchesLevel &&
            matchesAccess
        );
    });

    const shuffled = [...matchingContent].sort(
        () => Math.random() -0.5
    );

    return shuffled.slice(0, 3);

}