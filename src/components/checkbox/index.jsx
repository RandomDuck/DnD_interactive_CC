import { useAtom } from 'jotai';
import { chekboxList } from 'atoms/checkbox-atoms'
import { StyledChekbox, initCheckbox, toggleChek } from './imports';
import { useEffect, useRef } from 'react';

export function Checkbox({name, checked=false, callback=()=>{}, size}) {
  const targetObject = useRef({name, checked, callback});
  const [checkList, setCheckList] = useAtom(chekboxList);  
console.log(name, checkList)
  useEffect(()=>{
    initCheckbox(checkList, setCheckList, targetObject.current);
  }, [checkList, setCheckList]);
  
  if (checkList[name]){
    return <StyledChekbox size={size} checked={checkList[name].checked} onChange={()=>toggleChek(checkList, setCheckList, name)} />;
  }
}
