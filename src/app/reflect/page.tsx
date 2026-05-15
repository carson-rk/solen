"use client";

import { useState } from "react";

import IntroView from
"@/features/reflect/views/IntroView";
import SupportView from "@/features/reflect/views/SupportView";

import { useReflection } from "@/features/reflect/hooks/useReflection";

export default function ReflectPage() {

  const {
    mood,
    selectMood,

    selectedIssues,
    toggleIssue,

  } = useReflection();

  const [showSupport, setShowSupport] = useState(false);

  return (

    <main>

        {!showSupport && (
            <IntroView

              mood={mood}
              onSelectMood={selectMood}
              selectedIssues={selectedIssues}
              onToggleIssue={toggleIssue}
              onContinue={() => 
                setShowSupport(true)
              }
            />
        )}

        {showSupport && mood && (
            <SupportView
            mood={mood}
            />
        )}
    </main>
  );
}