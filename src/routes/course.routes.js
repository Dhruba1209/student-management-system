import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourse,
} from "../controllers/course.controllers";

const router = Router();

router.route("/create-course").post(createCourse);
router.route("/all-course").get(getAllCourse);
router.route("/delete-student").delete(deleteCourse);

export default router;
