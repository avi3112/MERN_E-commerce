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

// protechted route
router.get('/user-auth',requireSignIN,(req,res)=>{
  res.status(200).send({ok:true})
})
export default router;
