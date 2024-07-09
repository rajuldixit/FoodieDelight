//external
import { FC, forwardRef } from "react";
import { get } from "lodash";
//internal
import InputField from "../atoms/InputField";
import FormErrorMessage from "../atoms/FormErrorMessage";
import { ErrorMessage } from "@hookform/error-message";
import { InputFieldProps } from "../../utils/types";

const FormInput: FC<InputFieldProps> = forwardRef(
  (
    {
      id,
      label,
      isDisabled = false,
      type = "text",
      size = "small",
      className = "",
      placeholder,
      register,
      errors
    },
    ref
  ) => {
    const errorMessages = get(errors, id);
    const hasError = !!(errors && errorMessages);
    return (
      <div>
        <InputField
          id={id}
          label={label}
          type={type}
          size={size}
          placeholder={placeholder}
          isDisabled={isDisabled}
          className={className}
          register={register}
        />
        <ErrorMessage
          errors={errors}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          name={id as any}
          render={({ message }) => (
            <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
          )}
        />
      </div>
    );
  }
);

export default FormInput;
