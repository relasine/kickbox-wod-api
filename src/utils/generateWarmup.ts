import { getRandomElement } from "./utilityFunctions";
import * as warmupExercises from "../constants/warmups";
import { REST, WARMUP } from "../constants/manuevers";

const restingCardio = [
  {
    exercise: [warmupExercises.JUMPING_JACKS],
    duration: 60,
    section: WARMUP,
  },
  { exercise: [warmupExercises.BUTT_KICKERS], duration: 30, section: WARMUP },
  { exercise: [warmupExercises.HIGH_KNEES], duration: 30, section: WARMUP },
];

export const generateWarmup = () => {
  const squatExercise = getRandomElement(warmupExercises.squatsAndLunges);
  const plankExercise = getRandomElement(warmupExercises.planks);
  const coreExerciseOne = getRandomElement(warmupExercises.core);
  const coreExerciseTwo = getRandomElement(
    warmupExercises.core.filter((exercise) => exercise !== coreExerciseOne)
  );

  const trioOne = [
    { exercise: [warmupExercises.SQUATS], duration: 30, section: WARMUP },
    { exercise: [plankExercise], duration: 30, section: WARMUP },
    { exercise: [coreExerciseOne], duration: 30, section: WARMUP },
  ];

  const trioTwo = [
    { exercise: [squatExercise], duration: 30, section: WARMUP },
    { exercise: [warmupExercises.PUSH_UPS], duration: 30, section: WARMUP },
    { exercise: [coreExerciseTwo], duration: 30, section: WARMUP },
  ];

  return [
    ...restingCardio,
    ...trioOne,
    ...trioOne,
    {
      exercise: [warmupExercises.JUMPING_JACKS],
      duration: 60,
      section: WARMUP,
    },
    ...trioTwo,
    ...trioTwo,
    { exercise: [warmupExercises.BURNDOWN], duration: 60, section: WARMUP },
    { exercise: [REST], duration: 120, section: WARMUP },
  ];
};
