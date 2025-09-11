import React, { useRef, useEffect } from "react";
import { StyledDiv, StyledSelect, StyledInput } from "./resources/style";
import { useAtom } from "jotai";
import { dropdownList } from "@/atoms/dropdown-atoms";
import { initDropdown, updateDropdown, dropdownOptions } from "./resources/script";


export default function ProficiencySelect({
  size = "s",
  id = "proficiency",
  type = "unskilled",
  value = 0
}) {

  const targetObject = useRef({ id, type, value });
  const [dropDownList, setDropdownList] = useAtom(dropdownList);
  useEffect(() => {
    initDropdown(dropDownList, targetObject.current, setDropdownList);
  }, [dropDownList, setDropdownList]);

  const handleTypeChange = (e) => {
    const nextType = e.target.value;
    targetObject.current.type = nextType;
    updateDropdown(dropDownList, targetObject.current, id, setDropdownList);
  };

  const handleCustomChange = (e) => {
    const val = e.target.value === "" ? 0 : Number(e.target.value);
    targetObject.current.value = val;
    updateDropdown(dropDownList, targetObject.current, id, setDropdownList);
  };
  if (dropDownList[id]) {
    return (
      <StyledDiv size={size}>

        <StyledSelect
          id={id}
          value={dropDownList[id].type}
          onChange={handleTypeChange}
        >
          {dropdownOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </StyledSelect>

        {dropDownList[id].type === "custom" && (
          <StyledInput
            size={size}
            id={`${id}-custom`}
            type="number"
            inputMode="numeric"
            value={dropDownList[id].value}
            onChange={handleCustomChange}
            placeholder="e.g., 3"
          />
        )}
      </StyledDiv>
    );
  }
}
