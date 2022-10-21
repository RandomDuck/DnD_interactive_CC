import { utils } from "atoms/checkbox-atoms";

function toggleChek(check, set) {
  check.checked = !check.checked
  check.callback();
  set({...check});
}

function initCheckbox(list, set, name, target) {
  if (list[name] !== undefined) {
    return;
  }
  set(utils.addBox(list, name, target))
}

export { toggleChek, initCheckbox };