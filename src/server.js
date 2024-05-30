import express from "express";
import { config } from "dotenv";
import ruta from "./routes";
import ejs from "ejs";
import path from "path"
config();

const server = express();

server.set("port", process.env.PORT || 3000);
server.set('view engine', 'ejs')
server.set('views', __dirname+'./views')

server.set('views', path.join(__dirname,'views')); //el path.join es para que indiferentemente del sistema operativo sirva la ruta

server.use(express.static(path.join(__dirname,'public')))


// console.log(__dirname); para verificar la ruta que diga src

server.use("/", ruta);

//error 404
server.use("/", (req, res) =>{
    res.render("views.error404.ejs")
})



export default server;