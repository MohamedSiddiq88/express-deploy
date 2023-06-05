import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { studentsRouter } from "./Routers/Students.js";

// Configure the environment
dotenv.config();

// Initialize express server framework
const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your React app's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })); // Enable CORS
  app.use(express.json());


// Students router
app.use("/students", studentsRouter);

// Listen to the server
app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
