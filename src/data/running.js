// Running workouts vary by phase and week number

const SPEEDS = {
  warmup: 5.5,
  easy: 6.5,
  tempo_low: 7.9,
  tempo_high: 8.0,
  goal: 8.1,
  interval: 8.0,
  interval_fast: 8.3,
  recovery: 4.0,
};

function mphToPace(mph) {
  const minPerMile = 60 / mph;
  const mins = Math.floor(minPerMile);
  const secs = Math.round((minPerMile - mins) * 60);
  return `${mins}:${secs.toString().padStart(2, '0')}/mi`;
}

function distanceToSeconds(miles, mph) {
  return Math.round((miles / mph) * 3600);
}

function minutesToSeconds(min) {
  return min * 60;
}

function buildRunSegment(name, mph, durationSec, howTo) {
  return {
    name,
    prescription: `${mph} mph (${mphToPace(mph)})`,
    rest: null,
    isTimed: true,
    timerDuration: durationSec,
    howTo: howTo || `Run at ${mph} mph.`,
  };
}

function buildIntervalWorkout(reps, distanceMi, speedMph, recoverySec) {
  const cards = [];
  cards.push(buildRunSegment('Warm-up', SPEEDS.warmup, minutesToSeconds(10), 'Easy jog to warm up. Get your legs loose.'));
  for (let i = 0; i < reps; i++) {
    const dur = distanceToSeconds(distanceMi, speedMph);
    cards.push(buildRunSegment(
      `Interval ${i + 1} of ${reps}`,
      speedMph,
      dur,
      `Run ${distanceMi} mi at ${speedMph} mph (${mphToPace(speedMph)}). Push hard but stay controlled.`
    ));
    if (i < reps - 1) {
      cards.push(buildRunSegment(
        'Recovery',
        SPEEDS.recovery,
        recoverySec,
        'Walk to recover. Breathe deep. Get ready for the next interval.'
      ));
    }
  }
  cards.push(buildRunSegment('Cool Down', SPEEDS.warmup, minutesToSeconds(5), 'Easy jog to cool down.'));
  return cards;
}

function buildTempoWorkout(durationMin, speedMph) {
  return [
    buildRunSegment('Warm-up', SPEEDS.warmup, minutesToSeconds(10), 'Easy jog to warm up.'),
    buildRunSegment('Tempo Run', speedMph, minutesToSeconds(durationMin), `Sustained run at ${speedMph} mph (${mphToPace(speedMph)}). Hold this pace steadily — it should feel comfortably hard.`),
    buildRunSegment('Cool Down', SPEEDS.warmup, minutesToSeconds(5), 'Easy jog to cool down.'),
  ];
}

function buildTimeTrial() {
  return [
    buildRunSegment('Warm-up', SPEEDS.warmup, minutesToSeconds(10), 'Easy jog to warm up. Do a few strides.'),
    buildRunSegment('5K Time Trial', 0, 0, 'Run 3.1 miles all-out. This is your benchmark — give it everything. Track your time.'),
    buildRunSegment('Cool Down', SPEEDS.warmup, minutesToSeconds(5), 'Easy jog to cool down.'),
  ];
}

function getSaturdayExercises(week) {
  // Special weeks
  if (week === 18 || week === 33) return buildTimeTrial();

  // Phase 1: weeks 1-12
  if (week <= 4) return buildIntervalWorkout(6, 0.25, 8.0, 90);
  if (week <= 8) return buildIntervalWorkout(5, 0.5, 8.0, 90);
  if (week <= 12) return buildIntervalWorkout(6, 0.5, 8.3, 90);

  // Phase 2: weeks 13-24
  if (week <= 16) return buildIntervalWorkout(4, 0.6, 8.1, 120);
  if (week <= 20) return buildIntervalWorkout(5, 0.6, 8.1, 90);
  if (week <= 24) return buildTempoWorkout(20, 7.9);

  // Phase 3: weeks 25-36 (alternating A/B)
  if (week >= 35) {
    // Taper weeks — reduce volume 40% but keep intensity
    const isWeekA = (week - 25) % 2 === 0;
    if (isWeekA) return buildIntervalWorkout(3, 0.6, 8.3, 90);
    return buildTempoWorkout(15, 8.0);
  }
  const isWeekA = (week - 25) % 2 === 0;
  if (isWeekA) return buildIntervalWorkout(5, 0.6, 8.3, 90);
  return buildTempoWorkout(25, 8.0);
}

function getSundayDistance(week) {
  if (week <= 4) return 3.5;
  if (week <= 8) return 4.0;
  if (week <= 12) return 4.5;
  if (week <= 24) return week <= 18 ? 4.5 : 5.0;
  if (week >= 35) return 3.0; // taper
  return 5.0;
}

function applyRecoveryReduction(exercises, factor) {
  return exercises.map(ex => {
    if (!ex.timerDuration || ex.name === 'Warm-up' || ex.name === 'Cool Down') return ex;
    return { ...ex, timerDuration: Math.round(ex.timerDuration * factor) };
  });
}

export function getRunningWorkout(effectiveWeek, dayOfWeek) {
  const isRecovery = effectiveWeek > 0 && effectiveWeek % 4 === 0;
  const week = Math.max(1, Math.min(36, effectiveWeek));

  if (dayOfWeek === 'saturday') {
    const title = `Speed / Intervals`;
    let exercises = getSaturdayExercises(week);
    if (isRecovery) exercises = applyRecoveryReduction(exercises, 0.7);
    return {
      title,
      duration: 'Varies',
      isRunning: true,
      week,
      isRecovery,
      sections: [{ name: 'Speed Session', exercises }],
    };
  }

  // Sunday
  let distance = getSundayDistance(week);
  if (isRecovery) distance = Math.round(distance * 0.7 * 10) / 10;
  const dur = distanceToSeconds(distance, SPEEDS.easy);
  return {
    title: 'Easy Long Run',
    duration: `~${Math.round(dur / 60)} min`,
    isRunning: true,
    week,
    isRecovery,
    sections: [{
      name: 'Long Run',
      exercises: [
        buildRunSegment('Easy Run', SPEEDS.easy, dur, `Steady aerobic run at ${SPEEDS.easy} mph (${mphToPace(SPEEDS.easy)}). This should feel genuinely easy — resist the urge to speed up. ${distance} miles total.`),
      ],
    }],
  };
}

export function getPhaseLabel(week) {
  if (week <= 0) return 'Pre-Training';
  if (week <= 12) return 'Phase 1: Building Base';
  if (week <= 24) return 'Phase 2: Building Speed';
  if (week <= 36) return 'Phase 3: Sharpening';
  return 'Post-Program';
}
