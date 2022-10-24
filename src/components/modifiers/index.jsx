import { getModifierAtom } from 'atoms/modifier-atoms';
import { chekboxList } from 'atoms/checkbox-atoms';
import { useAtom } from 'jotai';
import { StyledInput, StyledSpan, calcAbilityWithProf } from './imports';

export function ModInput({type, size, underline=false}) {
  const [,setMod] = useAtom(getModifierAtom(type))
  return <StyledInput type="number" underline={underline} onChange={el=>setMod(el.target.valueAsNumber)} size={size} />;
}

export function ModDisplay({type, classes, boxName, text="", displayScore=false}) {
  const [getList] = useAtom(chekboxList);
  const [getMod] = useAtom(getModifierAtom(type));
  const [getProfMod] = useAtom(getModifierAtom('prof'));
  
  return <StyledSpan className={classes} >{text}{displayScore ? getMod : calcAbilityWithProf(getMod, getList, boxName, getProfMod)}</StyledSpan>;
}
