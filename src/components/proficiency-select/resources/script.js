import { utils } from "@/atoms/dropdown-atoms";

function updateDropdown(list, data, id, set) {
  list[id] = data
  set({ ...list });
}

function initDropdown(list, data, set) {
  if (list[data.id] !== undefined) {
    return;
  }

  const newList = utils.addDropdown(list, data)
  set({ ...newList })
}


const dropdownOptionsEnum = {
  expertise: "expertise",
  proficient: "proficient",
  unskilled: "unskilled",
  custom: "custom"
}

const dropdownOptions = [
  { value: dropdownOptionsEnum.expertise, label: "Expertise" },
  { value: dropdownOptionsEnum.proficient, label: "Proficient" },
  { value: dropdownOptionsEnum.unskilled, label: "Unskilled" },
  { value: dropdownOptionsEnum.custom, label: "Custom" }
];

export { updateDropdown, initDropdown, dropdownOptions, dropdownOptionsEnum };
