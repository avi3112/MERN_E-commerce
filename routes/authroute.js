import express from "express";
import {
  registercontroller,
  logincontroller,
} from "../controller/authController.js";

// Router object
const router = express.Router();

// routing

//Register || method post

router.post("/register", registercontroller);
router.post("/login", logincontroller);
export default router;
