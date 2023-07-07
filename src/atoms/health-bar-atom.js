const { atom } = require("jotai");

const currentHp = atom(0);
const maxHp = atom(20);

export { currentHp, maxHp };
