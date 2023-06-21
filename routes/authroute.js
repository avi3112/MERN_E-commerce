import express from "express";
import {
  registercontroller,
  logincontroller,
  testcontroller,
} from "../controller/authController.js";
import { isAdmin, requireSignIN } from "../middlewares/authmiddleware.js";
// Router object
const router = express.Router();

// routing

//Register || method post

router.post("/register", registercontroller);
router.post("/login", logincontroller);
router.get("/test", requireSignIN, isAdmin, testcontroller);
export default router;
