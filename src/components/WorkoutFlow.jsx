import { useState, useCallback, useEffect } from 'react';
import { useSwipe } from '../hooks/useSwipe';
import ProgressDots from './ProgressDots';
import ExerciseCard from './ExerciseCard';
import RestCard from './RestCard';
import CompletionCard from './CompletionCard';

function ExerciseListOverlay({ cards, currentIndex, onJump, onClose }) {
  // Build condensed list: group by exercise, show set ranges, skip rest cards
  const items = [];
  let cardIdx = 0;
  while (cardIdx < cards.length) {
    const card = cards[cardIdx];
    if (card.type === 'rest') {
      cardIdx++;
      continue;
    }
    if (card.type === 'completion') {
      items.push({ label: 'Finish', sub: null, cardIndex: cardIdx, type: 'completion' });
      cardIdx++;
      continue;
    }
    // Exercise card — group consecutive sets of same exercise
    const name = card.data.name;
    const section = card.data.sectionName;
    const startIdx = cardIdx;
    let setCount = 1;
    // Look ahead for more sets of same exercise (skipping rest cards between)
    let peek = cardIdx + 1;
    while (peek < cards.length) {
      if (cards[peek].type === 'rest') { peek++; continue; }
      if (cards[peek].type === 'exercise' && cards[peek].data.name === name && cards[peek].data.sectionName === section) {
        setCount++;
        peek++;
      } else {
        break;
      }
    }
    const prescription = card.data.prescription;
    items.push({
      label: name,
      sub: `${section} · ${prescription}`,
      cardIndex: startIdx,
      type: 'exercise',
    });
    cardIdx = peek;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/95 flex flex-col">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-white/10 safe-top">
        <h3 className="text-white font-semibold text-lg">All Exercises</h3>
        <button onClick={onClose} className="text-white/60 text-sm px-3 py-1">Close</button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {items.map((item, i) => {
          const isActive = currentIndex >= item.cardIndex &&
            (i + 1 >= items.length || currentIndex < items[i + 1].cardIndex);
          return (
            <button
              key={i}
              onClick={() => { onJump(item.cardIndex); onClose(); }}
              className={`w-full text-left px-4 py-3 border-b border-white/5 flex items-center gap-3 ${
                isActive ? 'bg-white/10' : 'active:bg-white/5'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                isActive ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white/50'
              }`}>
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className={`text-sm truncate ${isActive ? 'text-white font-medium' : 'text-white/80'}`}>
                  {item.label}
                </p>
                {item.sub && (
                  <p className="text-xs text-white/40 truncate">{item.sub}</p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function WorkoutFlow({ workout, cards, date, onComplete, onBack, isRecovery, initialIndex, onIndexChange }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  const [showList, setShowList] = useState(false);

  // Notify parent of index changes for persistence
  useEffect(() => {
    if (onIndexChange) onIndexChange(currentIndex);
  }, [currentIndex, onIndexChange]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, cards.length - 1));
  }, [cards.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, []);

  const jumpTo = useCallback((idx) => {
    setCurrentIndex(Math.max(0, Math.min(idx, cards.length - 1)));
  }, [cards.length]);

  const { handlers, style } = useSwipe(goNext, goPrev);

  // Keyboard support for desktop
  useEffect(() => {
    const handleKey = (e) => {
      if (showList) return; // don't navigate while list is open
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, showList]);

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
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowList(true)}
              className="text-white/40 text-xs px-1.5 py-0.5 rounded border border-white/15 active:bg-white/10"
              title="View all exercises"
            >
              ☰
            </button>
            <span className="text-white/40 text-xs">{currentIndex + 1}/{cards.length}</span>
          </div>
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

      {/* Exercise list overlay */}
      {showList && (
        <ExerciseListOverlay
          cards={cards}
          currentIndex={currentIndex}
          onJump={jumpTo}
          onClose={() => setShowList(false)}
        />
      )}
    </div>
  );
}
