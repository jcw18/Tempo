import { useState, useCallback } from 'react';
import { formatDateKey, getDaysInMonth } from '../data/helpers';

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function useStore() {
  const [completions, setCompletions] = useState(() => load('tempo-completions', {}));
  const [vacations, setVacations] = useState(() => load('tempo-vacations', {}));
  const [startDate, setStartDateState] = useState(() => load('tempo-start-date', null));

  const markComplete = useCallback((dateStr) => {
    setCompletions((prev) => {
      const next = { ...prev, [dateStr]: true };
      save('tempo-completions', next);
      return next;
    });
  }, []);

  const unmarkComplete = useCallback((dateStr) => {
    setCompletions((prev) => {
      const next = { ...prev };
      delete next[dateStr];
      save('tempo-completions', next);
      return next;
    });
  }, []);

  const isComplete = useCallback((dateStr) => !!completions[dateStr], [completions]);

  const toggleVacation = useCallback((dateStr) => {
    setVacations((prev) => {
      const next = { ...prev };
      if (next[dateStr]) {
        delete next[dateStr];
      } else {
        next[dateStr] = true;
      }
      save('tempo-vacations', next);
      return next;
    });
  }, []);

  const isVacation = useCallback((dateStr) => !!vacations[dateStr], [vacations]);

  const getMonthPercent = useCallback((year, month) => {
    const days = getDaysInMonth(year, month);
    let totalDays = 0;
    let completedDays = 0;
    for (let d = 1; d <= days; d++) {
      const key = formatDateKey(new Date(year, month, d));
      if (vacations[key]) continue; // exclude vacations
      totalDays++;
      if (completions[key]) completedDays++;
    }
    return totalDays > 0 ? Math.round((completedDays / totalDays) * 100) : 0;
  }, [completions, vacations]);

  const setStartDate = useCallback((date) => {
    save('tempo-start-date', date);
    setStartDateState(date);
  }, []);

  return {
    completions,
    vacations,
    startDate,
    markComplete,
    unmarkComplete,
    isComplete,
    toggleVacation,
    isVacation,
    getMonthPercent,
    setStartDate,
  };
}
