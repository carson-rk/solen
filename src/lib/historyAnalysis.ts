export function getRecentAverage(
    history: {
      stressLevel: number | null;
      timestamp: number;
    }[]
  ) {
    if (history.length === 0) return 0;
  
    const recent = history.slice(-3);
  
    const total = recent.reduce((sum, item) => {
      return sum + (item.stressLevel ?? 0);
    }, 0);
  
    return total / recent.length;
  }