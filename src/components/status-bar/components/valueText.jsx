import { useAtom } from "jotai"
import { TextContainer, TextInput } from "../imports";

export const ValueText = ({ color, maxConfig, valueConfig, label }) => {
  return (
    <TextContainer color={color} >
      {label}:
      <TextValueChanger pushRight config={valueConfig} />
      /
      <TextValueChanger config={maxConfig} />
    </TextContainer>
  )
}

const TextValueChanger = ({ pushRight = false, config }) => {
  const [value, setValue] = useAtom(config);
  const maxVal = 999999999999999;
  
  function valueCheck(e) {
    const valTarget = String(e.target.value).replaceAll(' ','');
    if (isNaN(Number(valTarget))) {
      return Number(value);
    }
    return Number(valTarget) >= maxVal ? maxVal : Number(valTarget)
  }

  return <TextInput
    maxWidth={String(value).length * 0.65}
    pushRight={pushRight}
    onChange={(e) => setValue(valueCheck(e))}
    value={String(value).match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g).join(' ')}
    title={String(value).match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g).join(' ')}
  />
}