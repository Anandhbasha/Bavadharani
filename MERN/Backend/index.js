import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./config/db.js";
import router from "./Router/ProductRouter.js";
const app  = express();
const PORT = process.env.PORT || 4000;
app.use(cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/ecom",router)
db("mongodb://localhost:27017/Ecommerce");

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)}
)