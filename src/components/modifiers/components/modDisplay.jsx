import { getModifierAtom } from '@/atoms/modifier-atoms';
import { chekboxList } from '@/atoms/checkbox-atoms';
import { useAtom } from 'jotai';
import { calcAbilityWithProf } from '../resources/script.js';
import { StyledSpan } from '../resources/style.js';

export function ModDisplay({ type, classes, boxName, showAtr, text = "", displayScore = false }) {
  const [getList] = useAtom(chekboxList);
  const [getMod] = useAtom(getModifierAtom(type));
  const [getProfMod] = useAtom(getModifierAtom('prof'));

  return <StyledSpan className={classes} >{text}{displayScore ? getMod : calcAbilityWithProf(getMod, getList, boxName, getProfMod)}{showAtr && ` (${type})`}</StyledSpan>;
}
