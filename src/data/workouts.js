// Monday through Friday gym workouts - static, repeats every week

export const gymWorkouts = {
  monday: {
    title: 'Chest & Push',
    duration: '30 min',
    sections: [
      {
        name: 'Warm-up',
        duration: '2 min',
        exercises: [
          {
            name: 'Warm-up',
            prescription: 'Arm circles x10 each, band pull-aparts x15, push-ups x10',
            rest: null,
            isTimed: true,
            timerDuration: 120,
            howTo: 'Arm circles × 10 each direction, band pull-aparts × 15, push-ups × 10.',
          },
        ],
      },
      {
        name: 'Superset 1',
        duration: '10 min',
        exercises: [
          {
            name: 'Barbell Bench Press',
            prescription: '4 × 8',
            rest: 60,
            isTimed: false,
            supersetWith: 'Dips',
            howTo: 'Lie on a flat bench with your eyes under the bar. Grip the bar slightly wider than shoulder width. Unrack, lower the bar to your mid-chest with control, then press it back up until your arms are straight. Keep your feet flat on the floor and your shoulder blades squeezed together throughout. This is your main chest builder — go heavy but always use a spotter or safety bars if pushing near your limit.',
          },
          {
            name: 'Dips',
            prescription: '4 × 10, immediately after bench',
            rest: 60,
            isTimed: false,
            supersetWith: 'Barbell Bench Press',
            howTo: 'Grab the parallel bars and push yourself up until your arms are straight. Lower yourself by bending your elbows until your upper arms are roughly parallel to the floor, then push back up. Lean your torso slightly forward to put more work on your chest rather than your triceps. Once bodyweight feels easy, add weight using a dip belt or by holding a dumbbell between your feet.',
          },
        ],
      },
      {
        name: 'Superset 2',
        duration: '8 min',
        exercises: [
          {
            name: 'Incline Dumbbell Press',
            prescription: '3 × 10',
            rest: 45,
            isTimed: false,
            supersetWith: 'Cable Flyes',
            howTo: 'Set an adjustable bench to about 30 degrees. Hold a dumbbell in each hand at shoulder level, palms facing forward. Press them up until your arms are straight, then lower back to shoulder level. This targets the upper part of your chest, which the flat bench doesn\'t hit as well.',
          },
          {
            name: 'Cable Flyes',
            prescription: '3 × 12, immediately after incline press',
            rest: 45,
            isTimed: false,
            supersetWith: 'Incline Dumbbell Press',
            howTo: 'Set both cables to about shoulder height. Stand in the middle, grab a handle in each hand, and step forward slightly so there\'s tension on the cables. With a slight bend in your elbows, bring your hands together in front of your chest in a hugging motion. Squeeze at the midpoint, then let your arms open back out slowly. Keep the movement controlled — this is about the stretch and squeeze, not heavy weight.',
          },
        ],
      },
      {
        name: 'Finisher',
        duration: '7 min',
        exercises: [
          {
            name: 'Tricep Pushdowns',
            prescription: '3 × 15',
            rest: 30,
            isTimed: false,
            howTo: 'Use a cable machine with a straight bar or rope attachment at the top. Stand facing the machine, grip the bar with both hands, elbows pinned to your sides. Push the bar down until your arms are fully straight, squeezing your triceps at the bottom. Let it come back up with control. Your elbows should stay glued to your ribs the entire time — if they\'re flaring out, go lighter.',
          },
          {
            name: 'Overhead Tricep Extension',
            prescription: '3 × 12',
            rest: 30,
            isTimed: false,
            howTo: 'Hold one dumbbell with both hands behind your head, arms bent. Straighten your arms to press the dumbbell up overhead, then lower it back behind your head. Keep your elbows pointing forward and close to your ears throughout. You can also do this with a cable rope attachment, facing away from the machine.',
          },
          {
            name: 'Push-ups to Failure',
            prescription: '1 set to failure',
            rest: null,
            isTimed: false,
            howTo: 'Standard push-ups, hands slightly wider than shoulder width. Go until you can\'t do another rep with good form. This empties the tank on your chest and triceps.',
          },
        ],
      },
    ],
  },

  tuesday: {
    title: 'Accessories & Gaps',
    duration: '30 min',
    description: 'Lighter day. Volume and coverage, not max effort.',
    sections: [
      {
        name: 'Superset 1',
        duration: '10 min',
        exercises: [
          {
            name: 'Single-Arm Dumbbell Rows',
            prescription: '3 × 10 each side',
            rest: 45,
            isTimed: false,
            supersetWith: 'Cable Pulldowns',
            howTo: 'Put one knee and one hand on a flat bench, with the other foot on the floor. Hold a dumbbell in your free hand hanging straight down. Pull the dumbbell up to your hip, squeezing your shoulder blade in at the top, then lower slowly. Keep your back flat and your torso square to the floor — don\'t twist. This adds back thickness from a different angle than barbell rows on Thursday.',
          },
          {
            name: 'Cable Pulldowns (Wide Grip)',
            prescription: '3 × 12, immediately after rows',
            rest: 45,
            isTimed: false,
            supersetWith: 'Single-Arm Dumbbell Rows',
            howTo: 'Sit at the lat pulldown machine and grab the bar with a wide overhand grip. Pull the bar down to your upper chest, squeezing your lats at the bottom, then let it return slowly with control. Keep your chest up and lean back just slightly — don\'t yank the weight down by swinging your torso. This adds lat width that pull-ups alone won\'t fully cover.',
          },
        ],
      },
      {
        name: 'Superset 2',
        duration: '8 min',
        exercises: [
          {
            name: 'Farmer\'s Walks',
            prescription: '4 × 40 steps',
            rest: 45,
            isTimed: false,
            supersetWith: 'Wrist Curls',
            howTo: 'Grab a heavy dumbbell in each hand and walk. Keep your shoulders back and down, core tight, and stand tall — don\'t let the weights pull you forward or to the side. Take controlled steps. This builds forearms, grip, traps, and core all at once, and it directly helps your running posture. Go as heavy as you can while maintaining good posture.',
          },
          {
            name: 'Wrist Curls',
            prescription: '3 × 15 (palms up) + 3 × 15 (palms down)',
            rest: 45,
            isTimed: false,
            supersetWith: 'Farmer\'s Walks',
            howTo: 'Sit on a bench and rest your forearms on your knees with your wrists hanging off the edge. Hold a light dumbbell in each hand, palms facing up. Curl the dumbbells up using just your wrists, then lower slowly. After your set, flip your hands over (palms facing down) and do another set of 15 — this hits the other side of your forearms.',
          },
        ],
      },
      {
        name: 'Superset 3',
        duration: '9 min',
        exercises: [
          {
            name: 'Dumbbell Pullovers',
            prescription: '3 × 12',
            rest: 30,
            isTimed: false,
            howTo: 'Lie on a bench with your head near the end. Hold one dumbbell with both hands above your chest, arms slightly bent. Lower it back over your head in a slow arc until you feel a deep stretch in your lats and chest, then pull it back over your chest. Keep a slight bend in your elbows throughout — don\'t let them flare wide.',
          },
          {
            name: 'Plate Front Raises',
            prescription: '3 × 12',
            rest: 30,
            isTimed: false,
            howTo: 'Hold a weight plate with both hands at your waist, arms straight. Raise it straight out in front of you to shoulder height, pause briefly, then lower slowly. Don\'t swing or use momentum.',
          },
          {
            name: 'Reverse Cable Flyes',
            prescription: '3 × 15',
            rest: 30,
            isTimed: false,
            howTo: 'Set both cables to about shoulder height. Cross the cables — grab the left handle with your right hand and the right handle with your left hand. Step back slightly, then pull your hands apart and out to the sides, squeezing your rear delts and upper back at the peak. Return slowly. If cables are busy, do bent-over dumbbell reverse flyes instead.',
          },
        ],
      },
    ],
  },

  wednesday: {
    title: 'Legs',
    duration: '30 min',
    sections: [
      {
        name: 'Warm-up',
        duration: '3 min',
        exercises: [
          {
            name: 'Warm-up',
            prescription: 'BW squats x10, leg swings x10 each, glute bridges x10',
            rest: null,
            isTimed: true,
            timerDuration: 180,
            howTo: 'Bodyweight squats × 10, leg swings × 10 each side, glute bridges × 10.',
          },
        ],
      },
      {
        name: 'Main Lifts',
        duration: '12 min',
        exercises: [
          {
            name: 'Barbell Back Squats',
            prescription: '4 × 8',
            rest: 60,
            isTimed: false,
            howTo: 'Stand with the bar across your upper back (not your neck). Feet shoulder-width apart, toes slightly out. Push your hips back and bend your knees to lower yourself until your thighs are at least parallel to the floor, then drive back up through your heels. Keep your chest up and your core tight the whole time. This is your primary quad and overall leg builder.',
          },
          {
            name: 'Romanian Deadlifts (RDLs)',
            prescription: '4 × 8',
            rest: 60,
            isTimed: false,
            howTo: 'Stand holding a barbell or dumbbells in front of your thighs. With a slight bend in your knees (keep them fixed), hinge at your hips and lower the weight along the front of your legs until you feel a deep stretch in your hamstrings — usually around mid-shin. Then drive your hips forward to stand back up. Keep your back flat the entire time. If your back starts rounding, you\'ve gone too low.',
          },
        ],
      },
      {
        name: 'Superset',
        duration: '8 min',
        exercises: [
          {
            name: 'Bulgarian Split Squats',
            prescription: '3 × 10 each leg',
            rest: 45,
            isTimed: false,
            supersetWith: 'Lying Hamstring Curls',
            howTo: 'Stand a couple of feet in front of a bench. Place one foot behind you on the bench, laces down. Hold a dumbbell in each hand. Bend your front knee and lower yourself until your front thigh is parallel to the floor, then push back up. Keep your torso upright. This fixes strength imbalances between your legs and mimics the single-leg demand of running.',
          },
          {
            name: 'Lying Hamstring Curls',
            prescription: '3 × 12, immediately after split squats',
            rest: 45,
            isTimed: false,
            supersetWith: 'Bulgarian Split Squats',
            howTo: 'Lie face down on the hamstring curl machine with the pad behind your ankles. Curl your heels toward your glutes, squeeze at the top, then lower slowly. Control the negative — don\'t let the weight drop.',
          },
        ],
      },
      {
        name: 'Finisher',
        duration: '4 min',
        exercises: [
          {
            name: 'Jump Squats',
            prescription: '3 × 8',
            rest: 30,
            isTimed: false,
            howTo: 'Bodyweight only. Stand with feet shoulder-width apart, squat down, then explode upward and jump off the ground. Land softly with bent knees and go straight into the next rep. These build the explosive power that translates directly to running speed.',
          },
          {
            name: 'Standing Calf Raises',
            prescription: '3 × 20',
            rest: 30,
            isTimed: false,
            howTo: 'Use the standing calf raise machine, or stand on the edge of a step holding a dumbbell. Rise up onto your toes as high as you can, pause at the top, then lower your heels slowly below the step for a full stretch. The slow lowering is where calf strength is built — don\'t rush it.',
          },
        ],
      },
    ],
  },

  thursday: {
    title: 'Pull & Back',
    duration: '30 min',
    sections: [
      {
        name: 'Warm-up',
        duration: '2 min',
        exercises: [
          {
            name: 'Warm-up',
            prescription: 'Band pull-aparts x15, dead hangs 20s, cat-cow x8',
            rest: null,
            isTimed: true,
            timerDuration: 120,
            howTo: 'Band pull-aparts × 15, dead hangs from a pull-up bar × 20 sec, cat-cow stretches × 8.',
          },
        ],
      },
      {
        name: 'Superset 1',
        duration: '10 min',
        exercises: [
          {
            name: 'Pull-ups',
            prescription: '4 × max reps (aim 6-10)',
            rest: 60,
            isTimed: false,
            supersetWith: 'Barbell Rows',
            howTo: 'Grab the pull-up bar with an overhand grip slightly wider than shoulder width. Hang with straight arms, then pull yourself up until your chin is over the bar. Lower yourself all the way back down with control. Avoid swinging or kipping. If you can\'t hit 6 reps, loop a resistance band over the bar and put your foot in it for assistance. If you\'re getting 10+ easily, add weight with a dip belt.',
          },
          {
            name: 'Barbell Rows',
            prescription: '4 × 8, immediately after pull-ups',
            rest: 60,
            isTimed: false,
            supersetWith: 'Pull-ups',
            howTo: 'Stand with feet shoulder-width apart, hinge forward at the hips until your torso is roughly 45 degrees to the floor. Grip the barbell with an overhand grip. Pull the bar up to your lower chest, squeezing your shoulder blades together at the top, then lower it back down. Keep your back flat — if you\'re rounding, the weight is too heavy.',
          },
        ],
      },
      {
        name: 'Superset 2',
        duration: '8 min',
        exercises: [
          {
            name: 'Seated Cable Rows',
            prescription: '3 × 12',
            rest: 45,
            isTimed: false,
            supersetWith: 'Face Pulls',
            howTo: 'Sit at the cable row machine with your feet on the footrests and knees slightly bent. Grab the handle with both hands, sit up tall, and pull the handle to your stomach. Squeeze your shoulder blades together at the peak, then let it return slowly. Don\'t lean back to pull the weight — your torso should stay upright throughout.',
          },
          {
            name: 'Face Pulls',
            prescription: '3 × 15, immediately after rows',
            rest: 45,
            isTimed: false,
            supersetWith: 'Seated Cable Rows',
            howTo: 'Use a cable machine with the rope attachment set at about face height. Grab one end of the rope in each hand with an overhand grip. Step back so there\'s tension on the cable. Pull the rope toward your face, splitting the ends apart as you pull — your hands should end up either side of your ears with your elbows flared out high. Squeeze your shoulder blades together, hold for a second, then let it back slowly. Think of doing a double bicep pose at the peak of each rep.',
          },
        ],
      },
      {
        name: 'Finisher',
        duration: '7 min',
        exercises: [
          {
            name: 'Dumbbell Curls',
            prescription: '3 × 12',
            rest: 30,
            isTimed: false,
            howTo: 'Stand holding a dumbbell in each hand with your palms facing forward (underhand grip). Curl the weights up toward your shoulders by bending your elbows, then lower slowly. Keep your elbows pinned to your sides and avoid swinging your body. If you have to lean back to get the weight up, go lighter.',
          },
          {
            name: 'Hammer Curls',
            prescription: '3 × 12',
            rest: 30,
            isTimed: false,
            howTo: 'Same as a dumbbell curl, but hold the dumbbells with your palms facing each other, like you\'re holding hammers. Same curling motion. This shifts the work to the brachialis (the muscle underneath your bicep) and your forearms. It makes your arms look thicker and builds grip strength, which helps with pull-ups and rows.',
          },
          {
            name: 'Rack Pulls',
            prescription: '2 × 6',
            rest: 60,
            isTimed: false,
            howTo: 'Set the barbell in a power rack at about knee height. Stand with feet shoulder-width apart, hinge at the hips, grip the bar, and stand up straight by driving your hips forward. Lower it back to the rack with control. This is a shorter range of motion than a full deadlift, which is intentional — your legs already get heavy work on Wednesday, so keep these moderate.',
          },
        ],
      },
    ],
  },

  friday: {
    title: 'Shoulders & Abs',
    duration: '30 min',
    sections: [
      {
        name: 'Warm-up',
        duration: '2 min',
        exercises: [
          {
            name: 'Warm-up',
            prescription: 'Arm circles x10, band dislocates x10, light lateral raises x10',
            rest: null,
            isTimed: true,
            timerDuration: 120,
            howTo: 'Arm circles × 10 each direction, band dislocates × 10 (pass a band from in front of you to behind you overhead), light lateral raises × 10.',
          },
        ],
      },
      {
        name: 'Superset 1',
        duration: '10 min',
        exercises: [
          {
            name: 'Overhead Press',
            prescription: '4 × 8',
            rest: 60,
            isTimed: false,
            supersetWith: 'Lateral Raises',
            howTo: 'Stand with a barbell or dumbbells at shoulder height, palms facing forward. Press the weight straight up overhead until your arms are fully extended, then lower back to your shoulders. Standing engages more core than seated. Keep your core tight and avoid arching your lower back — if you\'re leaning back to press, the weight is too heavy.',
          },
          {
            name: 'Lateral Raises',
            prescription: '4 × 12, immediately after press',
            rest: 60,
            isTimed: false,
            supersetWith: 'Overhead Press',
            howTo: 'Stand with a dumbbell in each hand at your sides. With a slight bend in your elbows, raise both arms straight out to the sides until they\'re level with your shoulders — like you\'re making a T shape. Pause briefly, then lower slowly. Use light weight and don\'t swing — if you have to jerk the weight up, go lighter.',
          },
        ],
      },
      {
        name: 'Superset 2',
        duration: '7 min',
        exercises: [
          {
            name: 'Rear Delt Flyes',
            prescription: '3 × 15',
            rest: 30,
            isTimed: false,
            supersetWith: 'Shrugs',
            howTo: 'Bend forward at the waist until your torso is roughly parallel to the floor. Hold a dumbbell in each hand hanging straight down. Raise both arms out to the sides, squeezing your shoulder blades together at the top. You can also do these sitting on the edge of a bench, leaning forward.',
          },
          {
            name: 'Shrugs',
            prescription: '3 × 12, immediately after flyes',
            rest: 30,
            isTimed: false,
            supersetWith: 'Rear Delt Flyes',
            howTo: 'Stand holding a dumbbell or barbell with your arms at your sides. Shrug your shoulders straight up toward your ears as high as you can, squeeze for a second at the top, then lower. Don\'t roll your shoulders — just straight up and down.',
          },
        ],
      },
      {
        name: 'Ab Circuit (3 rounds)',
        duration: '8 min',
        exercises: [
          {
            name: 'Hanging Leg Raises',
            prescription: '10 reps',
            rest: null,
            isTimed: false,
            howTo: 'Hang from a pull-up bar with straight arms. Raise your legs in front of you until they\'re parallel to the floor (or higher if you can), then lower with control. Avoid swinging. If this is too hard, bend your knees and do hanging knee raises instead.',
          },
          {
            name: 'Cable Woodchops',
            prescription: '10 each side',
            rest: null,
            isTimed: false,
            howTo: 'Set a cable to the highest position. Stand sideways to the machine, grab the handle with both hands. Pull the cable down and across your body in a diagonal chopping motion, rotating your torso. Control the return. Switch sides. This works your obliques and rotational core, which matters for running form.',
          },
          {
            name: 'Ab Wheel Rollouts',
            prescription: '10 reps',
            rest: 60,
            isTimed: false,
            howTo: 'Kneel on the floor holding an ab wheel (or a barbell with round plates). Roll it forward, extending your body as far as you can while keeping your core tight and back flat. Pull yourself back to the starting position using your abs. If you don\'t have a wheel, do a plank hold for 45 seconds instead.',
          },
        ],
      },
    ],
  },
};

export const dayLabels = {
  monday: 'Chest',
  tuesday: 'Back+',
  wednesday: 'Legs',
  thursday: 'Pull',
  friday: 'Shldrs',
  saturday: 'Speed',
  sunday: 'Run',
};
