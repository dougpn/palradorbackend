import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    nome: String,
  },
  {
    timestamps: true,
  }
);

export default model("User", UserSchema);
