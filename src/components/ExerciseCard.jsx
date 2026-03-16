import { useState } from 'react';
import Timer from './Timer';
import MuscleIcon from './MuscleIcon';

// Slug helper: "Barbell Bench Press" → "barbell-bench-press"
function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const GRADIENTS = [
  'from-indigo-600 to-purple-700',
  'from-blue-600 to-cyan-700',
  'from-emerald-600 to-teal-700',
  'from-orange-600 to-red-700',
  'from-pink-600 to-rose-700',
  'from-violet-600 to-indigo-700',
  'from-teal-600 to-emerald-700',
  'from-amber-600 to-orange-700',
];

export default function ExerciseCard({ exercise, index, isRecovery }) {
  const gradient = GRADIENTS[index % GRADIENTS.length];
  const [completedSets, setCompletedSets] = useState(new Set());
  const [imgError, setImgError] = useState(false);
  const imageSlug = toSlug(exercise.name);
  const imagePath = `/exercise-images/${imageSlug}.jpg`;

  // Parse set count from prescription (e.g. "4 × 8" → 4)
  const setMatch = exercise.prescription.match(/^(\d+)\s*[×x]/);
  const totalSets = setMatch ? parseInt(setMatch[1]) : 0;

  const toggleSet = (i) => {
    setCompletedSets((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className={`h-full w-full bg-gradient-to-br ${gradient} flex flex-col`}>
      <div className="flex-1 overflow-y-auto px-6 pt-8 pb-6">
        {/* Section label */}
        <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">
          {exercise.sectionName}
        </p>

        {/* Exercise name */}
        <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
          {exercise.name}
        </h2>

        {/* Muscle groups */}
        <MuscleIcon exerciseName={exercise.name} />

        {/* Superset indicator */}
        {exercise.supersetWith && (
          <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm text-white/90 mb-3">
            Superset with {exercise.supersetWith}
          </div>
        )}

        {/* Prescription */}
        <p className="text-xl text-white/90 font-medium mb-4">
          {exercise.prescription}
        </p>

        {/* Recovery week note */}
        {isRecovery && (
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg px-3 py-2 mb-4">
            <p className="text-yellow-200 text-sm">Recovery week — reduce weight slightly</p>
          </div>
        )}

        {/* Set tracker */}
        {totalSets > 0 && (
          <div className="flex gap-2 mb-5">
            {Array.from({ length: totalSets }, (_, i) => (
              <button key={i} onClick={() => toggleSet(i)}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  completedSets.has(i)
                    ? 'bg-white/30 border-white text-white'
                    : 'border-white/30 text-white/30'
                }`}>
                {completedSets.has(i) ? '✓' : i + 1}
              </button>
            ))}
          </div>
        )}

        {/* Timer for timed exercises */}
        {exercise.isTimed && exercise.timerDuration > 0 && (
          <div className="mb-5">
            <Timer duration={exercise.timerDuration} />
          </div>
        )}

        {/* Exercise image */}
        {!imgError && (
          <div className="rounded-xl overflow-hidden mb-3">
            <img src={imagePath} alt={exercise.name}
              className="w-full h-40 object-cover rounded-xl"
              onError={() => setImgError(true)} />
          </div>
        )}

        {/* How to do it */}
        {exercise.howTo && (
          <div className="bg-black/20 rounded-xl p-4 mt-2">
            <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">How to do it</p>
            <p className="text-white/85 text-sm leading-relaxed">{exercise.howTo}</p>
          </div>
        )}
      </div>

      {/* Swipe hint */}
      <div className="text-center pb-4">
        <p className="text-white/40 text-xs">Swipe left to continue →</p>
      </div>
    </div>
  );
}
