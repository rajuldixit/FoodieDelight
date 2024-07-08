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

  if (isFetching) {
    return <div>loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <>
      {!isReadMoreActive ? (
        <div className="grid resto-grid gap-4">
          {restoList.map((resto) => (
            <div className="col-span-1" key={resto.restoId}>
              <RestoCard
                resto={resto}
                key={resto.restoId}
                onClick={() => handleReadMore(resto.restoId)}
                onEdit={() => onEdit(resto.restoId)}
                onDelete={() => handleDeleteResto(resto.restoId)}
              />
            </div>
          ))}
        </div>
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
