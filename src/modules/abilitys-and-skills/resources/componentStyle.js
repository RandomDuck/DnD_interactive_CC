import styled from "styled-components";

const AbilityStyledUl = styled('ul')`
  flex-direction: column;
  display: inline-flex;
  margin: 2px;
  padding: 5px;
  border: solid black 2px;
`

const SkillStyledUl = styled('ul')`
  flex-direction: column;
  display: inline-flex;
  align-items: flex-start;
  border: black solid 2px;
  margin-top: 0;
`

const SplitDiv = styled('div')`
  display: flex;
  padding-top: 2em;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 0.2em;
`

const CombinedWrapper = styled('div')`
  ${props => props.split && (props.column ? 'height: 16em;' : 'height: 12em;')}
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  border-top: solid black 2px;
  margin-bottom: 0.5em;
  width: ${props => props.column ? '14em' : '21em'};
`

const CombinedAbilityWrapper = styled('div')`
  display: flex;
  justify-content: center;
  border-left: solid 2px black;
  width: 7.5em;
  height: 4em;
`

const CombinedSkillUL = styled('ul')`
 & :first-child { 
  border-bottom: solid 1px black;
  margin-left: -1.5em;
 }
  padding-left: 3.5em;
  flex-direction: column;
  display: flex;
  border-left: solid black 1px;
  align-items: flex-start;
  margin-top: 0;
  margin-left: 1.5em;
`

export { SplitDiv, AbilityStyledUl, CombinedWrapper, CombinedSkillUL, SkillStyledUl, CombinedAbilityWrapper };
