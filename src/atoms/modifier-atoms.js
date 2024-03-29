const { atom } = require("jotai");

const strength = atom(10);
const dexterity = atom(10);
const constitution = atom(10);
const wisdom = atom(10);
const intelligence = atom(10);
const charisma = atom(10);
const proficiency = atom(2);
const speed = atom(30);
const armorclass = atom(12);
//TODO: make a way to reset initOveride.
const initOveride = atom(null);
const initiative = atom(
  (get)=> get(initOveride) ?? calcAbilityScore(get(dexterity)),
  (_get,set,val)=>set(initOveride,isNaN(val) ? String(val) : val)
);

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
      return speed;
    case 'ac':
    case 'armorclass':
      return armorclass;
    case 'init':
    case 'initiative':
      return initiative
    default:
      console.error("no souch target in modifier atoms:", target);
      return atom(0);
  }
}

function calcAbilityScore(val) {
  return Math.floor((val-10)/2)
}

export {calcAbilityScore, getModifierAtom }
