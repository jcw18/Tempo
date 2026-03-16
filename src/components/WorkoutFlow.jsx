import { useState, useCallback, useEffect } from 'react';
import { useSwipe } from '../hooks/useSwipe';
import ProgressDots from './ProgressDots';
import ExerciseCard from './ExerciseCard';
import RestCard from './RestCard';
import CompletionCard from './CompletionCard';

export default function WorkoutFlow({ workout, cards, date, onComplete, onBack, isRecovery }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, cards.length - 1));
  }, [cards.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, []);

  const { handlers, style } = useSwipe(goNext, goPrev);

  // Keyboard support for desktop
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const card = cards[currentIndex];
  if (!card) return null;

  return (
    <div className="h-full flex flex-col bg-slate-900">
      {/* Header */}
      <div className="flex-shrink-0 safe-top">
        <div className="flex items-center justify-between px-4 pt-3 pb-1">
          <button onClick={onBack} className="text-white/60 text-sm flex items-center gap-1">
            ← Back
          </button>
          <p className="text-white/60 text-sm">{workout.title}</p>
          <span className="text-white/40 text-xs">{currentIndex + 1}/{cards.length}</span>
        </div>
        <ProgressDots total={cards.length} current={currentIndex} />
      </div>

      {/* Card area */}
      <div className="flex-1 overflow-hidden" {...handlers} style={{ touchAction: 'pan-y' }}>
        <div key={currentIndex} className="h-full" style={style}>
          {card.type === 'exercise' && (
            <ExerciseCard exercise={card.data} index={currentIndex} isRecovery={isRecovery} />
          )}
          {card.type === 'rest' && (
            <RestCard duration={card.duration} onSkip={goNext} />
          )}
          {card.type === 'completion' && (
            <CompletionCard workout={workout} onComplete={onComplete} onBack={onBack} />
          )}
        </div>
      </div>
    </div>
  );
}
