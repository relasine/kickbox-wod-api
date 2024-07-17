import {
  REST,
  ORTHODOX,
  SOUTH_PAW,
  POWER_ROUNDS,
} from "../constants/manuevers";
import {
  punchPowerRoundCombos,
  elbowPowerRoundCombos,
  roundHousePowerRoundCombos,
  kneePowerRoundCombos,
  checkPowerRoundCombos,
  slipPowerRoundCombos,
  frontKickPowerRoundCombos,
} from "../constants/powerRoundCombos";
import { getRandomElement } from "./utilityFunctions";

export const generateRandomPowerRounds = () => {
  const comboSet: string[] = getRandomElement([
    punchPowerRoundCombos,
    elbowPowerRoundCombos,
    roundHousePowerRoundCombos,
    kneePowerRoundCombos,
    checkPowerRoundCombos,
    slipPowerRoundCombos,
    frontKickPowerRoundCombos,
  ]);

  return [
    ...comboSet.map((combo) => {
      return {
        position: ORTHODOX,
        exercise: combo,
        duration: 60,
        section: POWER_ROUNDS,
      };
    }),
    { exercise: [REST], duration: 45, section: POWER_ROUNDS },
    ...comboSet.map((combo) => {
      return {
        position: SOUTH_PAW,
        exercise: combo,
        duration: 60,
        section: POWER_ROUNDS,
      };
    }),
  ];
};
