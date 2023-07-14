const { atom } = require("jotai");

const chekboxList = atom({});

function addBox(list, target) {
  list[target.name] = target
  return list;
}

function removeBox(list, name) {
  delete list[name];
  return list;
}

const utils = { addBox, removeBox };
export { utils, chekboxList };
