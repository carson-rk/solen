"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type StoryInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export function StoryInput({
  value,
  onChange,
  placeholder = "You can leave something here.",
  className,
}: StoryInputProps) {
  const [isStoryFocused, setIsStoryFocused] = useState(false);

  return (
    <div
      className={cn(
        "deepening-story-container w-full max-w-2xl mx-auto rounded-lg border border-[hsl(var(--border-base))]/[0.05] transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        // Dynamic animation values for room immersion
        isStoryFocused ? "bg-[hsl(var(--surface-elevated))]/30" : "bg-transparent",
        "animate-in fade-in slide-in-from-top-4 duration-1000",
        className
      )}
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsStoryFocused(true)}
        onBlur={() => setIsStoryFocused(false)}
        placeholder={placeholder}
        className={cn(
          "deepening-story w-full min-h-[140px] p-8 resize-none",
          "text-base text-[hsl(var(--text-primary))] leading-relaxed",
          "bg-transparent border-0 outline-none focus:ring-0",
          "placeholder:text-[hsl(var(--text-ambient))] placeholder:opacity-40",
          "transition-all duration-700 ease-out",
          isStoryFocused ? "opacity-100" : "opacity-50"
        )}
        style={{
          backdropFilter: isStoryFocused ? "blur(12px)" : "blur(0px)",
        }}
      />
    </div>
  );
}