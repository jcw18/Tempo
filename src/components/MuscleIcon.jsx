// Simple muscle group indicator icons as inline SVGs
const muscleGroups = {
  chest: { color: '#ef4444', label: 'Chest' },
  triceps: { color: '#f97316', label: 'Triceps' },
  shoulders: { color: '#eab308', label: 'Shoulders' },
  back: { color: '#22c55e', label: 'Back' },
  biceps: { color: '#06b6d4', label: 'Biceps' },
  quads: { color: '#8b5cf6', label: 'Quads' },
  hamstrings: { color: '#ec4899', label: 'Hamstrings' },
  glutes: { color: '#f43f5e', label: 'Glutes' },
  calves: { color: '#14b8a6', label: 'Calves' },
  core: { color: '#a855f7', label: 'Core' },
  forearms: { color: '#64748b', label: 'Forearms' },
  traps: { color: '#84cc16', label: 'Traps' },
  lats: { color: '#10b981', label: 'Lats' },
  'rear delts': { color: '#f59e0b', label: 'Rear Delts' },
  'full body': { color: '#6366f1', label: 'Full Body' },
  cardio: { color: '#06b6d4', label: 'Cardio' },
  mobility: { color: '#94a3b8', label: 'Mobility' },
};

// Map exercises to their primary + secondary muscle groups
export const exerciseMuscles = {
  'Barbell Bench Press': ['chest', 'triceps', 'shoulders'],
  'Dips': ['chest', 'triceps', 'shoulders'],
  'Incline Dumbbell Press': ['chest', 'shoulders'],
  'Cable Flyes': ['chest'],
  'Tricep Pushdowns': ['triceps'],
  'Overhead Tricep Extension': ['triceps'],
  'Push-ups to Failure': ['chest', 'triceps'],
  'Single-Arm Dumbbell Rows': ['back', 'biceps'],
  'Cable Pulldowns (Wide Grip)': ['lats', 'biceps'],
  "Farmer's Walks": ['forearms', 'traps', 'core'],
  'Wrist Curls': ['forearms'],
  'Dumbbell Pullovers': ['lats', 'chest'],
  'Plate Front Raises': ['shoulders'],
  'Reverse Cable Flyes': ['rear delts', 'back'],
  'Barbell Back Squats': ['quads', 'glutes', 'core'],
  'Romanian Deadlifts (RDLs)': ['hamstrings', 'glutes', 'back'],
  'Bulgarian Split Squats': ['quads', 'glutes'],
  'Lying Hamstring Curls': ['hamstrings'],
  'Jump Squats': ['quads', 'glutes', 'calves'],
  'Standing Calf Raises': ['calves'],
  'Pull-ups': ['lats', 'biceps', 'back'],
  'Barbell Rows': ['back', 'biceps'],
  'Seated Cable Rows': ['back', 'lats'],
  'Face Pulls': ['rear delts', 'traps'],
  'Dumbbell Curls': ['biceps'],
  'Hammer Curls': ['biceps', 'forearms'],
  'Rack Pulls': ['back', 'hamstrings', 'traps'],
  'Overhead Press': ['shoulders', 'triceps'],
  'Lateral Raises': ['shoulders'],
  'Rear Delt Flyes': ['rear delts'],
  'Shrugs': ['traps'],
  'Hanging Leg Raises': ['core'],
  'Cable Woodchops': ['core'],
  'Ab Wheel Rollouts': ['core'],
};

export default function MuscleIcon({ exerciseName }) {
  const muscles = exerciseMuscles[exerciseName];
  if (!muscles) return null;

  return (
    <div className="flex flex-wrap gap-1.5 mb-3">
      {muscles.map((m) => {
        const info = muscleGroups[m];
        if (!info) return null;
        return (
          <span key={m}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium text-white/90"
            style={{ backgroundColor: info.color + '33', borderColor: info.color + '66', borderWidth: 1 }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: info.color }} />
            {info.label}
          </span>
        );
      })}
    </div>
  );
}
