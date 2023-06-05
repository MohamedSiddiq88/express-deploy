import express from "express";
import { addStudentsData, deleteStudentData, getAllStudents, getStudentsById, updateStudentData } from "../Controllers/students.js";

const router = express.Router();

router.get("/all",async (req,res)=>{
    try {
     if(req.query.experience){
         req.query.experience = parseInt(req.query.experience);
     }
     if(req.query.taskComplition){
         req.query.taskComplition = parseInt(req.query.taskComplition);
     }
     const students = await getAllStudents(req);
     if(students.length<=0){
         res.status(400).send("user not found");
         return
     }
      res.status(200).json(students)
    } catch (error) {
      res.status(500).json("internal server error")
    }
 })

 router.get("/:id",async (req,res)=>{
    try {
     const {id}=req.params;
     const students = await getStudentsById(id);
     if(!students){
         res.status(400).send("user not found");
         return
     }
      res.status(200).json({data:students})
    } catch (error) {
      res.status(500).json("internal server error")
    }
 })

 router.post("/add",async(req,res)=>{
    try {
        const newStudent=req.body;
        // console.log(newStudent);
        if(!newStudent){
            return res.status(400).send({data:"No details provided"});
        }
        const result= await addStudentsData(newStudent);
        res.status(200).send({data:{result:result,message:"New Student added successfully"}});
    } catch (error) {
        res.status(500).send({data:"Internal server Error"});
    }
 })

 router.put("/edit/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const updatedData=req.body;
        if(!id || !updatedData){
            return res.status(400).json({data:"No details provided"});
        }
        const result =await updateStudentData(id,updatedData);
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({data:"Internal server Error"});
    }
 })

 router.delete("/delete/:id",async(req,res)=>{
    try {
        const {id}=req.params;
       
        if(!id ){
            return res.status(400).json({data:"No details provided"});
        }
        const result =await deleteStudentData(id);
        res.status(200).json({data:{result:result,message:"Deleted successfully"}})
        

    } catch (error) {
        res.status(500).json({data:"Internal server Error"});
    }
 })

 export const studentsRouter = router;