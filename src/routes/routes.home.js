import { Router } from "express";
import { contact, home, login, register } from "../controllers/controller.home";

const rutaHome = Router();

rutaHome.get("/", home);
rutaHome.get("/contact", contact);
rutaHome.get("/login", login);
rutaHome.get("/register", register);

export default rutaHome;