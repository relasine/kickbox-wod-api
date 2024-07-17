import {
  JAB,
  CROSS,
  HOOK,
  ROUNDHOUSE,
  SWITCH_KICK,
  ELBOW,
  KNEE,
  SWITCH_KNEE,
  SLIP,
  FRONT_KICK,
  CHECK,
  GRAB,
  REAR_KICK,
} from "./manuevers";

const powerRoundFinisherComboOne = [JAB, CROSS, JAB, CROSS, JAB, CROSS];
const powerRoundFinisherComboTwo = [ROUNDHOUSE, ROUNDHOUSE, ROUNDHOUSE];
const powerRoundFinisherComboThree = [GRAB, KNEE, KNEE, KNEE, KNEE];

const punchPowerRoundComboOne = [JAB, CROSS, HOOK];
const punchPowerRoundComboTwo = [CROSS, HOOK, CROSS];

const elbowPowerRoundComboOne = [JAB, CROSS, ELBOW];
const elbowPowerRoundComboTwo = [CROSS, HOOK, ELBOW];

const roundHousePowerRoundComboOne = [JAB, CROSS, SWITCH_KICK];
const roundHousePowerRoundComboTwo = [CROSS, HOOK, ROUNDHOUSE];

const kneePowerRoundComboOne = [JAB, CROSS, SWITCH_KNEE];
const kneePowerRoundComboTwo = [CROSS, JAB, KNEE];

const checkPowerRoundComboOne = [JAB, ROUNDHOUSE, CHECK];
const checkPowerRoundComboTwo = [CROSS, SWITCH_KICK, CHECK];
const checkPowerRoundComboThree = [ROUNDHOUSE, CHECK, ROUNDHOUSE];

const slipPowerRoundComboOne = [JAB, SLIP, HOOK];
const slipPowerRoundComboTwo = [CROSS, SLIP, CROSS];

const frontKickPowerRoundComboOne = [JAB, CROSS, FRONT_KICK];
const frontKickPowerRoundComboTwo = [CROSS, HOOK, FRONT_KICK];
const frontKickPowerRoundComboThree = [
  REAR_KICK,
  FRONT_KICK,
  REAR_KICK,
  FRONT_KICK,
];

export const punchPowerRoundCombos = [
  punchPowerRoundComboOne,
  punchPowerRoundComboTwo,
  powerRoundFinisherComboOne,
];

export const elbowPowerRoundCombos = [
  elbowPowerRoundComboOne,
  elbowPowerRoundComboTwo,
  powerRoundFinisherComboOne,
];

export const roundHousePowerRoundCombos = [
  roundHousePowerRoundComboOne,
  roundHousePowerRoundComboTwo,
  powerRoundFinisherComboTwo,
];

export const kneePowerRoundCombos = [
  kneePowerRoundComboOne,
  kneePowerRoundComboTwo,
  powerRoundFinisherComboThree,
];

export const checkPowerRoundCombos = [
  checkPowerRoundComboOne,
  checkPowerRoundComboTwo,
  checkPowerRoundComboThree,
];

export const slipPowerRoundCombos = [
  slipPowerRoundComboOne,
  slipPowerRoundComboTwo,
  powerRoundFinisherComboOne,
];

export const frontKickPowerRoundCombos = [
  frontKickPowerRoundComboOne,
  frontKickPowerRoundComboTwo,
  frontKickPowerRoundComboThree,
];
