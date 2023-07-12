const { atom } = require("jotai");

const strength = atom(10);
const dexterity = atom(10);
const constitution = atom(10);
const wisdom = atom(10);
const intelligence = atom(10);
const charisma = atom(10);
const proficiency = atom(2);
const speed = atom(30);
const armorclas = atom(12);

function getModifierAtom(target) {
  switch (target) {
    case 'strength':
    case 'str':
      return strength;
    case 'dexterity':
    case 'dex':
      return dexterity;
    case 'constitution':
    case 'con':
      return constitution;
    case 'wisdom':
    case 'wis':
      return wisdom;
    case 'intelligence':
    case 'int':
      return intelligence;
    case 'charisma':
    case 'chr':
      return charisma;
    case 'proficiency':
    case 'prof':
      return proficiency;
    case 'speed':
    case 'spd':
      return speed
    case 'ac':
    case 'armorclass':
      return armorclas
    default:
      return "no souch target";
  }
}

function calcAbilityScore(val) {
  return Math.floor((val-10)/2)
}

export {calcAbilityScore, getModifierAtom }
