import { Schema, model, models } from "mongoose";

const chordSchema =new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    singer: {
      type: Schema.Types.ObjectId,
      ref: "singers",
      required: true,
    },
    featuring: {
      type: Schema.Types.ObjectId,
      ref: "singers",
      default: null,
    },
    genre: {
      type: String,
      required: true,
    },

    chordLyric: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    view: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const ChordsModel =
  models.chords || model("chords", chordSchema);
export default ChordsModel;
