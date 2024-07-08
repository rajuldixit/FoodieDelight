import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "@nextui-org/react";
import FoodImage from "../../../../assets/images/food3.jpg";
import {
  DELETE,
  EDIT,
  FoodCategory,
  READ_MORE
} from "../../../../utils/constants";
import { RestoCardProps } from "../../types";

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
        <h6>{resto?.basicDetails?.name}</h6>
        {resto?.basicDetails?.category === FoodCategory.VEG ? (
          <div className="rounded-circle bg-success w-4 h-4"></div>
        ) : resto.basicDetails.category === FoodCategory.NON_VEG ? (
          <div className="rounded-circle bg-danger w-4 h-4"></div>
        ) : (
          <div className="rounded-circle bg-warning w-4 h-4"></div>
        )}
      </CardHeader>
      <CardBody>
        <img src={FoodImage} />
        <p>{resto.basicDetails.description}</p>
      </CardBody>
      <CardFooter className="flex justify-between cursor-pointer">
        <div className="flex gap-2">
          <Button variant="bordered" color="warning" size="sm" onClick={onEdit}>
            {EDIT}
          </Button>
          <Button
            variant="bordered"
            color="danger"
            size="sm"
            onClick={onDelete}
          >
            {DELETE}
          </Button>
        </div>
        <p onClick={onClick}>{READ_MORE}</p>
      </CardFooter>
    </Card>
  );
};

export default RestoCard;
