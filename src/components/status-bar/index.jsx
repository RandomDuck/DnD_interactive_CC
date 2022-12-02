import { useAtom } from "jotai";
import { StyledDiv, currentHp } from "./imports";

export function StatusBar ({ label, color, max, arAmmount = 1 }) {
  const [value, setValue] = useAtom(currentHp)
  const handleSubtractionClick = ()=>{
    setValue(value-arAmmount);
  }
  
  const handleAdditionClick = ()=>{
    setValue(value+arAmmount);
  }

  return(
    <StyledDiv color={color} data-testid="status-bar">
      <button onClick={handleSubtractionClick}>-</button>
      {label+value}
      <button onClick={handleAdditionClick}>+</button>
    </StyledDiv>
  );
}
