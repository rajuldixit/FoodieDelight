import { Schema, model } from "mongoose";

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Restaurant = model("Restaurant", restaurantSchema);
export default Restaurant;
