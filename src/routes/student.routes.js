import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getStudent,
} from "../controllers/studen.controllers";

const router = Router();

router.route("/create-student").post(createStudent);
router.route("/students").get(getStudent);
router.route("/delete-student").delete(deleteStudent);

export default router;
