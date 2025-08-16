import { calcAbilityScore } from "@/atoms/modifier-atoms";

function calcAbilityWithProf(mod, list, type, profBon) {
  const abs = calcAbilityScore(mod);
  const prof = list[type] && list[type].checked ? profBon : 0;
  return isNaN(abs + prof) ? "_" : abs + prof;
}

export { calcAbilityWithProf };
