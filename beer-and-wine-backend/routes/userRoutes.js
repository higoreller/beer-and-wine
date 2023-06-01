import express from "express";
import { registerUser, loginUser } from "./../controller/userController.js";

const router = express.Router();

router.post("/register/:token", registerUser);

router.post("/login", loginUser);

export default router;
