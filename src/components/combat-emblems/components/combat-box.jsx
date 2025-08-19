import { BorderBox, BoxText } from "../resources/style"
const CombatBox = ({ label, children }) => {
  return (
    <BorderBox>
      <BoxText>{label}</BoxText>
      {children}
    </BorderBox>
  )
}

export { CombatBox }
