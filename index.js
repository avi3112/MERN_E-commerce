import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

const app = express();
//env
dotenv.config();

//database connect
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

// API
app.get("/", (req, res) => {
  res.send("<h1>welcome to Avinabh E-commerce app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
