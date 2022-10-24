import { Checkbox, ModDisplay, StyledLi} from './imports';

export function SkillItem ({name, type, size='m'}) {
  return (
    <StyledLi id='skill' data-testid="skill">
      <Checkbox name={name} size={size} />
      <ModDisplay boxName={name} type={type} text={name[0].toUpperCase()+name.substring(1)+': '}/>
    </StyledLi>
  );
}
