import { calcAbilityScore } from "@/atoms/modifier-atoms";
import { dropdownOptionsEnum } from "@/components/proficiency-select/resources/script";

function calcAbilityWithProf(mod, list, type, profBon) {
  const abs = calcAbilityScore(mod);
  let prof;
  switch (list[type] && list[type].type ? list[type].type : "") {
    case dropdownOptionsEnum.expertise:
      prof = (profBon * 2);
      break;
    case dropdownOptionsEnum.proficient:
      prof = profBon;
      break;
    case dropdownOptionsEnum.custom:
      prof = list[type].value
      break;

    case dropdownOptionsEnum.unskilled:
    default:
      prof = 0
      break;
  }
  return isNaN(abs + prof) ? "_" : abs + prof;
}

export { calcAbilityWithProf };
