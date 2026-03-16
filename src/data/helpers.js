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
    let i = 0;
    while (i < exercises.length) {
      const ex = exercises[i];
      const nextEx = exercises[i + 1];
      const isSuperset = ex.supersetWith && nextEx && nextEx.supersetWith === ex.name;

      if (isSuperset) {
        // Interleave superset: A1, B1, rest, A2, B2, rest, ...
        const setMatchA = ex.prescription.match(/^(\d+)\s*[×x]/);
        const setsA = setMatchA ? parseInt(setMatchA[1]) : 1;
        const setMatchB = nextEx.prescription.match(/^(\d+)\s*[×x]/);
        const setsB = setMatchB ? parseInt(setMatchB[1]) : 1;
        const totalSets = Math.max(setsA, setsB);
        const rest = nextEx.rest || ex.rest;

        for (let s = 0; s < totalSets; s++) {
          if (s < setsA) {
            cards.push({
              type: 'exercise',
              data: { ...ex, sectionName: section.name, currentSet: s + 1, totalSets: setsA },
            });
          }
          if (s < setsB) {
            cards.push({
              type: 'exercise',
              data: { ...nextEx, sectionName: section.name, currentSet: s + 1, totalSets: setsB },
            });
          }
          if (rest && s < totalSets - 1) {
            cards.push({ type: 'rest', duration: rest });
          }
        }
        i += 2; // skip both exercises
      } else {
        // Non-superset: expand each set into its own card
        const setMatch = ex.prescription.match(/^(\d+)\s*[×x]/);
        const sets = setMatch ? parseInt(setMatch[1]) : 1;

        for (let s = 0; s < sets; s++) {
          cards.push({
            type: 'exercise',
            data: { ...ex, sectionName: section.name, currentSet: s + 1, totalSets: sets },
          });
          if (ex.rest && s < sets - 1) {
            cards.push({ type: 'rest', duration: ex.rest });
          }
        }
        i++;
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
