import { Router } from "express";

const rutaHome = Router();

rutaHome.get("/", (req,res) => {
    res.send("<h1>Hola</h1>")
})
rutaHome.get("/contact", (req,res) => {
    res.send("<h1>Contact</h1>")
})

export default rutaHome;