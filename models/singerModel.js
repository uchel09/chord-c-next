import { Schema, model, models } from "mongoose";

const singerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SingerModel = models.singers || model("singers", singerSchema);
export default SingerModel;
