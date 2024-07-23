import { Schema, model } from "mongoose";
import RestoOwner from "./restoOwner.model";
import Menu from "./menu.model";

const restaurantSchema = new Schema(
  {
    details: {
      name: {
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
      },
      address: {
        city: {
          type: String,
          required: true
        },
        street: {
          type: String,
          required: true
        },
        pincode: {
          type: String,
          required: true
        }
      },
      category: {
        type: String,
        required: true,
        enum: ["VEG", "NON-VEG", "VEGAN"]
      },
      registrationNo: {
        type: String,
        required: true
      }
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: RestoOwner,
      required: true
    },
    menu: [
      {
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
        },
        tags: [{ type: String }]
      }
    ]
  },
  { timestamps: true }
);

const Restaurant = model("Restaurant", restaurantSchema);
export default Restaurant;
