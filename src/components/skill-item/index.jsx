import { Checkbox } from '@/components/checkbox';
import { ModDisplay } from '@/components/modifiers';
import { StyledLi } from './resources/style';

export function SkillItem({ name, type, size = 'm', showAtr = true }) {
  return (
    <StyledLi id='skill' data-testid="skill">
      <Checkbox name={name} size={size} />
      <ModDisplay boxName={name} type={type} text={name[0].toUpperCase() + name.substring(1) + ': '} showAtr={showAtr} />
    </StyledLi>
  );
}
