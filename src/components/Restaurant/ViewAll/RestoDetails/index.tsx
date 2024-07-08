import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import FoodImage from "./../../../../assets/images/food2.jpg";
import FD_Rating from "../../../../shared_components/FD_Rating";
import { FoodCategory } from "../../../../utils/constants";
import { RestoCardProps } from "../../types";

const RestoDetails = ({
  activeResto,
  viewAll
}: {
  activeResto: RestoCardProps;
  viewAll: () => void;
}) => {
  return (
    <>
      <Card className="p-2 sm:p-6 md:p-6">
        <Button
          onClick={viewAll}
          className="w-2"
          color="secondary"
          variant="bordered"
        >
          Back
        </Button>
        <CardHeader className="flex justify-between">
          <div>
            <h6>{activeResto.basicDetails.name}</h6>
            <p>{activeResto.basicDetails.description}</p>
          </div>
          <div>
            <h6>
              {activeResto.basicDetails.location.area},
              {activeResto.basicDetails.location.city}
            </h6>
            <p>{activeResto.basicDetails.rating}</p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-4 gap-4">
            {activeResto.menuDetails.map((dish) => (
              <div className="col-span-1">
                <Card className="p-0" key={dish.name}>
                  <CardBody style={{ padding: "0 4px 0 0" }}>
                    <div className="flex justify-start">
                      <img src={FoodImage} style={{ width: "3rem" }} />
                      <div className="flex justify-between w-full p-1 ml-2">
                        <div>
                          <h6 className="block">{dish.name}</h6>
                          <p className="block">{dish.description}</p>
                        </div>
                        <div>
                          <h6 className="block">{dish.price}</h6>
                          <p className="block">
                            <FD_Rating />
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default RestoDetails;
