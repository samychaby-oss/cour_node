import { Router } from "express";
import { handLeCreateUser } from "./users.controller.js";

const router = Router();

router.post("/", handLeCreateUser);

export default router;
