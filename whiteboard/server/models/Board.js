import mongoose from "mongoose";

const boardSchema = mongoose.Schema({
  projectName: { type: String },
  projectEngr: { type: String },
  tlExpiry: { type: Date, default: Date.now },
  releaseDate: { type: Date, default: Date.now },
},
{ timestamps: true }
);

const boardModel = mongoose.model("boardModel", boardSchema);

export default boardModel;