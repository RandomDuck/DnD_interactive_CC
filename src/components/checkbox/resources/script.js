import { utils } from "@/atoms/checkbox-atoms";

function toggleChek(check, set, name) {
  check[name].checked = !check[name].checked
  check[name].callback();
  set({ ...check });
}

function initCheckbox(list, set, target) {
  if (list[target.name] !== undefined) {
    return;
  }

  const newList = utils.addBox(list, target)
  set({ ...newList })
}

export { toggleChek, initCheckbox };
