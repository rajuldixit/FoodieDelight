import { Schema, model } from "mongoose";

const menuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  rating: {
    type: Number,
    required: true
  }
});

const Menu = model("Menu", menuSchema);

export default Menu;
