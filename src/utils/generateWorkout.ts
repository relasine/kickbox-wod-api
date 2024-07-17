import { generateRandomBagRounds } from "./generateBagRounds";
import { generateRandomPowerRounds } from "./generatePowerRounds";
import { generateWarmup } from "./generateWarmup";

export const generateRandomWorkout = () => {
  const warmup = generateWarmup();
  const bagRounds = generateRandomBagRounds();
  const powerRounds = generateRandomPowerRounds();

  return [...warmup, ...bagRounds, ...powerRounds];
};
