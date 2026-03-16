import { useState, useCallback } from 'react';
import { useStore } from './hooks/useStore';
import { getWorkoutForDate, buildCardDeck, formatDateKey, getEffectiveWeek, isRecoveryWeek } from './data/helpers';
import Calendar from './components/Calendar';
import WorkoutFlow from './components/WorkoutFlow';
import Settings from './components/Settings';

export default function App() {
  const store = useStore();
  const [view, setView] = useState(store.startDate ? 'calendar' : 'settings'); // prompt settings on first launch
  const [selectedDate, setSelectedDate] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [cards, setCards] = useState([]);
  const [workoutIsRecovery, setWorkoutIsRecovery] = useState(false);

  const handleSelectDate = useCallback((date) => {
    const dateKey = formatDateKey(date);
    if (store.isVacation(dateKey)) return; // can't open workout on vacation day
    const w = getWorkoutForDate(date, store.startDate, store.vacations);
    if (!w) return;
    const effectiveWeek = store.startDate ? getEffectiveWeek(date, store.startDate, store.vacations) : 0;
    setWorkout(w);
    setCards(buildCardDeck(w));
    setSelectedDate(date);
    setWorkoutIsRecovery(isRecoveryWeek(effectiveWeek));
    setView('workout');
  }, [store]);

  const handleComplete = useCallback(() => {
    if (selectedDate) {
      store.markComplete(formatDateKey(selectedDate));
    }
    setView('calendar');
    setSelectedDate(null);
  }, [selectedDate, store]);

  const handleBack = useCallback(() => {
    setView('calendar');
    setSelectedDate(null);
  }, []);

  return (
    <div className="h-full">
      {view === 'calendar' && (
        <Calendar
          onSelectDate={handleSelectDate}
          store={store}
          onOpenSettings={() => setView('settings')}
        />
      )}
      {view === 'workout' && workout && (
        <WorkoutFlow
          workout={workout}
          cards={cards}
          date={selectedDate}
          isRecovery={workoutIsRecovery}
          onComplete={handleComplete}
          onBack={handleBack}
        />
      )}
      {view === 'settings' && (
        <Settings
          store={store}
          onBack={() => setView('calendar')}
        />
      )}
    </div>
  );
}
