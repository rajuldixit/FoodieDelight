import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true
  }
});
export const User = model("User", userSchema);

const userProfileSchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: User,
    required: true
  },
  favoriteDishes: [
    {
      type: String
    }
  ],
  favoriteRestaurant: [
    {
      type: String
    }
  ]
});

export const UserProfile = model("UserProfile", userProfileSchema);
