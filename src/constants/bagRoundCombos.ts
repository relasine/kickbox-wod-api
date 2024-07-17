import {
  JAB,
  CROSS,
  HOOK,
  ROUNDHOUSE,
  UPPERCUT,
  SWITCH_KICK,
  ELBOW,
  FRAME,
  KNEE,
  SWITCH_KNEE,
  SLIP,
  CRESCENT,
  FRONT_KICK,
  CHECK,
} from "./manuevers";

// ROUNDHOUSE //
export const roundhouseComboOne = [JAB, CROSS, HOOK, ROUNDHOUSE];
export const roundhouseComboTwo = [CROSS, HOOK, UPPERCUT, SWITCH_KICK];
export const roundhouseComboThree = [JAB, CROSS, HOOK, CROSS, SWITCH_KICK];
export const roundhouseComboFour = [JAB, CROSS, HOOK, UPPERCUT, SWITCH_KICK];
export const roundhouseComboFive = [
  JAB,
  CROSS,
  HOOK,
  ELBOW,
  FRAME,
  SWITCH_KICK,
];
export const roundHouseComboSix = [JAB, CROSS, ELBOW, FRAME, SWITCH_KICK];
export const roundHouseComboSeven = [JAB, CROSS, HOOK, KNEE, FRAME, ROUNDHOUSE];
export const roundHouseComboEight = [
  JAB,
  CROSS,
  HOOK,
  CROSS,
  SWITCH_KNEE,
  FRAME,
  ROUNDHOUSE,
];

// ELBOWS //
export const elbowComboOne = [JAB, CROSS, HOOK, ELBOW, FRAME];
export const elbowComboTwo = [CROSS, HOOK, CROSS, ELBOW, FRAME];
export const elbowComboThree = [JAB, CROSS, HOOK, ELBOW, ELBOW];
export const elbowComboFour = [JAB, CROSS, HOOK, CROSS, ELBOW, FRAME];
export const elbowComboFive = [CROSS, HOOK, UPPERCUT, ELBOW, FRAME, ROUNDHOUSE];
export const elbowComboSix = [JAB, CROSS, HOOK, ELBOW, SWITCH_KNEE, FRAME];
export const elbowComboSeven = [CROSS, HOOK, UPPERCUT, ELBOW, KNEE, FRAME];

// KNEES //
export const kneeComboOne = [JAB, CROSS, HOOK, KNEE];
export const kneeComboTwo = [CROSS, HOOK, UPPERCUT, SWITCH_KNEE];
export const kneeComboThree = [JAB, CROSS, HOOK, CROSS, SWITCH_KNEE];
export const kneeComboFour = [JAB, CROSS, SWITCH_KNEE, FRAME, ROUNDHOUSE];
export const kneeComboFive = [
  JAB,
  CROSS,
  SWITCH_KNEE,
  FRAME,
  CROSS,
  HOOK,
  KNEE,
  FRAME,
];

// SLIPS //

export const slipComboOne = [JAB, CROSS, SLIP, CROSS, HOOK];
export const slipComboTwo = [CROSS, HOOK, SLIP, HOOK, UPPERCUT];
export const slipComboThree = [CROSS, HOOK, CRESCENT, HOOK, CROSS];
export const slipComboFour = [...slipComboThree, SWITCH_KICK];
export const slipComboFive = [
  JAB,
  CROSS,
  HOOK,
  CROSS,
  SLIP,
  CROSS,
  ELBOW,
  FRAME,
];
export const slipComboSix = [
  JAB,
  CROSS,
  SLIP,
  CROSS,
  HOOK,
  SLIP,
  CROSS,
  UPPERCUT,
];
export const slipComboSeven = [JAB, CROSS, SLIP, CROSS, HOOK, ELBOW, FRAME];

// FRONT KICKS //
export const frontKickComboOne = [JAB, CROSS, HOOK, FRONT_KICK];
export const frontKickComboTwo = [CROSS, HOOK, CROSS, FRONT_KICK];
export const frontKickComboThree = [JAB, CROSS, HOOK, ELBOW, FRAME, FRONT_KICK];
export const frontKickComboFour = [JAB, CROSS, HOOK, CROSS, FRONT_KICK];
export const frontKickComboFive = [JAB, CROSS, HOOK, KNEE, FRAME, FRONT_KICK];
export const frontKickComboSix = [CROSS, HOOK, ELBOW, KNEE, FRAME, FRONT_KICK];

export const checkComboOne = [JAB, CROSS, ROUNDHOUSE, CHECK];
export const checkComboTwo = [CROSS, HOOK, SWITCH_KICK, CHECK];
export const checkComboThree = [
  CROSS,
  JAB,
  UPPERCUT,
  ROUNDHOUSE,
  CHECK,
  ROUNDHOUSE,
];

export const slipCombos = [
  slipComboOne,
  slipComboTwo,
  slipComboThree,
  slipComboFour,
  slipComboFive,
  slipComboSix,
  slipComboSeven,
];

export const frontKickCombos = [
  frontKickComboOne,
  frontKickComboTwo,
  frontKickComboThree,
  frontKickComboFour,
  frontKickComboFive,
  frontKickComboSix,
];

export const roundHouseCombos = [
  roundhouseComboOne,
  roundhouseComboTwo,
  roundhouseComboThree,
  roundhouseComboFour,
  roundhouseComboFive,
  roundHouseComboSix,
  roundHouseComboSeven,
  roundHouseComboEight,
  elbowComboFour,
];

export const kneeCombos = [
  kneeComboOne,
  kneeComboTwo,
  kneeComboThree,
  kneeComboFour,
  kneeComboFive,
  roundHouseComboSeven,
  roundHouseComboEight,
  elbowComboSix,
  elbowComboSeven,
];

export const elbowCombos = [
  elbowComboOne,
  elbowComboTwo,
  elbowComboThree,
  elbowComboFour,
  elbowComboFive,
  elbowComboSix,
  elbowComboSeven,
  roundhouseComboFive,
  roundHouseComboSix,
];
