"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ThresholdItemProps = {
  label: string;
  path: string; // The descriptive path string
  isSelected: boolean;
  onSelect: () => void;
  className?: string;
};

export const ThresholdItem = React.forwardRef<HTMLButtonElement, ThresholdItemProps>(
  ({ label, path, isSelected, onSelect, className }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onSelect}
        className={cn(
          "group relative flex flex-col items-center justify-start border-0 bg-transparent px-4 py-4 text-center outline-none select-none transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] sm:w-[220px]",
          className
        )}
      >
        {/* Main Label */}
        <span 
          className={cn(
            "text-sm tracking-wide transition-colors duration-700",
            isSelected
              ? "text-[hsl(var(--text-primary))]"
              : "text-[hsl(var(--text-secondary))] group-hover:text-[hsl(var(--action-proceed))]"
          )}
        >
          {label}
        </span>
        
        {/* Path Description (Soft Subtitle) */}
        <span 
          className={cn(
            "mt-3 text-xs leading-relaxed transition-all duration-700",
            isSelected 
              ? "text-[hsl(var(--text-secondary))] opacity-100" 
              : "text-[hsl(var(--text-ambient))] opacity-50 group-hover:opacity-80"
          )}
        >
          {path}
        </span>

        {/* Environmental Highlight Line */}
        <span
          className={cn(
            "absolute bottom-0 left-1/2 h-[1px] -translate-x-1/2 bg-[hsl(var(--accent-base))] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
            isSelected ? "w-12 opacity-100" : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-40"
          )}
          aria-hidden="true"
        />
      </button>
    );
  }
);

ThresholdItem.displayName = "ThresholdItem";