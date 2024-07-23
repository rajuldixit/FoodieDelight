import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rajul786dixit:VYZSUptCFNm6uSlH@cluster0.1wh1v8b.mongodb.net/foodie-delight-db?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to db");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
export default connectMongoDB;
