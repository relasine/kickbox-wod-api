import {
  REST,
  ORTHODOX,
  SOUTH_PAW,
  FREESTYLE,
  BAG_ROUNDS,
} from "../constants/manuevers";
import {
  kneeCombos,
  elbowCombos,
  frontKickCombos,
  roundHouseCombos,
  slipCombos,
} from "../constants/bagRoundCombos";
import { getRandomElement } from "./utilityFunctions";

export const generateRandomBagRounds = () => {
  const firstCombo: string[] = getRandomElement([
    kneeCombos,
    elbowCombos,
    frontKickCombos,
    roundHouseCombos,
    slipCombos,
  ])[0];

  const secondCombo: string[] = getRandomElement(
    getRandomElement([
      kneeCombos,
      elbowCombos,
      frontKickCombos,
      roundHouseCombos,
      slipCombos,
    ])
  );

  const thirdCombo: string[] = getRandomElement(
    getRandomElement([
      kneeCombos,
      elbowCombos,
      frontKickCombos,
      roundHouseCombos,
      slipCombos,
    ])
  );

  return [
    {
      position: ORTHODOX,
      exercise: firstCombo,
      duration: 180,
      section: BAG_ROUNDS,
    },
    { exercise: [REST], duration: 45, section: BAG_ROUNDS },
    {
      position: SOUTH_PAW,
      exercise: firstCombo,
      duration: 180,
      section: BAG_ROUNDS,
    },
    { exercise: [REST], duration: 45, section: BAG_ROUNDS },
    {
      position: ORTHODOX,
      exercise: secondCombo,
      duration: 180,
      section: BAG_ROUNDS,
    },
    { exercise: [REST], duration: 45, section: BAG_ROUNDS },
    {
      position: SOUTH_PAW,
      exercise: secondCombo,
      duration: 180,
      section: BAG_ROUNDS,
    },
    { exercise: [REST], duration: 45, section: BAG_ROUNDS },
    {
      position: ORTHODOX,
      exercise: thirdCombo,
      duration: 180,
      section: BAG_ROUNDS,
    },
    { exercise: [REST], duration: 45, section: BAG_ROUNDS },
    {
      position: ORTHODOX,
      exercise: [FREESTYLE],
      duration: 180,
      section: BAG_ROUNDS,
    },
    { exercise: [REST], duration: 135, section: BAG_ROUNDS },
  ];
};
