import { Router } from "express";
import { createuser } from "../Controller/UserController.js";
const router = Router();

router.post("/", createuser)

export default router;