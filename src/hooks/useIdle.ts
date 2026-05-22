"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_DELAY_MS = 60_000;

const ACTIVITY_EVENTS = [
  "mousemove",
  "scroll",
  "keydown",
  "click",
  "touchstart",
] as const;

/**
 * Returns true after the user has had no qualifying interaction for `delayMs`.
 *
 * @example
 * ```tsx
 * "use client";
 * import { useIdle } from "@/hooks/useIdle";
 *
 * function AwayBanner() {
 *   const isIdle = useIdle(30_000);
 *   if (!isIdle) return null;
 *   return <p>Still there?</p>;
 * }
 * ```
 */
export function useIdle(delayMs: number = DEFAULT_DELAY_MS): boolean {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const clearIdleTimeout = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const scheduleIdle = () => {
      clearIdleTimeout();
      timeoutRef.current = setTimeout(() => {
        setIsIdle(true);
      }, delayMs);
    };

    const onActivity = () => {
      setIsIdle(false);
      scheduleIdle();
    };

    for (const event of ACTIVITY_EVENTS) {
      window.addEventListener(event, onActivity, { passive: true });
    }

    scheduleIdle();

    return () => {
      clearIdleTimeout();
      for (const event of ACTIVITY_EVENTS) {
        window.removeEventListener(event, onActivity);
      }
    };
  }, [delayMs]);

  return isIdle;
}
