import { Student } from "../models/student.models";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

const createStudent = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      age,
      email,
      studentId,
      department,
      address,
      phone,
    } = req.body;
    if (
      [firstName, lastName, email, studentId, age].some(
        (value) => value?.trim() === "" || !value
      )
    )
      throw new ApiError(400, "All field required");

    const student = await Student.create({
      firstName,
      lastName,
      studentId,
      email,
      address,
      phone,
      department,
      age,
    });

    if (!student) throw new ApiError(500, "Failed to create student");

    res.status(200).json(new ApiResponse(200, student));
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode, error.messgae));
  }
};

const getStudent = async (req, res) => {
  try {
    const students = await Student.find();
    if (!students) throw new ApiError(500, "Students not found");
    res.status(200).json(new ApiResponse(200, students));
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode, error.messgae));
  }
};

const updateStudent = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode, error.messgae));
  }
};

const deleteStudent = (req, res) => {
  try {
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode, error.messgae));
  }
};

export { createStudent, getStudent, updateStudent, deleteStudent };
