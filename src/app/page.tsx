"use client";

import { useState, useEffect} from "react";
import { UserState } from "@/lib/types";
import { getNextState } from "@/lib/transitionEngine";
import { Selection } from "@/lib/selections";
import { getContent } from "@/lib/content";


export default function Home() {
  const [state, setState] = useState<UserState>("intro");
  const [stressLevel, setStressLevel] = useState<number | null>(null);
  const [selection, setSelection] = useState<Selection | null>(null);
  const selectedContent = getContent(selection);

  function safeParse(value: string) {
    try {
      return JSON.parse(value);
    } catch {
      return [];
    }
  }
  const [history, setHistory] = useState<
    { stressLevel: number | null; timestamp: number }[]
  >(() => {
    if (typeof window === "undefined") return [];

    const saved = localStorage.getItem("history");

    return saved ? safeParse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">

      {state === "intro" && (
        <>
          <h1>How are you feeling today?</h1>
          <button onClick={() => setState("selection")}>
            Start
          </button>
        </>
      )}


      {state === "selection" && (
        <>
          <h2>What is bothering you?</h2>

          <button onClick={() => {
            setSelection("academic");
            setState("intensity");}}>
            Academic pressure
          </button>

          <button onClick={() => {
            setSelection("financial");
            setState("intensity");}}>
            Financial stress
          </button>

          <button onClick={() => {
            setSelection("social");
            setState("intensity");}}>
            Social issues
          </button>

          <button onClick={() => {
            setSelection("family");
            setState("intensity");}}>
            Family issues
          </button>
        </>
      )}

      {state === "intensity" && (
        <>
          <h2>How intense is it? (0-10)</h2>

          <input
            type="number"
            min="0"
             max="10"
            onChange={(e) => {
              const value = e.target.value;setStressLevel(value === "" ? null : Number(value));
            }}
            />

            <button onClick={() => {
              if (stressLevel === null || selection === null) return;
              const newEntry = {
                stressLevel,
                timestamp: Date.now(),
              };
              
              const updatedHistory = [...history, newEntry];

              setHistory(updatedHistory);

              setState(
                getNextState(state, {
                  selection,
                  stressLevel,
                  history: updatedHistory,
                })
              );
              }}>
              Continue
            </button>
        </>
      )}

      {state === "content" && (
        <>
          <h2>Calm Content</h2>
          <p>{selectedContent?.text}</p>
        </>
      )}

      {state === "peer" && (
        <>
          <h2>Peer Support</h2>
          <p>Talk to someone who understands.</p>
          <p>{selectedContent?.text}</p>
        </>
      )}

      {state === "counselor" && (
        <>
          <h2>Professional Support</h2>
          <p>We recommend professional support.</p>
          <p>{selectedContent?.text}</p>
        </>
      )}

    </main>
  );
}