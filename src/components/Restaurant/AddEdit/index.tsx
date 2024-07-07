//external
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";
//internal
import RestaurantBasicForm from "./RestaurantBasicForm";
import { MenuForm, RestoForm } from "./types";
import RestaurantMenuForm from "./RestaurantMenuForm";

const AddEdit = ({ mode }: { mode: string }) => {
  const [basicFormData, setBasicFormData] = useState<RestoForm>();
  const [menuFormData, setMenuFormData] = useState<MenuForm>();
  const [isNext, setIsNext] = useState(false);
  const onCancel = () => {};

  const AddResto = (data: MenuForm) => {
    setMenuFormData(data);
  };

  useEffect(() => {
    basicFormData ? setIsNext(true) : setIsNext(false);
  }, [basicFormData]);
  useEffect(() => {
    console.log("Resto Details: ", basicFormData, menuFormData);
  }, [menuFormData]);

  return (
    <Card>
      <CardHeader>
        {mode === "0" ? (
          <h6>Add New Restaurant</h6>
        ) : (
          <h6>Edit the Restaurant</h6>
        )}
      </CardHeader>
      <CardBody>
        {!isNext ? (
          <RestaurantBasicForm
            onCancel={onCancel}
            setBasicFormData={setBasicFormData}
          />
        ) : (
          <RestaurantMenuForm setMenuFormData={AddResto} />
        )}
      </CardBody>
    </Card>
  );
};

export default AddEdit;
