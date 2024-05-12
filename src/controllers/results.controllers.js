import { Result } from "../models/result.models";
import { ApiResponse } from "../utils/ApiResponse";

const createResult = async (req, res) => {
  try {
    const data = req.body;
    const result = await Result.create(data);
    res.status(200).json(new ApiResponse(200, result));
  } catch (error) {
    console.log(error);
  }
};

const getResultById = async (req, res) => {
  try {
    const id = req.body.id;
    const result = await Result.findById(id);
    res.status(200).json(new ApiResponse(200, result));
  } catch (error) {
    console.log(error);
  }
};

export { createResult, getResultById };
