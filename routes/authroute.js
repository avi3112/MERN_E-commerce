import express from "express";
import { registercontroller } from "../controller/authController.js";

// Router object
const router = express.Router();

// routing

//Register || method post

router.post("/register", registercontroller);

export default router;
