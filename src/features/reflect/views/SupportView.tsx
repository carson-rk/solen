import { Issue, Mood } from "../hooks/useReflection";
import { getRecommendedContent } from "@/lib/content/getRecommendedContent";

type SupportViewProps = {
  mood: Mood;
  selectedIssues: Issue[];
};

export default function SupportView({
  mood,
  selectedIssues,
}: SupportViewProps) {

  const recommendedContent =
  getRecommendedContent({
    mood,
    issues: selectedIssues,
    access: "public",
  });

  return (
    <section>

      {mood === "clear_skies" && (
        <>
          <h1>
            Even calm seasons deserve attention.
          </h1>

          <p>
            Gentle reflection and support content
            may help.
          </p>
        </>
      )}

      {mood === "light_rain" && (
        <>
          <h1>
            Small emotional weight becomes heavier when ignored for too long.
          </h1>

          <p>
            Gentle reflection and emotional awareness can help prevent accumulation.
          </p>
        </>
      )}

      {mood === "heavy_fog" && (
        <>
          <h1>
            When the mind feels crowded, clarity becomes difficult.
          </h1>

          <p>
            The goal is not immediate solutions — only creating enough space to think and breathe again.
          </p>
        </>
      )}

      {mood === "strong_winds" && (
        <>
          <h1>
            Pressure may be affecting your ability to feel emotionally steady.
          </h1>

          <p>
            Support, connection, and slowing down can help reduce the weight you are carrying.
          </p>
        </>
      )}

      {mood === "thunderstorm" && (
        <>
          <h1>
            You may be carrying more than you should handle alone right now.
          </h1>

          <p>
            Focus on support, safety, emotional grounding, and reaching toward steadier support systems.
          </p>
        </>
      )}

      <div>
      
        <h2>Recommended Support</h2>

          {recommendedContent.map((article) => (
            <article key={article.id}>

              <h3>{article.title}</h3>

              <p>{article.description}</p>

            </article>
          ))}

      </div>

    </section>
  );
}