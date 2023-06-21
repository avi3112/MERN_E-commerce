import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();
// rest api

app.get("/", (req, res) => {
  res.send("<h1>welcome to Avinabh E-commerce app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
