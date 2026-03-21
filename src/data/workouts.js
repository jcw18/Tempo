// Monday through Friday gym workouts - static, repeats every week

export const gymWorkouts = {
  monday: {
    title: 'Chest + Abs',
    duration: '30 min',
    sections: [
      {
        name: 'Warm-up',
        duration: '3 min',
        exercises: [
          {
            name: 'Warm-up',
            prescription: 'Cable ext. rotations x15 each, arm circles x10 each, push-ups x10',
            rest: null,
            isTimed: true,
            timerDuration: 180,
            howTo: 'Cable external rotations × 15 each side (set cable at elbow height, stand sideways, elbow pinned to side at 90 degrees, rotate forearm outward), arm circles × 10 each direction, push-ups × 10.',
          },
        ],
      },
      {
        name: 'Main Lift',
        duration: '8 min',
        exercises: [
          {
            name: 'Barbell Bench Press',
            prescription: '4 × 8',
            rest: 60,
            isTimed: false,
            howTo: 'Lie on a flat bench with your eyes under the bar. Grip the bar slightly wider than shoulder width. Unrack, lower the bar to your mid-chest with control, then press it back up until your arms are straight. Keep your feet flat on the floor and your shoulder blades squeezed together throughout. This is your main chest builder — go heavy but always use a spotter or safety bars if pushing near your limit.',
          },
        ],
      },
      {
        name: 'Superset 1',
        duration: '8 min',
        exercises: [
          {
            name: 'Hanging Leg Raises',
            prescription: '3 × 10',
            rest: 60,
            isTimed: false,
            supersetWith: 'Dips',
            howTo: 'Hang from a pull-up bar with straight arms. Raise your legs in front of you until they\'re parallel to the floor (or higher if you can), then lower with control. Avoid swinging. If this is too hard, bend your knees and do hanging knee raises instead.',
          },
          {
            name: 'Dips',
            prescription: '3 × 10, immediately after leg raises',
            rest: 60,
            isTimed: false,
            supersetWith: 'Hanging Leg Raises',
            howTo: 'Grab the parallel bars and push yourself up until your arms are straight. Lower yourself by bending your elbows until your upper arms are roughly parallel to the floor, then push back up. Lean your torso slightly forward to put more work on your chest rather than your triceps. Once bodyweight feels easy, add weight using a dip belt or by holding a dumbbell between your feet.',
          },
        ],
      },
      {
        name: 'Superset 2',
        duration: '7 min',
        exercises: [
          {
            name: 'Cable Woodchops',
            prescription: '3 × 10 each side',
            rest: 45,
            isTimed: false,
            supersetWith: 'Incline Dumbbell Press',
            howTo: 'Set a cable to the highest position. Stand sideways to the machine, grab the handle with both hands. Pull the cable down and across your body in a diagonal chopping motion, rotating your torso. Control the return. Switch sides. This works your obliques and rotational core.',
          },
          {
            name: 'Incline Dumbbell Press',
            prescription: '3 × 10, immediately after woodchops',
            rest: 45,
            isTimed: false,
            supersetWith: 'Cable Woodchops',
            howTo: 'Set an adjustable bench to about 30 degrees. Hold a dumbbell in each hand at shoulder level, palms facing forward. Press them up until your arms are straight, then lower back to shoulder level. This targets the upper part of your chest, which the flat bench doesn\'t hit as well.',
          },
        ],
      },
      {
        name: 'Superset 3',
        duration: '7 min',
        exercises: [
          {
            name: 'Hanging Windshield Wipers',
            prescription: '3 × 8',
            rest: 45,
            isTimed: false,
            supersetWith: 'High-to-Low Cable Flyes',
            howTo: 'Hang from a pull-up bar, raise your legs up in front of you like a leg raise, then rotate them side to side like a windshield wiper. This crushes your obliques and abs simultaneously. If full straight-leg wipers are too hard at first, bend your knees to shorten the lever and straighten them over time as you get stronger.',
          },
          {
            name: 'High-to-Low Cable Flyes',
            prescription: '3 × 8, immediately after wipers',
            rest: 45,
            isTimed: false,
            supersetWith: 'Hanging Windshield Wipers',
            howTo: 'Set both cables at the top position. Stand in the middle, grab a handle in each hand, and step forward slightly. With a slight bend in your elbows, bring your hands together and downward in front of your lower chest, squeezing hard at the bottom. This angle targets the inner and lower chest fibers that flat movements miss. Control the return — don\'t let the cables yank your arms back.',
          },
        ],
      },
    ],
  },

  tuesday: {
    title: 'Upper Back + Glutes',
    duration: '30 min',
    sections: [
      {
        name: 'Warm-up',
        duration: '2 min',
        exercises: [
          {
            name: 'Warm-up',
            prescription: 'Band pull-aparts x15, dead hangs 20s, glute bridges x10',
            rest: null,
            isTimed: true,
            timerDuration: 120,
            howTo: 'Band pull-aparts × 15, dead hangs from a pull-up bar × 20 sec, bodyweight glute bridges × 10.',
          },
        ],
      },
      {
        name: 'Straight Sets',
        duration: '10 min',
        exercises: [
          {
            name: 'Pull-ups',
            prescription: '4 × max reps (aim 6-10)',
            rest: 60,
            isTimed: false,
            howTo: 'Grab the pull-up bar with an overhand grip slightly wider than shoulder width. Hang with straight arms, then pull yourself up until your chin is over the bar. Lower yourself all the way back down with control. Avoid swinging or kipping. If you can\'t hit 6 reps, loop a resistance band over the bar and put your foot in it for assistance. If you\'re getting 10+ easily, add weight with a dip belt.',
          },
          {
            name: 'Barbell Hip Thrusts',
            prescription: '4 × 10',
            rest: 60,
            isTimed: false,
            howTo: 'Sit on the floor with your upper back resting against a bench. Roll a barbell over your legs so it sits across your hips (use a pad for comfort). Plant your feet flat on the floor, about shoulder-width apart. Drive through your heels and squeeze your glutes to lift your hips up until your body forms a straight line from knees to shoulders. Pause at the top for a 2-count squeeze, then lower. If a barbell feels awkward, use a heavy dumbbell across your hips instead.',
          },
        ],
      },
      {
        name: 'Superset 1',
        duration: '8 min',
        exercises: [
          {
            name: 'Seated Cable Rows',
            prescription: '3 × 12',
            rest: 45,
            isTimed: false,
            supersetWith: 'Bulgarian Split Squats',
            howTo: 'Sit at the cable row machine with your feet on the footrests and knees slightly bent. Grab the handle with both hands, sit up tall, and pull the handle to your stomach. Squeeze your shoulder blades together at the peak, then let it return slowly. Don\'t lean back to pull the weight — your torso should stay upright throughout.',
          },
          {
            name: 'Bulgarian Split Squats',
            prescription: '3 × 10 each leg, immediately after rows',
            rest: 45,
            isTimed: false,
            supersetWith: 'Seated Cable Rows',
            howTo: 'Stand a couple of feet in front of a bench. Place one foot behind you on the bench, laces down. Hold a dumbbell in each hand. Bend your front knee and lower yourself until your front thigh is parallel to the floor, then push back up. Keep your torso upright. This fixes strength imbalances between your legs and mimics the single-leg demand of running.',
          },
        ],
      },
      {
        name: 'Superset 2',
        duration: '8 min',
        exercises: [
          {
            name: 'Face Pulls',
            prescription: '3 × 15',
            rest: 45,
            isTimed: false,
            supersetWith: 'Cable Kickbacks',
            howTo: 'Use a cable machine with the rope attachment set at about face height. Grab one end of the rope in each hand with an overhand grip. Step back so there\'s tension on the cable. Pull the rope toward your face, splitting the ends apart as you pull — your hands should end up either side of your ears with your elbows flared out high. Squeeze your shoulder blades together, hold for a second, then let it back slowly. Think of doing a double bicep pose at the peak of each rep. If the cable machine is busy, swap for band pull-aparts.',
          },
          {
            name: 'Cable Kickbacks',
            prescription: '3 × 12 each leg, immediately after face pulls',
            rest: 45,
            isTimed: false,
            supersetWith: 'Face Pulls',
            howTo: 'Attach an ankle strap to a low cable. Face the machine, brace yourself on the frame, and kick one leg straight back behind you. Squeeze your glute hard at the top, then return slowly. Keep your torso still — the movement should come entirely from your hip. This is pure glute isolation with constant cable tension through the whole range.',
          },
        ],
      },
    ],
  },

  wednesday: {
    title: 'Quads + Hams + Calves',
    duration: '30 min',
    sections: [
      {
        name: 'Warm-up',
        duration: '3 min',
        exercises: [
          {
            name: 'Warm-up',
            prescription: 'BW squats x10, leg swings x10 each, walking lunges x8 each',
            rest: null,
            isTimed: true,
            timerDuration: 180,
            howTo: 'Bodyweight squats × 10, leg swings × 10 each side, bodyweight walking lunges × 8 each side.',
          },
        ],
      },
      {
        name: 'Straight Sets',
        duration: '25 min',
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
          {
            name: 'Walking Lunges',
            prescription: '3 × 12 each leg',
            rest: 45,
            isTimed: false,
            howTo: 'Hold a dumbbell in each hand at your sides. Step forward with one leg and lower your back knee toward the floor until both knees are at about 90 degrees. Push off your front foot and step forward into the next lunge with the opposite leg. Keep your torso upright and take long steps — short steps shift the work to your quads, long steps hit your glutes and hamstrings more.',
          },
          {
            name: 'Lying Hamstring Curls',
            prescription: '3 × 12',
            rest: 45,
            isTimed: false,
            howTo: 'Lie face down on the hamstring curl machine with the pad behind your ankles. Curl your heels toward your glutes, squeeze at the top, then lower slowly. Control the negative — don\'t let the weight drop. If your gym doesn\'t have this machine, swap in Nordic curls or Swiss ball hamstring curls.',
          },
          {
            name: 'Jump Squats',
            prescription: '3 × 8',
            rest: 45,
            isTimed: false,
            howTo: 'Bodyweight only. Stand with feet shoulder-width apart, squat down, then explode upward and jump off the ground. Land softly with bent knees and go straight into the next rep. These build the explosive power that translates directly to running speed.',
          },
          {
            name: 'Seated Calf Raises',
            prescription: '3 × 20',
            rest: 45,
            isTimed: false,
            howTo: 'Sit on a bench with a dumbbell resting on each knee. Plant the balls of your feet on a weight plate or step on the floor so your heels hang off the edge. Raise your heels up as high as you can, pause, then lower slowly. The seated position with bent knees targets the soleus muscle specifically, which matters more for distance running than the gastrocnemius. If your gym has a seated calf raise machine, use that instead.',
          },
        ],
      },
    ],
  },

  thursday: {
    title: 'Shoulders + Biceps',
    duration: '30 min',
    sections: [
      {
        name: 'Warm-up',
        duration: '3 min',
        exercises: [
          {
            name: 'Warm-up',
            prescription: 'Cable ext. rotations x15 each, arm circles x10 each, light lat raises x10',
            rest: null,
            isTimed: true,
            timerDuration: 180,
            howTo: 'Cable external rotations × 15 each side (set cable at elbow height, stand sideways, elbow pinned to side at 90 degrees, rotate forearm outward), arm circles × 10 each direction, light lateral raises × 10.',
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
            supersetWith: 'Dumbbell Curls',
            howTo: 'Stand with a barbell or dumbbells at shoulder height, palms facing forward. Press the weight straight up overhead until your arms are fully extended, then lower back to your shoulders. Standing engages more core than seated. Keep your core tight and avoid arching your lower back — if you\'re leaning back to press, the weight is too heavy. This is your main shoulder lift.',
          },
          {
            name: 'Dumbbell Curls',
            prescription: '4 × 12, immediately after press',
            rest: 60,
            isTimed: false,
            supersetWith: 'Overhead Press',
            howTo: 'Stand holding a dumbbell in each hand with your palms facing forward (underhand grip). Curl the weights up toward your shoulders by bending your elbows, then lower slowly. Keep your elbows pinned to your sides and avoid swinging your body. If you have to lean back to get the weight up, go lighter.',
          },
        ],
      },
      {
        name: 'Superset 2',
        duration: '7 min',
        exercises: [
          {
            name: 'Lateral Raises',
            prescription: '3 × 12',
            rest: 45,
            isTimed: false,
            supersetWith: 'Hammer Curls',
            howTo: 'Stand with a dumbbell in each hand at your sides. With a slight bend in your elbows, raise both arms straight out to the sides until they\'re level with your shoulders — like you\'re making a T shape. Pause briefly, then lower slowly. Use light weight and don\'t swing — if you have to jerk the weight up, go lighter. This targets the side of your shoulders, which gives them a wider look.',
          },
          {
            name: 'Hammer Curls',
            prescription: '3 × 12, immediately after lat raises',
            rest: 45,
            isTimed: false,
            supersetWith: 'Lateral Raises',
            howTo: 'Same as a dumbbell curl, but hold the dumbbells with your palms facing each other, like you\'re holding hammers. Same curling motion. This shifts the work to the brachialis (the muscle underneath your bicep) and your forearms. It makes your arms look thicker and builds grip strength, which helps with pull-ups and rows.',
          },
        ],
      },
      {
        name: 'Superset 3',
        duration: '6 min',
        exercises: [
          {
            name: 'Rear Delt Flyes',
            prescription: '3 × 15',
            rest: 30,
            isTimed: false,
            supersetWith: 'Shrugs',
            howTo: 'Bend forward at the waist until your torso is roughly parallel to the floor. Hold a dumbbell in each hand hanging straight down. Raise both arms out to the sides, squeezing your shoulder blades together at the top. Same motion as a lateral raise, but because you\'re bent over, it shifts the work to the back of your shoulders. These balance out all the front-of-shoulder work from pressing movements.',
          },
          {
            name: 'Shrugs',
            prescription: '3 × 15, immediately after flyes',
            rest: 30,
            isTimed: false,
            supersetWith: 'Rear Delt Flyes',
            howTo: 'Stand holding a dumbbell or barbell with your arms at your sides. Shrug your shoulders straight up toward your ears as high as you can, squeeze for a second at the top, then lower. Don\'t roll your shoulders — just straight up and down.',
          },
        ],
      },
      {
        name: 'Finisher',
        duration: '3 min',
        exercises: [
          {
            name: 'Close-Grip Push-ups',
            prescription: '2 × max reps',
            rest: 30,
            isTimed: false,
            howTo: 'Get into a push-up position but place your hands shoulder-width apart or narrower, with your elbows tucked tight to your sides as you lower and push up. This shifts the work from your chest to your triceps. Go until you can\'t do another rep with good form. No setup needed — just drop and go after your last superset.',
          },
        ],
      },
    ],
  },

  friday: {
    title: 'Lower Back + Abs + Pull-ups',
    duration: '30 min',
    sections: [
      {
        name: 'Warm-up',
        duration: '2 min',
        exercises: [
          {
            name: 'Warm-up',
            prescription: 'Cat-cow x8, dead hangs 20s, glute bridges x10',
            rest: null,
            isTimed: true,
            timerDuration: 120,
            howTo: 'Cat-cow stretches × 8, dead hangs from a pull-up bar × 20 sec, bodyweight glute bridges × 10.',
          },
        ],
      },
      {
        name: 'Main Lift',
        duration: '5 min',
        exercises: [
          {
            name: 'Pull-ups',
            prescription: '4 × max reps (aim 6-10)',
            rest: 60,
            isTimed: false,
            howTo: 'Same form as Tuesday. Overhand grip, full range of motion, no swinging. Two pull-up sessions per week builds back width and grip strength faster.',
          },
        ],
      },
      {
        name: 'Superset',
        duration: '8 min',
        exercises: [
          {
            name: 'Back Extensions',
            prescription: '4 × 12',
            rest: 60,
            isTimed: false,
            supersetWith: 'Reverse Hyperextensions',
            howTo: 'Position yourself in the back extension station with your hips on the pad and your feet hooked under the footrests. Cross your arms over your chest or hold a plate for added resistance. Lower your torso toward the floor by hinging at the hips, then raise back up by squeezing your lower back and glutes until your body is in a straight line. Don\'t hyperextend past straight — that puts unnecessary stress on your spine.',
          },
          {
            name: 'Reverse Hyperextensions',
            prescription: '4 × 12, immediately after back extensions',
            rest: 60,
            isTimed: false,
            supersetWith: 'Back Extensions',
            howTo: 'Lie face down on a bench with your hips at the edge, legs hanging off. Grab the bench or handles for stability. Raise your legs behind you by squeezing your glutes and lower back until your legs are in line with your torso, then lower slowly. If your gym has a dedicated reverse hyper machine, even better. This hits erectors and glutes from the opposite direction of a regular back extension.',
          },
        ],
      },
      {
        name: 'Straight Set',
        duration: '5 min',
        exercises: [
          {
            name: 'Rack Pulls',
            prescription: '3 × 6',
            rest: 60,
            isTimed: false,
            howTo: 'Set the barbell in a power rack at about knee height. Stand with feet shoulder-width apart, hinge at the hips, grip the bar, and stand up straight by driving your hips forward. Lower it back to the rack with control. This is a shorter range of motion than a full deadlift — it focuses the work on your lower back and grip.',
          },
        ],
      },
      {
        name: 'Abs',
        duration: '8 min',
        exercises: [
          {
            name: 'Hanging Leg Raises',
            prescription: '3 × 12',
            rest: 30,
            isTimed: false,
            howTo: 'Hang from a pull-up bar with straight arms. Raise your legs in front of you until they\'re parallel to the floor (or higher if you can), then lower with control. Avoid swinging. If this is too hard, bend your knees and do hanging knee raises instead.',
          },
          {
            name: 'Pallof Press',
            prescription: '3 × 10 each side',
            rest: 30,
            isTimed: false,
            howTo: 'Set a cable at chest height. Stand sideways to the machine, grab the handle with both hands at your chest. Press your hands straight out in front of you and hold for 2–3 seconds, then bring them back to your chest. The cable is trying to rotate you — resist it by bracing your core. This builds anti-rotation core strength, which is critical for running form and injury prevention.',
          },
          {
            name: 'Hanging Knee Tucks with Twist',
            prescription: '3 × 10 each side',
            rest: 30,
            isTimed: false,
            howTo: 'Hang from a pull-up bar. Bring your knees up and rotate them to one side, squeezing your obliques. Lower back down, then bring them up to the other side. This hits your obliques and lower abs while keeping you on the bar.',
          },
        ],
      },
    ],
  },
};

export const dayLabels = {
  monday: 'Chest Abs',
  tuesday: 'Back Glutes',
  wednesday: 'Legs',
  thursday: 'Shoulder Arms',
  friday: 'Back Abs',
  saturday: 'Sprints',
  sunday: 'Long Run',
};
