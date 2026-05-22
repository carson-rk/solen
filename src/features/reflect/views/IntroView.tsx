import type { Issue, Mood } from "@/features/reflect/types";
import { moodOptions } from "@/features/reflect/data/moodOptions";
import { issues } from "@/features/reflect/data/issues";

type IntroViewProps = {
  mood: Mood | null;
  onSelectMood: (mood: Mood) => void;
  selectedIssues: Issue[];
  onToggleIssue: (issue: Issue) => void;
  onContinue: () => void;
};

export default function IntroView({
  mood,
  onSelectMood,
  selectedIssues,
  onToggleIssue,
  onContinue,
}: IntroViewProps) {
  const needSupportSelection =
    mood === "heavy_fog" ||
    mood === "strong_winds" ||
    mood === "thunderstorm";

  return (
    <section>
      <p>Private reflection space</p>

      <h1>Let&apos;s understand the weather first.</h1>

      <p>You do not need perfect words right now.</p>

      {mood === null ? (
        <div>
          {moodOptions.map((moodItem) => (
            <button
              key={moodItem.id}
              onClick={() => onSelectMood(moodItem.id as Mood)}
            >
              <h2>{moodItem.label}</h2>
              <p>{moodItem.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div>
          <p>Your current mood is:</p>
          <h2>
            {moodOptions.find((item) => item.id === mood)?.label}
          </h2>
        </div>
      )}

      {needSupportSelection && (
        <div>
          <h2>What feels heaviest right now?</h2>
          <div>
            {issues.map((issue) => (
              <button
                key={issue.id}
                onClick={() => onToggleIssue(issue.id as Issue)}
              >
                {issue.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onContinue}
        disabled={needSupportSelection && selectedIssues.length === 0}
      >
        Continue
      </button>
    </section>
  );
}
