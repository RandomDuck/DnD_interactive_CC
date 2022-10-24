import { SkillItem } from 'components/skill-item';
import { ModInput, Checkbox, ModDisplay } from './imports';

export function Root () {
  return (
    <div id='root' data-testid="root">
      <SkillItem type='str' name='acrobatics' size='m'/>
      <Checkbox name='acrobatics' />
      <ModInput type='str'/>
      <ModDisplay type='str'/>
    </div>
  );
}
