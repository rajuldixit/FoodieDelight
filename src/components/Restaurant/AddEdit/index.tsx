//external
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";
//internal
import RestaurantBasicForm from "./RestaurantBasicForm";
import { MenuForm, RestoForm } from "./types";
import RestaurantMenuForm from "./RestaurantMenuForm";
import { useAddRestoMutation } from "../../../services/RestoApi";

const AddEdit = ({ mode }: { mode: string }) => {
  const [basicFormData, setBasicFormData] = useState<RestoForm>();
  const [menuFormData, setMenuFormData] = useState<MenuForm>();
  const [isNext, setIsNext] = useState(false);
  const [addResto, { isLoading: isUpdating }] = useAddRestoMutation();
  const onCancel = () => {};

  const AddResto = (data: MenuForm) => {
    setMenuFormData(data);
  };

  useEffect(() => {
    basicFormData ? setIsNext(true) : setIsNext(false);
  }, [basicFormData]);

  const saveNew = async (obj) => {
    try {
      await addResto({ resto: obj }).unwrap();
      console.log("its done");
    } catch {
      console.log("its not done");
    }
  };

  useEffect(() => {
    if (basicFormData && menuFormData) {
      const obj = {
        restoId: basicFormData?.restoId,
        basicDetails: {
          name: basicFormData?.name,
          description: basicFormData?.description,
          location: {
            area: basicFormData?.location?.area,
            city: basicFormData?.location?.city
          },
          rating: basicFormData?.rating,
          category: basicFormData?.category,
          registrationNo: basicFormData?.registrationNo,
          owner: {
            name: basicFormData?.owner?.name,
            email: basicFormData?.owner?.email
          }
        },
        menuDetails: menuFormData.menu
      };
      saveNew(obj);
    }
  }, [menuFormData]);

  if (isUpdating) {
    console.log("updating");
  }

  return (
    <Card>
      <CardHeader>
        {mode === "0" ? (
          <h6>Add New Restaurant</h6>
        ) : (
          <h6>Edit the Restaurant</h6>
        )}
        {/* <Button onClick={saveNew}>saveNew</Button> */}
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
