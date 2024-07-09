import { Button } from "@nextui-org/react";
import FoodImage from "../../../assets/images/food5.jpg";

const Acknowledgement = ({
  message,
  handlePrimaryBtn,
  handleSecondaryBtn,
  primaryBtnText,
  secondaryBtnText
}) => {
  console.log("in ack");
  return (
    <div>
      <img src={FoodImage} alt="ack-image" />
      <h2 className="text-center mt-2 mb-2">{message}</h2>
      <div className="flex justify-center gap-4">
        <Button onClick={handlePrimaryBtn}>{primaryBtnText}</Button>
        <Button onClick={handleSecondaryBtn}>{secondaryBtnText}</Button>
      </div>
    </div>
  );
};

export default Acknowledgement;
