import { Schema, model } from "mongoose";

const PostsSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    text : String,
  },
  {
    timestamps: true,
  }
);

export default model("Posts", PostsSchema);
