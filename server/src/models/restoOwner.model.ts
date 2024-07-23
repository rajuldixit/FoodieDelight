import { Schema, model } from "mongoose";

const restoOwnerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

const RestoOwner = model("RestoOwner", restoOwnerSchema);

export default RestoOwner;
