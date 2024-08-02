import React from "react";

import { Checkbox } from "../ui";

export interface FilterCheckboxProps {
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  text: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  value,
  endAdornment,
  onCheckedChange,
  checked,
  text,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1 flex items-center gap-2">
        <Checkbox
          onCheckedChange={onCheckedChange}
          checked={checked}
          value={value}
          className="rounded-[8px] w-6 h-6"
          id={`checkbox-${String(value)}`}
        />
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
