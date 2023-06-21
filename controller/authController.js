import { hashPassword } from "../helper/authhelper.js";
import userModel from "../models/userModel.js";

export const registercontroller = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // validations
    if (!name) {
      return res.send({ error: "pagal is required" });
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!phone) {
      return res.send({ error: "phone is required" });
    }
    if (!address) {
      return res.send({ error: "address is required" });
    }

    //check user
    const exitingUser = await userModel.findOne({ email });

    //exiting user
    if (exitingUser) {
      return res.status(200).send({
        success: true.valueOf,
        message: "Already register user",
      });
    }
    // register the actual user
    const hashedpassword = await hashPassword(password);

    //save user

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedpassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "user register succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in register",
      error,
    });
  }
};
