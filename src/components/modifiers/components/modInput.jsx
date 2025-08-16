import { getModifierAtom } from '@/atoms/modifier-atoms';
import { useAtom } from 'jotai';
import { StyledInput } from '../imports';

export function ModInput({ type, size, underline = false }) {
  const [mod, setMod] = useAtom(getModifierAtom(type))
  return <StyledInput type="number" underline={underline} value={isNaN(mod) ? '' : mod} onChange={el => setMod(el.target.valueAsNumber)} size={size} />;
}


