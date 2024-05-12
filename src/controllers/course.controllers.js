import { Course } from "../models/course.models";
import { ApiResponse } from "../utils/ApiResponse";

const createCourse = async (req, res) => {
  try {
    const data = req.body;
    const course = await Course.create({ data });
    res.status(200).json(new ApiResponse(200, course));
  } catch (error) {
    console.log(error);
  }
};

const getAllCourse = async (req, res) => {
  try {
    const allCourese = await Course.find({});
    res.status(200).json(new ApiResponse(200, allCourese));
  } catch (error) {
    console.log(error);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const id = req.body.id;
    const course = await Course.findOneAndDelete({ id: id });
    res.status(200).json(new ApiResponse(200, course));
  } catch (error) {
    console.log(error);
  }
};

export { createCourse, deleteCourse, getAllCourse };
