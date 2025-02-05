import { Router } from "express";
import { createuser, updateuser } from "../Controller/UserController.js";
const router = Router();

router.post("/", createuser);
router.put("/:id", updateuser);

export default router;
