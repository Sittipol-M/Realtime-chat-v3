import mongoose from "mongoose";
export const connectMongo = () => {
  mongoose.connect(process.env.MONGO_URL);
};
