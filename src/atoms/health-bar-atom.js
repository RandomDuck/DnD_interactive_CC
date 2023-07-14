const { atom } = require("jotai");

const currentHp = atom(0);
const maxHp = atom(20);
const currentTempHp = atom(0);

export {
  currentHp,
  maxHp,
  currentTempHp
};
