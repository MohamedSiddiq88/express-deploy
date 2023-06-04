import express from "express";
import dotenv from "dotenv"
import { studentsRouter } from "./Routers/Students.js";

// configure the envirenment
dotenv.config()

//initialize express server framework
const PORT=process.env.PORT;
const app=express();

//middleware
app.use(express.json());

//students routers
app.use("/students",studentsRouter)



//listen to a server
app.listen(PORT,()=>console.log( `server started in localhost:9090`));