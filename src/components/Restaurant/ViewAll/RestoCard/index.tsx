import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "@nextui-org/react";
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
  onClick,
  onEdit,
  onDelete
}: {
  resto: RestoCardProps;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
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
      <CardFooter className="flex justify-between cursor-pointer">
        <div className="flex gap-2">
          <Button variant="bordered" color="warning" size="sm" onClick={onEdit}>
            Edit
          </Button>
          <Button
            variant="bordered"
            color="danger"
            size="sm"
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
        <p onClick={onClick}>read more</p>
      </CardFooter>
    </Card>
  );
};

export default RestoCard;
