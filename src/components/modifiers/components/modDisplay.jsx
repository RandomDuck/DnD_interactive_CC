import { getModifierAtom } from '@/atoms/modifier-atoms';
import { useAtom } from 'jotai';
import { calcAbilityWithProf } from '../resources/script.js';
import { StyledSpan } from '../resources/style.js';
import { dropdownList } from '@/atoms/dropdown-atoms.js';

export function ModDisplay({ type, classes, boxName, showAtr, text = "", displayScore = false }) {
  const [getList] = useAtom(dropdownList);
  const [getMod] = useAtom(getModifierAtom(type));
  const [getProfMod] = useAtom(getModifierAtom('prof'));

  return <StyledSpan className={classes} >{text}{displayScore ? getMod : calcAbilityWithProf(getMod, getList, boxName, getProfMod)}{showAtr && ` (${type})`}</StyledSpan>;
}
