import { Schema, model } from "mongoose";

/**
 *  @desc Restaurant Basic Details Schema
 */

const restaurantBasicDetailsSchema = new Schema({
  resto: {
    name: {
      type: String,
      required: true
    },
    completeAddress: {
      type: String,
      required: true
    },
    contactNo: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    enum: ["NEW", "IN PROGRESS", "APPROVED", "REJECTED", "HOLD"],
    default: "NEW"
  },
  ownerId: {
    type: String,
    required: true
  }
});

export const RestaurantBasicDetails = model(
  "RestaurantBasicDetails",
  restaurantBasicDetailsSchema
);

/**
 *  @desc Restaurant Extensive Details Schema
 */
const restaurantExtensiveDetailsSchema = new Schema({
  restaurantId: {
    type: String,
    required: true
  },
  establishmentType: {
    type: String,
    required: true,
    enum: ["DINE", "DELIVERY", "BOTH"]
  },
  outletOptions: [{ type: String }],
  cuisines: [{ type: String }],
  openingHours: {
    open: { type: String, required: true },
    close: { type: String, required: true }
  },
  openDays: [],
  license: { type: String, required: true },
  category: { type: String, required: true, enum: ["Veg", " Non veg", "Vegan"] }
});

export const RestaurantExtensiveDetails = model(
  "RestaurantExtensiveDetails",
  restaurantExtensiveDetailsSchema
);

/**
 *  @desc Restaurant Dine Details Schema
 */

const restaurantDineDetailsSchema = new Schema({
  restaurantId: {
    type: String,
    required: true
  },
  facilities: [{ type: String }]
});
export const RestaurantDineDetails = model(
  "RestaurantDineDetails",
  restaurantDineDetailsSchema
);

/**
 *  @desc Restaurant Menu Details Schema
 */
const restaurantMenuDetailsSchema = new Schema({
  restaurantId: {
    type: String,
    required: true
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ["Veg", " Non veg", "Vegan"]
  },
  price: { type: Number, required: true },
  picture: { type: String, required: true },
  quatity: { type: Number, required: true },
  serves: { type: Number, required: true }
});
export const RestaurantMenuDetails = model(
  "RestaurantMenuDetails",
  restaurantMenuDetailsSchema
);
