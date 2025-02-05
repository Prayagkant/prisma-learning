import { Router } from "express";
import {
  createuser,
  fetchuser,
  fetchusers,
  updateuser,
} from "../Controller/UserController.js";
const router = Router();

router.get("/", fetchusers);
router.get("/:id", fetchuser);
router.post("/", createuser);
router.put("/:id", updateuser);

export default router;
