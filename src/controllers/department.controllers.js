import { Department } from "../models/department.models";

const createDepartment = async (req, res) => {
  try {
    const data = req.body;

    const deparment = await Department.create(data);

    if (!deparment) throw new ApiError(500, "Failed to create student");

    res.status(200).json(new ApiResponse(200, deparment));
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode, error.messgae));
  }
};

const getDepartment = async (req, res) => {
  try {
    const allDepartment = await Department.find({});
    res.status(200).json(new ApiResponse(200, allDepartment));
  } catch (error) {
    console.log(error);
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const id = req.body.id;
    const deletedDepartment = await Department.findByIdAndDelete({ id: id });
    res.status(200).json(200, deleteDepartment);
  } catch (error) {
    console.log(error);
  }
};

export { getDepartment, createDepartment, deleteDepartment };
