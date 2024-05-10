import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema({
  name: { type: String },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

export const Teacher = mongoose.model("Teacher", teacherSchema);
