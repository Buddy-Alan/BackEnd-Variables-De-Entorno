import { fork } from "child_process";
import { Router } from "express";
const random = Router()


random.get("/api/randoms", (req, res) => {
    const child = fork('./child/child.js')
    let cantidadDeDatos = req.query.cant
    if (cantidadDeDatos == undefined || isNaN(cantidadDeDatos) || cantidadDeDatos == "") {
        cantidadDeDatos = 100000000
    }
    child.on("message", (childMsg) => {
        if (childMsg === "Listo") {
            child.send(cantidadDeDatos)
        } else {
            res.json({ resultado: childMsg })
        }
    })

})
export default random