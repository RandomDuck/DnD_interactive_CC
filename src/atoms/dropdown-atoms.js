const { atom } = require("jotai");

const dropdownList = atom({});

function addDropdown(list, target) {
  list[target.id] = target
  return list;
}

function removeDropdown(list, name) {
  delete list[name];
  return list;
}

const utils = { addDropdown, removeDropdown };
export { utils, dropdownList };
