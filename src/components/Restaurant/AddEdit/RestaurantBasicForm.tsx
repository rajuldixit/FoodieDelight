//external
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
//internal
import { RestoBasicFormSchema } from "./schema";
import {
  RestoForm,
  RestoFormInitialValues,
  FormObject,
  IFormObject
} from "./types";
import { FormFieldTypes } from "../../../utils/constants";
import FormInput from "../../../shared_components/molecules/FormInput";
import FormSelect from "../../../shared_components/molecules/FormSelect";

const RestaurantBasicForm = ({
  onCancel,
  setBasicFormData
}: {
  onCancel: () => void;
  setBasicFormData: (data: RestoForm) => void;
}) => {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit
  } = useForm<RestoForm>({
    defaultValues: RestoFormInitialValues,
    resolver: yupResolver(RestoBasicFormSchema)
  });
  const restoId = uuidv4();
  const submitHandler = (data: any) => {
    setBasicFormData(data);
  };
  const setFormElement = (register, formItem: IFormObject) => {
    switch (formItem.formFieldType) {
      case FormFieldTypes.SELECT.toString():
        return (
          <FormSelect
            id={formItem.name}
            placeholder={formItem.placeholder}
            label={formItem.label}
            key={formItem.name}
            register={register}
            errors={errors}
            isDisabled={formItem.isDisabled}
            className={formItem.className}
            listItems={formItem.listItems}
          />
        );

      case FormFieldTypes.INPUT.toString():
        return (
          <FormInput
            id={formItem.name}
            placeholder={formItem.placeholder}
            label={formItem.label}
            key={formItem.name}
            register={register}
            errors={errors}
            isDisabled={formItem.isDisabled}
            className={formItem.className}
          />
        );
    }
  };

  useEffect(() => {
    setValue("restoId", restoId);
  }, []);
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="grid resto-grid">
        {FormObject.map((formField) => (
          <div className="col-span-1" key={formField.name}>
            {setFormElement(register, formField)}
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center gap-2">
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default RestaurantBasicForm;
