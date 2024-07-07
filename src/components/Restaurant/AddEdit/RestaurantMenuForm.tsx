//external
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//internal
import { MenuFormInitialValues, MenuForm, MenuFormObject } from "./types";
import { MenuFormSchema } from "./schema";
import FormElement from "./FormElement";
import { Button } from "@nextui-org/react";

const RestaurantMenuForm = ({
  setMenuFormData
}: {
  setMenuFormData: (data) => void;
}) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit
  } = useForm<MenuForm>({
    defaultValues: MenuFormInitialValues,
    resolver: yupResolver(MenuFormSchema)
  });
  const { fields, append, remove } = useFieldArray({
    name: "menu",
    control
  });
  const { getFormElement } = FormElement();
  const submitHandler = (data: MenuForm) => {
    setMenuFormData(data);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="grid resto-grid gap-2">
        {fields.map((field, index) => (
          <div key={field.id}>
            <section className={"section"} key={field.id}>
              {MenuFormObject.map((menu) => (
                <div className="col-span-1" key={`${field.id}${index}`}>
                  {getFormElement(
                    menu,
                    register,
                    errors,
                    `menu[${index}].${menu.name}`
                  )}
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>
      <Button
        onClick={() =>
          append({ name: "", price: "", description: "", rating: "" })
        }
      >
        Add Menu
      </Button>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default RestaurantMenuForm;
