//external
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
//internal
import AddEdit from "../../components/Restaurant/AddEdit";
import Search from "../../components/Restaurant/Search";
import FoodImage from "../../assets/images/food4.png";
import ViewAll from "../../components/Restaurant/ViewAll";
import useRestoData from "../../hooks/useRestoData";
import GlobalError from "../../shared_components/GlobalError";
import Skeleton_Card from "../../shared_components/Skeleton_Card";
import { useSearchMutation } from "../../services/RestoApi";
import { Search_keys } from "../../utils/constants";

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
  const [search, data] = useSearchMutation();

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
    setMode(RestoAction.EDIT.toString());
    toggleActiveAction();
  };

  const searchMethod = async () => {
    try {
      const resp = await search({
        key: Search_keys[1].key,
        value: "Rasoi"
      }).unwrap();
      console.log("Resp :", resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setRestaurantsList(restoList);
  }, [restoList]);

  if (isError) {
    return (
      <div>
        <GlobalError />
      </div>
    );
  }
  if (isFetching) {
    return (
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <Skeleton_Card />
        </div>
        <div className="col-span-1">
          <Skeleton_Card />
        </div>
        <div className="col-span-1">
          <Skeleton_Card />
        </div>
        <div className="col-span-1">
          <Skeleton_Card />
        </div>
      </div>
    );
  }

  return (
    <>
      <Button onClick={searchMethod}>Search</Button>
      <div className="h-screen">
        {restaurantsList.length === 0 && (
          <div className="w-full p-x-4rem py-4">
            {activeAction === RestoAction.VIEW && (
              <div className="w-full p-x-4rem py-4">
                <div className="flex justify-center">
                  <img src={FoodImage} alt="food-image" />
                </div>
                <h2 className="text-center mt-2 mb-2">
                  Looks like It's empty ! Lets add some restaurants.
                </h2>
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
                <AddEdit mode={"0"} onCancel={toggleActiveAction} />
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
                <AddEdit mode={mode} onCancel={toggleActiveAction} />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Restaurants;
