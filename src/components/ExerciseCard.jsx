import { useState } from 'react';
import Timer from './Timer';
import MuscleIcon from './MuscleIcon';

const EXERCISE_IMAGES = {
  'Barbell Bench Press': 'barbell bench press.webp',
  'Hanging Leg Raises': 'hanging leg raises.webp',
  'Dips': 'dips.webp',
  'Cable Woodchops': 'cable wood chop.gif',
  'Incline Dumbbell Press': 'incline dumbell press.webp',
  'Hanging Windshield Wipers': 'windshield wipers.webp',
  'High-to-Low Cable Flyes': 'high to low cable flyes.webp',
  'Pull-ups': 'pull ups.webp',
  'Barbell Hip Thrusts': 'barbell hip thrust.png',
  'Seated Cable Rows': 'seated cable row.webp',
  'Bulgarian Split Squats': 'bulgarian split squat.jpg',
  'Face Pulls': 'face pulls.jpeg',
  'Cable Kickbacks': 'cable kickback.webp',
  'Barbell Back Squats': 'barbell back squat.webp',
  'Romanian Deadlifts (RDLs)': 'romanian deadlift.webp',
  'Walking Lunges': 'walking lunges.webp',
  'Lying Hamstring Curls': 'hamstring curl.webp',
  'Jump Squats': 'jump squat.webp',
  'Seated Calf Raises': 'seated calf raise.webp',
  'Overhead Press': 'overhead press.jpg',
  'Dumbbell Curls': 'dumbbell curl.gif',
  'Lateral Raises': 'lateral raises.webp',
  'Hammer Curls': 'hammer curls.webp',
  'Rear Delt Flyes': 'rear delt fly.webp',
  'Shrugs': 'shrugs.webp',
  'Close-Grip Push-ups': 'close grip push ups.webp',
  'Back Extensions': 'back extension.webp',
  'Reverse Hyperextensions': 'reverse hyperextension.webp',
  'Rack Pulls': 'rack pulls.webp',
  'Pallof Press': 'pallof press.webp',
  'Hanging Knee Tucks with Twist': 'hanging knee twist.webp',
};

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
  const [imgError, setImgError] = useState(false);
  const imageFile = EXERCISE_IMAGES[exercise.name];
  const imagePath = imageFile ? `/exercise-images/${imageFile}` : null;

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

        {/* Set indicator */}
        {exercise.totalSets > 1 && (
          <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm text-white/90 mb-3">
            Set {exercise.currentSet} of {exercise.totalSets}
          </div>
        )}

        {/* Superset indicator */}
        {exercise.supersetWith && (
          <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm text-white/90 mb-3 ml-2">
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

        {/* Timer for timed exercises */}
        {exercise.isTimed && exercise.timerDuration > 0 && (
          <div className="mb-5">
            <Timer duration={exercise.timerDuration} />
          </div>
        )}

        {/* How to do it */}
        {exercise.howTo && (
          <div className="bg-black/20 rounded-xl p-4 mt-2">
            <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">How to do it</p>
            <p className="text-white/85 text-sm leading-relaxed">{exercise.howTo}</p>
          </div>
        )}

        {/* Exercise image */}
        {imagePath && !imgError && (
          <div className="mt-3 rounded-xl overflow-hidden">
            <img src={imagePath} alt={exercise.name}
              className="w-full object-contain max-w-full"
              onError={() => setImgError(true)} />
          </div>
        )}
      </div>

      {/* Swipe hint */}
      <div className="text-center pb-4">
        <p className="text-white/40 text-xs">Swipe to continue →</p>
      </div>
    </div>
  );
}
