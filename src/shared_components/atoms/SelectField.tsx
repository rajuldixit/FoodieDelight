import { Select, SelectItem } from "@nextui-org/react";
import React, { FC, forwardRef } from "react";
import { InputFieldProps } from "../../utils/types";

const SelectField: FC<InputFieldProps> = forwardRef(
  ({ listItems, placeholder, className, id, label, register }, ref) => {
    return (
      <Select
        label={label}
        placeholder={placeholder}
        className={`max-w-xs`}
        {...(register && register(id))}
      >
        {listItems.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
    );
  }
);

export default SelectField;
