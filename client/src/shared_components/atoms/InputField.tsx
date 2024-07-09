//external
import { Input } from "@nextui-org/react";
import classNames from "classnames";
import { FC, forwardRef } from "react";
//internal
import { InputFieldProps, InputSize } from "../../utils/types";

const sizeMap: { [key in InputSize]: string } = {
  small: "p-2 text-base",
  medium: "p-3 text-base",
  large: "p-4 text-base"
};

const InputField: FC<InputFieldProps> = forwardRef(
  (
    {
      id,
      size,
      placeholder,
      label,
      isDisabled = false,
      type = "text",
      className,
      register
    },
    ref
  ) => {
    return (
      <Input
        id={id}
        label={label}
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        className={classNames([
          `relative inline-flex w-full rounded leading-none 
            transition-colors ease-in-out placeholder-gray-500 
            text-gray-700 bg-gray-50 hover:border-blue-400 
            focus:outline-none focus:border-blue-400 focus:ring-blue-400 
            focus:ring-4 focus:ring-opacity-30`,
          sizeMap[size],
          className
        ])}
        {...(register && register(id))}
      />
    );
  }
);

export default InputField;
