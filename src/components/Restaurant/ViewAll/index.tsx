import RestoCard from "./RestoCard";
import { useState } from "react";
import RestoDetails from "./RestoDetails";
import FD_Dialog from "../../../shared_components/FD_Dialog";
enum FoodCategory {
  "VEG" = "Veg",
  "NON_VEG" = "Non Veg",
  "VEGAN" = "Vegan"
}

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
  const handleReadMore = (id: string) => {
    setIsReadMoreActive(true);
    setActiveRestoId(id);
  };
  const handleDeleteResto = (id: string) => {
    setShowDeleteModal(true);
  };
  const handleCloseDeleteDialog = () => {
    setShowDeleteModal(false);
  };
  return (
    <>
      {!isReadMoreActive ? (
        <div className="grid grid-cols-4 gap-4">
          {ResaurantList.map((resto) => (
            <div className="col-span-1">
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
      <FD_Dialog isOpen={showDeleteModal} onClose={handleCloseDeleteDialog} />
    </>
  );
};

export default ViewAll;
