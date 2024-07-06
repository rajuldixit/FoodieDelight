import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import FoodImage from "../../../../assets/images/food3.jpg";
enum FoodCategory {
  "VEG" = "Veg",
  "NON_VEG" = "Non Veg",
  "VEGAN" = "Vegan"
}
type RestoCardProps = {
  id: string;
  name: string;
  description: string;
  location: {
    area: string;
    city: string;
  };
  category: string;
};
const RestoCard = ({
  resto,
  onClick
}: {
  resto: RestoCardProps;
  onClick: () => void;
}) => {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <h6>{resto.name}</h6>
        {/* <p>{resto.category}</p> */}
        {resto.category === FoodCategory.VEG ? (
          <div className="rounded-circle bg-success w-4 h-4"></div>
        ) : resto.category === FoodCategory.NON_VEG ? (
          <div className="rounded-circle bg-danger w-4 h-4"></div>
        ) : (
          <div className="rounded-circle bg-warning w-4 h-4"></div>
        )}
      </CardHeader>
      <CardBody>
        <img src={FoodImage} />
        <p>{resto.description}</p>
      </CardBody>
      <CardFooter className="text-end cursor-pointer">
        <p onClick={onClick}>read more</p>
      </CardFooter>
    </Card>
  );
};

export default RestoCard;
