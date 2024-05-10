import mongoose, { Schema } from "mongoose";

const deparmentSchema = new Schema({
  name: { type: String, required: true, unique: true },
  departmentId: { type: String || Number },
  student: [{ type: Schema.Types.ObjectId, ref: "Student" }],
  room: [{ type: Number }],
  course: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

export const Department = mongoose.model("Department", deparmentSchema);
