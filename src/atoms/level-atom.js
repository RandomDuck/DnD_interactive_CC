const { atom } = require("jotai");

const totalLevel = atom(1);
const classLevels = atom({});
const defaultClassEnum = {
  barbarian: "barbarian",
  bard: "bard",
  cleric: "cleric",
  druid: "druid",
  fighter: "fighter",
  monk: "monk",
  paladin: "paladin",
  ranger: "ranger",
  rouge: "rouge",
  sorcerer: "sorcerer",
  warlock: "warlock",
  wizard: "wizard",
  artificer: "artificer"
}

function addClass(list, target, lvl, subclasses = {}) {
  list[target] = { lvl, subclasses }
  return list;
}

function removeClass(list, target) {
  delete list[target];
  return list;
}

export { defaultClassEnum, totalLevel, classLevels, removeClass, addClass }