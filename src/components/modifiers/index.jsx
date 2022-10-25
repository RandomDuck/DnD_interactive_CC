import { getModifierAtom } from 'atoms/modifier-atoms';
import { chekboxList } from 'atoms/checkbox-atoms';
import { useAtom } from 'jotai';
import { StyledInput, StyledSpan, calcAbilityWithProf } from './imports';

export function ModInput({type, size, underline=false}) {
  const [mod ,setMod] = useAtom(getModifierAtom(type))
  return <StyledInput type="number" underline={underline} value={mod} onChange={el=>setMod(el.target.valueAsNumber)} size={size} />;
}

export function ModDisplay({type, classes, boxName, showAtr, text="", displayScore=false}) {
  const [getList] = useAtom(chekboxList);
  const [getMod] = useAtom(getModifierAtom(type));
  const [getProfMod] = useAtom(getModifierAtom('prof'));
  
  return <StyledSpan className={classes} >{text}{displayScore ? getMod : calcAbilityWithProf(getMod, getList, boxName, getProfMod)}{showAtr && ` (${type})`}</StyledSpan>;
}
