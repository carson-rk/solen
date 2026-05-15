import { Mood, Issue } from "../hooks/useReflection";
import { moodOptions } from "@/data/reflect/moodOptions";
import { issues } from "@/data/reflect/issues";

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
    mood === "light_rain" ||
    mood === "strong_winds" ||
    mood === "thunderstorm";
    
    return(
        <section>
            <p>Private reflection space</p>
        
            <h1>
                Let&apos;s understand the weather first.
            </h1>
        
            <p>
                You do not need perfect words right now.
            </p>

            <div>
                {moodOptions.map((moodItem) => (
                    <button
                    key={moodItem.id}
                    onClick={() =>
                        onSelectMood(moodItem.id as Mood)
                    }
                    >
                        <h2>{moodItem.label}</h2>

                        <p>{moodItem.description}</p>
                    </button>
                ))}
            </div>

            {needSupportSelection && (
                <div>
                    <h2>
                        What feels heaviest right now?
                    </h2>

                    <div>
                        {issues.map((issue) => (
                            <button
                              key={issue.id}
                              onClick={() =>
                                onToggleIssue(issue.id as Issue)
                              }
                            >
                                {issue.title}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={onContinue}
                    >
                        Continue
                    </button>
                </div>
            )}

        </section>
  );
}