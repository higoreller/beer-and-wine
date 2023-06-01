import express from "express";
import userRoutes from "./../routes/userRoutes.js";
import helmet from "helmet";
import cors from "cors";
import connectDB from "../config/db.js";
import "dotenv/config";

connectDB();
const app = express();
app.set("trust proxy", 1);
app.use(express.json({ limit: "4mb" }));
app.use(helmet());
app.use(cors());

app.use("/api/user/", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
