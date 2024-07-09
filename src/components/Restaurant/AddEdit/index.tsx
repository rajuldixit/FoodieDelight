//external
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";
//internal
import RestaurantBasicForm from "./RestaurantBasicForm";
import { MenuForm, RestoForm } from "./types";
import RestaurantMenuForm from "./RestaurantMenuForm";
import { useAddRestoMutation } from "../../../services/RestoApi";
import Acknowledgement from "./Acknowledgement";
import {
  ADD_MORE_RESTO,
  ADD_NEW_RESTO,
  ADD_RESTO_ACK_MESSAGE,
  EDIT_RESTO,
  VIEW_RESTO
} from "../../../utils/constants";
import FD_Loader from "../../../shared_components/FD_Loader";

const AddEdit = ({
  mode,
  onCancel
}: {
  mode: string;
  onCancel: () => void;
}) => {
  const [basicFormData, setBasicFormData] = useState<RestoForm>();
  const [menuFormData, setMenuFormData] = useState<MenuForm>();
  const [isNext, setIsNext] = useState(false);
  const [addResto, { isLoading: isUpdating }] = useAddRestoMutation();
  const [showAcknowledgement, setShowAcknowledgement] = useState(false);
  const AddResto = (data: MenuForm) => {
    setMenuFormData(data);
  };

  useEffect(() => {
    basicFormData ? setIsNext(true) : setIsNext(false);
  }, [basicFormData]);

  const saveNew = async (obj) => {
    try {
      await addResto({ resto: obj }).unwrap();

      setIsNext(null);
      setShowAcknowledgement(true);
    } catch {}
  };

  const handleAckPrimaryBtn = () => {
    setShowAcknowledgement(false);
    setIsNext(false);
  };

  useEffect(() => {}, [showAcknowledgement]);
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
    return (
      <div>
        <FD_Loader />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        {!showAcknowledgement &&
          (mode === "0" ? <h6>{ADD_NEW_RESTO}</h6> : <h6>{EDIT_RESTO}</h6>)}
      </CardHeader>
      <CardBody>
        {!showAcknowledgement &&
          (!isNext ? (
            <RestaurantBasicForm
              onCancel={onCancel}
              setBasicFormData={setBasicFormData}
            />
          ) : (
            <RestaurantMenuForm setMenuFormData={AddResto} />
          ))}
        {showAcknowledgement && (
          <Acknowledgement
            message={ADD_RESTO_ACK_MESSAGE}
            handlePrimaryBtn={handleAckPrimaryBtn}
            handleSecondaryBtn={onCancel}
            primaryBtnText={ADD_MORE_RESTO}
            secondaryBtnText={VIEW_RESTO}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default AddEdit;
