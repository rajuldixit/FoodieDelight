import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import FoodImage from "./../../../../assets/images/food2.jpg";
import FD_Rating from "../../../../shared_components/FD_Rating";
import { FoodCategory } from "../../../../utils/constants";

const RestoCardDetails = {
  id: "Punjab001",
  name: "Punjabi Rasoi",
  description: "This is the most oldest dine place.",
  location: {
    area: "Sector 15",
    city: "Agra"
  },
  category: FoodCategory.VEG,
  ratings: "4",
  menu: [
    {
      name: "Kadhai Paneer",
      description: "some random desc",
      price: "$10",
      rating: "5"
    },
    {
      name: "Dal Makhani",
      description: "some random desc",
      price: "$12",
      rating: "4.5"
    },
    {
      name: "Burger",
      description: "some random desc",
      price: "$10",
      rating: "5"
    },
    {
      name: "Roti",
      description: "some random desc",
      price: "$12",
      rating: "4.5"
    },
    {
      name: "Shahi Paneer",
      description: "some random desc",
      price: "$10",
      rating: "5"
    },
    {
      name: "Dal Tadka",
      description: "some random desc",
      price: "$12",
      rating: "4.5"
    },
    {
      name: "Pizza",
      description: "some random desc",
      price: "$10",
      rating: "5"
    },
    {
      name: "Rice",
      description: "some random desc",
      price: "$12",
      rating: "4.5"
    }
  ]
};

const RestoDetails = ({
  activeRestoId,
  viewAll
}: {
  activeRestoId: string;
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
            <h6>{RestoCardDetails.name}</h6>
            <p>{RestoCardDetails.description}</p>
          </div>
          <div>
            <h6>
              {RestoCardDetails.location.area},{RestoCardDetails.location.city}
            </h6>
            <p>{RestoCardDetails.ratings}</p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-4 gap-4">
            {RestoCardDetails.menu.map((dish) => (
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
