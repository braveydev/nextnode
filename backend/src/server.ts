import { config } from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

config({ quiet: true });

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Next.js address
    credentials: true, // Crucial for cookies
  })
);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// Route Handlers
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server spinning on port ${PORT}`));
