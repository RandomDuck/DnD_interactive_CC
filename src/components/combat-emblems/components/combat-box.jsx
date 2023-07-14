import { BorderBox, BoxText } from "../imports"
const CombatBox = ({ label, children }) => {
  return (
    <BorderBox>
      <BoxText>{label}</BoxText>
      {children}
    </BorderBox>
  )
}

export { CombatBox }