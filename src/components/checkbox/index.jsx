import { atom, useAtom } from 'jotai';
import { chekboxList } from 'atoms/checkbox-atoms'
import { StyledChekbox, initCheckbox, toggleChek } from './imports';
import { useEffect, useRef } from 'react';

export function Checkbox({name, checked=false, callback = ()=>{}}) {
  const checkBoxAtom = useRef(atom({name, checked, callback}));
  const [checkList, setCheckList] = useAtom(chekboxList);
  const [checkBox, setCheckBox] = useAtom(checkBoxAtom.current);
  
  useEffect(()=>{
    initCheckbox(checkList, setCheckList, name, checkBoxAtom.current);
  }, [checkList, setCheckList, name]);
  


  return <StyledChekbox size="m" checked={checkBox.checked} onChange={()=>toggleChek(checkBox, setCheckBox)} />;
}
