//external
import { FC, forwardRef } from "react";
import { get } from "lodash";
import { ErrorMessage } from "@hookform/error-message";
//internal
import SelectField from "../atoms/SelectField";
import FormError from "../atoms/FormErrorMessage";
import { InputFieldProps } from "../../utils/types";
import FormErrorMessage from "../atoms/FormErrorMessage";

const FormSelect: FC<InputFieldProps> = forwardRef(
  (
    {
      id,
      label,
      isDisabled = false,
      type = "text",
      size = "small",
      className = "",
      placeholder,
      listItems,
      register,
      errors
    },
    ref
  ) => {
    const errorMessages = get(errors, id);
    const hasError = !!(errors && errorMessages);
    return (
      <div className="p-2">
        <SelectField
          id={id}
          label={label}
          type={type}
          size={size}
          placeholder={placeholder}
          isDisabled={isDisabled}
          className={className}
          register={register}
          listItems={listItems}
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

export default FormSelect;
