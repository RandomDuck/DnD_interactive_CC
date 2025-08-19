import { SkillStyledUl } from '../resources/componentStyle';
import { SkillItem } from '@/components/skill-item';

const SkillsList = () => {
  return (
    <SkillStyledUl id='skillList' data-testid="skillList">
      Skills:
      <SkillItem type='str' name='acrobatics' size='m' />
      <SkillItem type='wis' name='animal handling' size='m' />
      <SkillItem type='int' name='arcana' size='m' />
      <SkillItem type='str' name='athletics' size='m' />
      <SkillItem type='chr' name='deception' size='m' />
      <SkillItem type='int' name='history' size='m' />
      <SkillItem type='wis' name='insight' size='m' />
      <SkillItem type='chr' name='intimidation' size='m' />
      <SkillItem type='int' name='investigation' size='m' />
      <SkillItem type='wis' name='medicine' size='m' />
      <SkillItem type='int' name='nature' size='m' />
      <SkillItem type='wis' name='perception' size='m' />
      <SkillItem type='chr' name='performance' size='m' />
      <SkillItem type='chr' name='persuasion' size='m' />
      <SkillItem type='int' name='religion' size='m' />
      <SkillItem type='dex' name='sleight of hand' size='m' />
      <SkillItem type='dex' name='stealth' size='m' />
      <SkillItem type='wis' name='survival' size='m' />
    </SkillStyledUl>
  );
}

export { SkillsList };
