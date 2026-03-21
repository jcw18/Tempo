import { useState, useCallback } from 'react';
import { useStore } from './hooks/useStore';
import { getWorkoutForDate, buildCardDeck, formatDateKey, getEffectiveWeek, isRecoveryWeek } from './data/helpers';
import Calendar from './components/Calendar';
import WorkoutFlow from './components/WorkoutFlow';
import Settings from './components/Settings';

const POSITION_KEY = 'tempo-card-positions';

function loadPositions() {
  try {
    return JSON.parse(localStorage.getItem(POSITION_KEY) || '{}');
  } catch { return {}; }
}

function savePosition(dateKey, index) {
  const positions = loadPositions();
  positions[dateKey] = index;
  localStorage.setItem(POSITION_KEY, JSON.stringify(positions));
}

function getPosition(dateKey) {
  return loadPositions()[dateKey] || 0;
}

export default function App() {
  const store = useStore();
  const [view, setView] = useState(store.startDate ? 'calendar' : 'settings'); // prompt settings on first launch
  const [selectedDate, setSelectedDate] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [cards, setCards] = useState([]);
  const [workoutIsRecovery, setWorkoutIsRecovery] = useState(false);
  const [initialCardIndex, setInitialCardIndex] = useState(0);

  const handleSelectDate = useCallback((date) => {
    const dateKey = formatDateKey(date);
    if (store.isVacation(dateKey)) return; // can't open workout on vacation day
    const w = getWorkoutForDate(date, store.startDate, store.vacations);
    if (!w) return;
    const effectiveWeek = store.startDate ? getEffectiveWeek(date, store.startDate, store.vacations) : 0;
    const deck = buildCardDeck(w);
    const savedIndex = getPosition(dateKey);
    setWorkout(w);
    setCards(deck);
    setSelectedDate(date);
    setWorkoutIsRecovery(isRecoveryWeek(effectiveWeek));
    setInitialCardIndex(Math.min(savedIndex, deck.length - 1));
    setView('workout');
  }, [store]);

  const handleIndexChange = useCallback((index) => {
    if (selectedDate) {
      savePosition(formatDateKey(selectedDate), index);
    }
  }, [selectedDate]);

  const handleComplete = useCallback(() => {
    if (selectedDate) {
      store.markComplete(formatDateKey(selectedDate));
      // Clear saved position on completion
      savePosition(formatDateKey(selectedDate), 0);
    }
    setView('calendar');
    setSelectedDate(null);
  }, [selectedDate, store]);

  const handleBack = useCallback(() => {
    // Position is already saved via onIndexChange — just navigate away
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
          initialIndex={initialCardIndex}
          onIndexChange={handleIndexChange}
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
