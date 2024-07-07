//external
import { useState } from "react";

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

const ResaurantList = [
  {
    id: "Punjab001",
    name: "Punjabi Rasoi",
    description: "This is the most oldest dine place.",
    location: {
      area: "Sector 15",
      city: "Agra"
    },
    category: FoodCategory.VEG
  },
  {
    id: "Choko001",
    name: "Choko Jeeman",
    description: "This is the most oldest dine place.",
    location: {
      area: "Sector 15",
      city: "Agra"
    },
    category: FoodCategory.NON_VEG
  },
  {
    id: "Raj001",
    name: "Raj Rasoi",
    description: "This is the most oldest dine place.",
    location: {
      area: "Sector 15",
      city: "Agra"
    },
    category: FoodCategory.VEGAN
  },
  {
    id: "Bom001",
    name: "Bombay Tadka",
    description: "This is the most oldest dine place.",
    location: {
      area: "Sector 15",
      city: "Agra"
    },
    category: FoodCategory.VEGAN
  }
];
const ViewAll = ({ onEdit }: { onEdit: (id) => void }) => {
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);
  const [activeRestoId, setActiveRestoId] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [restoToDelete, setRestoToDelete] = useState("");
  const [restoList, setRestoList] = useState(ResaurantList);

  const handleReadMore = (id: string) => {
    setIsReadMoreActive(true);
    setActiveRestoId(id);
  };
  const handleDeleteResto = (id: string) => {
    setRestoToDelete(id);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteDialog = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteAction = () => {
    setShowDeleteModal(false);
    const newResto = ResaurantList.filter(
      (resto) => resto.id !== restoToDelete
    );
    setRestoList(newResto);
  };
  return (
    <>
      {!isReadMoreActive ? (
        <div className="grid resto-grid gap-4">
          {restoList.map((resto) => (
            <div className="col-span-1" key={resto.id}>
              <RestoCard
                resto={resto}
                key={resto.id}
                onClick={() => handleReadMore(resto.id)}
                onEdit={() => onEdit(resto.id)}
                onDelete={() => handleDeleteResto(resto.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <RestoDetails
            activeRestoId={activeRestoId}
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
