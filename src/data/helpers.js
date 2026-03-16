import { gymWorkouts, dayLabels } from './workouts';
import { getRunningWorkout } from './running';
import { foamRollingRoutine } from './foamRolling';

const DAY_NAMES = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export function formatDateKey(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getEffectiveWeek(date, startDate, vacations = {}) {
  if (!startDate) return 0;
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);

  if (target < start) return 0;

  // Count non-vacation Saturdays from start to the Saturday of the target date's week
  const targetSaturday = new Date(target);
  const dow = targetSaturday.getDay();
  targetSaturday.setDate(targetSaturday.getDate() + (6 - dow)); // move to Saturday

  let effectiveWeeks = 0;
  const current = new Date(start);
  // Move to first Saturday
  const startDow = current.getDay();
  current.setDate(current.getDate() + (6 - startDow));

  while (current <= targetSaturday) {
    const key = formatDateKey(current);
    if (!vacations[key]) {
      effectiveWeeks++;
    }
    current.setDate(current.getDate() + 7);
  }

  return effectiveWeeks;
}

export function isRecoveryWeek(effectiveWeek) {
  return effectiveWeek > 0 && effectiveWeek % 4 === 0;
}

export function getDayLabel(date) {
  const dayName = DAY_NAMES[new Date(date).getDay()];
  return dayLabels[dayName] || '';
}

export function getWorkoutForDate(date, startDate, vacations = {}) {
  const d = new Date(date);
  const dayName = DAY_NAMES[d.getDay()];

  if (['saturday', 'sunday'].includes(dayName)) {
    const week = getEffectiveWeek(date, startDate, vacations);
    const workout = getRunningWorkout(week, dayName);
    // Append foam rolling
    return {
      ...workout,
      sections: [...workout.sections, ...foamRollingRoutine.sections],
    };
  }

  return gymWorkouts[dayName] || null;
}

export function buildCardDeck(workout) {
  if (!workout) return [];
  const cards = [];

  workout.sections.forEach((section) => {
    const exercises = section.exercises || [];
    for (let i = 0; i < exercises.length; i++) {
      const ex = exercises[i];
      const isSuperset = !!ex.supersetWith;
      const nextEx = exercises[i + 1];
      const nextIsPartner = nextEx && nextEx.supersetWith === ex.name;

      cards.push({
        type: 'exercise',
        data: {
          ...ex,
          sectionName: section.name,
        },
      });

      // Add rest card: after non-superset exercises, or after the second exercise in a superset
      if (ex.rest && !nextIsPartner) {
        cards.push({
          type: 'rest',
          duration: ex.rest,
        });
      }
    }
  });

  cards.push({ type: 'completion' });
  return cards;
}

export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year, month) {
  // Returns 0=Sun, 1=Mon, ..., 6=Sat
  return new Date(year, month, 1).getDay();
}
