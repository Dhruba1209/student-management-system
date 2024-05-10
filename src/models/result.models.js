import mongoose, { Schema } from "mongoose";

const resultSchema = new Schema({});

export const Result = mongoose.model("Result", resultSchema);
