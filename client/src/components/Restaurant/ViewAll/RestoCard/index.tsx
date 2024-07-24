import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "@nextui-org/react";
import FoodImage from "../../../../assets/images/food3.jpg";
import FoodImage2 from "../../../../assets/images/food6.jpg";
import {
  DELETE,
  EDIT,
  FoodCategory,
  READ_MORE,
  Roles
} from "../../../../utils/constants";
import { IRestaurantsByTag, RestoCardProps } from "../../types";
import { useAuth } from "context/AuthContext";
import { useEffect } from "react";

const RestoCard = ({
  resto,
  index,
  onClick,
  onEdit,
  onDelete
}: {
  resto: IRestaurantsByTag;
  index: number;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) => {
  const { user } = useAuth();

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <h6>{resto?.details?.name}</h6>
        {resto?.details?.category === FoodCategory.VEG ? (
          <div className="rounded-circle bg-success w-4 h-4"></div>
        ) : resto.details.category === FoodCategory.NON_VEG ? (
          <div className="rounded-circle bg-danger w-4 h-4"></div>
        ) : (
          <div className="rounded-circle bg-warning w-4 h-4"></div>
        )}
      </CardHeader>
      <CardBody>
        {index % 2 === 0 ? <img src={FoodImage} /> : <img src={FoodImage2} />}
        <p>{resto.details.description}</p>
      </CardBody>
      <CardFooter className="flex justify-between cursor-pointer">
        {user && user.role === Roles.ADMIN && (
          <div className="flex gap-2">
            <Button
              variant="bordered"
              color="warning"
              size="sm"
              onClick={onEdit}
            >
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
        )}
        <p onClick={onClick}>{READ_MORE}</p>
      </CardFooter>
    </Card>
  );
};

export default RestoCard;
