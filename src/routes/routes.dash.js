import { Router } from "express";

const rutaDash = Router();

rutaDash.get("/", (req,res) => {
    res.send("<h1>Hola Dash</h1>")
})
rutaDash.get("/user", (req,res) => {
    res.send("<h1>User Dash</h1>")
})

export default rutaDash;