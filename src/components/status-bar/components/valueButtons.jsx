import { useAtom } from "jotai";
import { ButtonWrapper, StyledButton } from "../imports";
import { useEffect, useRef } from "react";
const countTarget = 200
function SubtractionButton({ config, min, arAmmount = 1 }) {
  const [, setValue] = useAtom(config)

  let interval = useRef(null);
  const handleCountdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    interval.current = setInterval(handleSubtractionClick, countTarget);
  }
  const stopCountdown = (e = null) => {
    if (e !== null) {
      e.preventDefault();
      e.stopPropagation();
    }
    clearInterval(interval.current);
  }

  useEffect(() => stopCountdown(), []);

  const handleSubtractionClick = () => {
    setValue((prevVal) => prevVal - arAmmount < min ? min : prevVal - arAmmount);
  }

  return <StyledButton onMouseDown={handleCountdown} onMouseUp={stopCountdown} onClick={handleSubtractionClick}>-</StyledButton>
}

function AdditionButton({ config, max, arAmmount = 1 }) {
  const [, setValue] = useAtom(config)

  let interval = useRef(null);
  const handleCountdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    interval.current = setInterval(handleAdditionClick, countTarget);
  }
  const stopCountdown = (e = null) => {
    if (e !== null) {
      e.preventDefault();
      e.stopPropagation();
    }
    clearInterval(interval.current);
  }

  useEffect(() => stopCountdown(), []);

  const handleAdditionClick = () => {
    setValue((prevVal) => prevVal + arAmmount > max ? max : prevVal + arAmmount);
  }
  return <StyledButton $pushRight onMouseDown={handleCountdown} onMouseUp={stopCountdown} onClick={handleAdditionClick}>+</StyledButton>
}

function ValueButtons({ config, max, min, arAmmount = 1 }) {
  return (
    <ButtonWrapper>
      <SubtractionButton min={min} config={config} arAmmount={arAmmount} />
      <AdditionButton max={max} config={config} arAmmount={arAmmount} />
    </ButtonWrapper>
  );
}

export { ValueButtons, SubtractionButton, AdditionButton };
