import { ObjectId } from "bson";
import {client} from "../db.js";


export function getAllStudents(req){

    return client
    .db("b45wd")
    .collection("students")
    .find(req.query)
    .toArray()
}

export function getStudentsById(id){

    return client
    .db("b45wd")
    .collection("students")
    .findOne({_id: new ObjectId(id)})
}

export function addStudentsData(data){

    return client
    .db("b45wd")
    .collection("students")
    .insertOne(data)
}

export function updateStudentData(id, updatedData){
    return client
    .db("b45wd")
    .collection("students")
    .findOneAndUpdate({_id: new ObjectId(id)}, {$set:updatedData});
}

export function deleteStudentData(id){
    return client
    .db("b45wd")
    .collection("students")
    .deleteOne({_id: new ObjectId(id)});
}

