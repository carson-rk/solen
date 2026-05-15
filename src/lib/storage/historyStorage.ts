export type HistoryItem = {
  level: number;
  moodId: string;
  timestamp: number;
};

export function loadHistory(): HistoryItem[] {
  if (typeof window === "undefined") return [];

  const saved = localStorage.getItem("history");
  if (!saved) return [];

  try {
    const parsed: unknown = JSON.parse(saved);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isValidHistoryItem);
  } catch {
    return [];
  }
}

export function saveHistory(history: HistoryItem[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    "history",
    JSON.stringify(history)
  );
}

export function appendHistory(
  current: HistoryItem[],
  item: HistoryItem
) {
  return [...current, item];
}

export function clearHistory() {
  if (typeof window === "undefined") return;

  localStorage.removeItem("history");
}

/* -----------------------------
   VALIDATION
------------------------------ */

function isValidHistoryItem(
  item: unknown
): item is HistoryItem {
  if (!item || typeof item !== "object") return false;

  const record = item as Record<string, unknown>;

  return (
    typeof record.level === "number" &&
    typeof record.moodId === "string" &&
    typeof record.timestamp === "number"
  );
}