import { Department } from "../models/department.models";

const createDepartment = async (req, res) => {
  try {
    const { name, departmentId, student, course } = req.body;

    const deparment = await Department.create({
      name,
      departmentId,
      student,
      course,
    });

    if (!student) throw new ApiError(500, "Failed to create student");

    res.status(200).json(new ApiResponse(200, student));
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode, error.messgae));
  }
};
