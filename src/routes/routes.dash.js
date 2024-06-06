import { Router } from "express";
import { presentacion } from "../controllers/controller.dash";

const rutaDash = Router();

rutaDash.get("/", presentacion);
rutaDash.get("/user", (req,res) => {
    res.send("<h1>User Dash</h1>")
})

export default rutaDash;