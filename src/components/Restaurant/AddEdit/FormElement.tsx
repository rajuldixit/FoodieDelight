import FormInput from "../../../shared_components/molecules/FormInput";
import FormSelect from "../../../shared_components/molecules/FormSelect";
import { FormFieldTypes } from "../../../utils/constants";
import { IFormObject } from "./types";

const FormElement = () => {
  const getFormElement = (formItem: IFormObject, register, errors, formId) => {
    switch (formItem.formFieldType) {
      case FormFieldTypes.SELECT.toString():
        return (
          <FormSelect
            id={formId}
            placeholder={formItem.placeholder}
            label={formItem.label}
            key={formItem.name}
            isDisabled={formItem.isDisabled}
            className={formItem.className}
            listItems={formItem.listItems}
            register={register}
            errors={errors}
          />
        );

      case FormFieldTypes.INPUT.toString():
        return (
          <FormInput
            id={formId}
            placeholder={formItem.placeholder}
            label={formItem.label}
            key={formItem.name}
            isDisabled={formItem.isDisabled}
            className={formItem.className}
            register={register}
            errors={errors}
          />
        );
    }
  };
  return { getFormElement };
};

export default FormElement;
