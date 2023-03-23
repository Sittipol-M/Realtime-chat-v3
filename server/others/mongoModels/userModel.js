import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    tel: {
      type: Number,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", schema);
