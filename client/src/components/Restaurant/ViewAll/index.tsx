//external
import { useEffect, useState } from "react";

//internal
import RestoCard from "./RestoCard";
import RestoDetails from "./RestoDetails";
import FD_Dialog from "../../../shared_components/FD_Dialog";
import {
  CANCEL,
  DELETE,
  DELETE_RESTO_TEXT,
  FoodCategory
} from "../../../utils/constants";
import "./index.css";
import useRestoData from "../../../hooks/useRestoData";
import { RestoCardProps } from "../types";
import { useDeleteRestoMutation } from "../../../services/RestoApi";
import Skeleton_Card from "../../../shared_components/Skeleton_Card";
import GlobalError from "../../../shared_components/GlobalError";
import { ScrollShadow } from "@nextui-org/react";

const ViewAll = ({ onEdit }: { onEdit: (id) => void }) => {
  const { restoList, isFetching, isError } = useRestoData();
  const [deleteResto] = useDeleteRestoMutation();
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);
  const [activeResto, setActiveResto] = useState<RestoCardProps>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [restoToDelete, setRestoToDelete] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);

  const handleReadMore = (id: string) => {
    const selectedResto = restaurantData.filter(
      (resto) => resto.restoId === id
    );
    setActiveResto(selectedResto[0]);
    setIsReadMoreActive(true);
  };
  const handleDeleteResto = (id: string) => {
    setRestoToDelete(id);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteDialog = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteAction = async () => {
    setShowDeleteModal(false);
    try {
      await deleteResto(restoToDelete).unwrap();
    } catch (error) {}
  };

  useEffect(() => {
    setRestaurantData(restoList);
  }, [restoList]);

  const onCloseToast = () => {};
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
  if (isError) {
    return (
      <div>
        <GlobalError />
      </div>
    );
  }
  return (
    <>
      {!isReadMoreActive ? (
        <ScrollShadow
          size={100}
          style={{ height: "600px", padding: "1% 0" }}
          hideScrollBar
        >
          <div className="grid resto-grid gap-4">
            {restoList.map((resto, index) => (
              <div className="col-span-1" key={resto.restoId}>
                <RestoCard
                  resto={resto}
                  index={index}
                  key={resto.restoId}
                  onClick={() => handleReadMore(resto.restoId)}
                  onEdit={() => onEdit(resto.restoId)}
                  onDelete={() => handleDeleteResto(resto.restoId)}
                />
              </div>
            ))}
          </div>
        </ScrollShadow>
      ) : (
        <div>
          <RestoDetails
            activeResto={activeResto}
            viewAll={() => setIsReadMoreActive(false)}
          />
        </div>
      )}
      <FD_Dialog
        isOpen={showDeleteModal}
        onClose={handleCloseDeleteDialog}
        messageText={DELETE_RESTO_TEXT}
        closeBtnText={CANCEL}
        actionBtnText={DELETE}
        handleActionBtn={handleDeleteAction}
      />
    </>
  );
};

export default ViewAll;
