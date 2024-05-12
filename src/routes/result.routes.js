import { Router } from "express";
import {
  createResult,
  getResultById,
} from "../controllers/results.controllers";

const router = Router();

router.route("/create-result").post(createResult);
router.route("/get-result-by-id").get(getResultById);

export default router;
