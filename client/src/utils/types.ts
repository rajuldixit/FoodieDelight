import { UseFormRegister, DeepMap, FieldError } from "react-hook-form";

type InputSize = "small" | "medium" | "large";
type InputType = "text" | "email";

type InputFieldProps = {
  id: string;
  isDisabled?: boolean;
  placeholder: string;
  label: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
  register?: UseFormRegister<any>;
  errors?: Partial<DeepMap<any, FieldError>>;
  listItems?: Array<{ key: string; label: string }>;
};

export { InputFieldProps, InputSize, InputType };
