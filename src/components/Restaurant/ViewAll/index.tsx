import RestoCard from "./RestoCard";
import { useState } from "react";
import RestoDetails from "./RestoDetails";
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
const ViewAll = () => {
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);
  const [activeRestoId, setActiveRestoId] = useState("");
  const onHandleReadMore = (id: string) => {
    setIsReadMoreActive(true);
    setActiveRestoId(id);
  };
  console.log("is read more :", isReadMoreActive);
  return (
    <>
      {!isReadMoreActive ? (
        <div className="grid grid-cols-4 gap-4">
          {ResaurantList.map((resto) => (
            <div className="col-span-1">
              <RestoCard
                resto={resto}
                key={resto.id}
                onClick={() => onHandleReadMore(resto.id)}
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
    </>
  );
};

export default ViewAll;
