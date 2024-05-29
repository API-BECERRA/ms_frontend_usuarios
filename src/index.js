 import server from "./server";

 server.listen(server.get("port"), () => {
    console.log("Frotend en el puerto http://localhost:" + server.get("port"));
 })