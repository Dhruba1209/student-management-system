import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  title: { type: String, unique: true, required: true },
  courseNo: { type: String, unique: true, required: true },
  student: [{ type: Schema.Types.ObjectId, ref: "Student" }],
});

export const Course = mongoose.model("Course", courseSchema);
