import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: ture,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  studentId: {
    type: Number || String,
    required: ture,
    unique: true,
  },
  deparment: {
    type: Schema.Types.ObjectId,
    ref: "Department",
  },
  course: [
    {
      type: Schema.Types.ObjectId,
      ref: "Coures",
    },
  ],
  address: { type: String },
  phone: { type: String },
});

export const Student = mongoose.model("Student", studentSchema);
