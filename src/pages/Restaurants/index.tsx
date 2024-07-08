import { Button, Card, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";
import AddEdit from "../../components/Restaurant/AddEdit";
import Search from "../../components/Restaurant/Search";
import FoodImage from "../../assets/images/food4.png";
import ViewAll from "../../components/Restaurant/ViewAll";
import { useGetAllRestoQuery } from "../../services/RestoApi";
import data from "./../../../../server/node_modules/type-fest/source/readonly-deep.d";
import useRestoData from "../../hooks/useRestoData";

enum RestoAction {
  "ADD",
  "EDIT",
  "VIEW"
}
enum RestoActionBtnLabel {
  "ADD" = "Add a restaurant",
  "VIEW" = "View all restaurant"
}

const Restaurants = () => {
  const [actionBtnLabel, setActionBtnLabel] = useState(RestoActionBtnLabel.ADD);
  const [activeAction, setActiveAction] = useState(RestoAction.VIEW);
  const [mode, setMode] = useState(RestoAction.ADD.toString());

  const { restoList, isError, isFetching } = useRestoData();
  const [restaurantsList, setRestaurantsList] = useState([]);

  const toggleActiveAction = () => {
    activeAction === RestoAction.VIEW
      ? setActiveAction(RestoAction.ADD)
      : setActiveAction(RestoAction.VIEW);

    actionBtnLabel === RestoActionBtnLabel.ADD
      ? setActionBtnLabel(RestoActionBtnLabel.VIEW)
      : setActionBtnLabel(RestoActionBtnLabel.ADD);
  };
  const handleActionBtn = () => {
    setMode(RestoAction.ADD.toString());
    toggleActiveAction();
  };
  const handleEditResto = (id: string) => {
    console.log(id);
    setMode(RestoAction.EDIT.toString());
    toggleActiveAction();
  };

  useEffect(() => {
    setRestaurantsList(restoList);
  }, [restoList]);

  if (isError) {
    return <div>Error...</div>;
  }
  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="h-screen">
        {restaurantsList.length === 0 && (
          <div className="w-full p-x-4rem py-4">
            {activeAction === RestoAction.VIEW && (
              <div className="w-full p-x-4rem py-4">
                <div className="flex justify-center">
                  <img src={FoodImage} alt="food-image" />
                </div>
                <div className="flex justify-center py-4">
                  <Button
                    color="primary"
                    variant="ghost"
                    className="border-width-large"
                    onClick={handleActionBtn}
                  >
                    {actionBtnLabel}
                  </Button>
                </div>
              </div>
            )}
            {activeAction === RestoAction.ADD && (
              <div className="pt-2">
                <AddEdit mode={"0"} />
              </div>
            )}
          </div>
        )}
        {restaurantsList.length > 0 && (
          <div className="w-full p-x-4rem py-4">
            <div className="flex justify-between">
              <Search />
              <Button
                onClick={handleActionBtn}
                color="primary"
                variant="ghost"
                className="border-width-large"
              >
                {actionBtnLabel}
              </Button>
            </div>

            {activeAction === RestoAction.VIEW && (
              <div className="pt-2">
                <ViewAll onEdit={handleEditResto} />
              </div>
            )}
            {activeAction === RestoAction.ADD && (
              <div className="pt-2">
                <AddEdit mode={mode} />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Restaurants;
