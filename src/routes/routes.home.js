import { Router } from "express";
import { contact, home } from "../controllers/controller.home";

const rutaHome = Router();

rutaHome.get("/", home);
rutaHome.get("/contact", contact);

export default rutaHome;