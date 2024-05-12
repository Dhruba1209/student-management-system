import { Router } from "express";
import {
  createDepartment,
  deleteDepartment,
  getDepartment,
} from "../controllers/department.controllers";

const router = Router();

router.route("/create-department").post(createDepartment);
router.route("/all-department").get(getDepartment);
router.route("/delete-department").delete(deleteDepartment);

export default router;
