import { Button, Card, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import AddEdit from "../../components/Restaurant/AddEdit";
import Search from "../../components/Restaurant/Search";
import FoodImage from "../../assets/images/food4.png";
import ViewAll from "../../components/Restaurant/ViewAll";

enum RestoAction {
  "ADD",
  "EDIT",
  "VIEW"
}
enum RestoActionBtnLabel {
  "ADD" = "Add a restaurant",
  "VIEW" = "View all restaurant"
}
const restaurantsList = [{ key: 1 }];
const Restaurants = () => {
  const [actionBtnLabel, setActionBtnLabel] = useState(RestoActionBtnLabel.ADD);
  const [activeAction, setActiveAction] = useState(RestoAction.VIEW);

  const toggleActiveAction = () => {
    activeAction === RestoAction.VIEW
      ? setActiveAction(RestoAction.ADD)
      : setActiveAction(RestoAction.VIEW);

    actionBtnLabel === RestoActionBtnLabel.ADD
      ? setActionBtnLabel(RestoActionBtnLabel.VIEW)
      : setActionBtnLabel(RestoActionBtnLabel.ADD);
  };
  return (
    <>
      <div className="h-screen">
        {restaurantsList.length === 0 && (
          <div className="w-full p-4">
            <div className="flex justify-center">
              <img src={FoodImage} alt="food-image" />
            </div>
            <div className="flex justify-center py-4">
              <Button
                color="primary"
                variant="ghost"
                className="border-width-large"
              >
                {actionBtnLabel}
              </Button>
            </div>
          </div>
        )}
        {restaurantsList.length > 0 && (
          <div className="w-full p-x-4rem py-4">
            <div className="flex justify-between">
              <Search />
              <Button
                onClick={toggleActiveAction}
                color="primary"
                variant="ghost"
                className="border-width-large"
              >
                {actionBtnLabel}
              </Button>
            </div>

            {activeAction === RestoAction.VIEW && (
              <div className="pt-2">
                <ViewAll />
              </div>
            )}
            {activeAction === RestoAction.ADD && (
              <div className="pt-2">
                <AddEdit />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Restaurants;
