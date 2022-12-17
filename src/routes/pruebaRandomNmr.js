import { Router } from "express";
import { fork } from "child_process";
const prueba = Router()

prueba.get("/api/randoms/prueba", (req, res) => {
    const child = fork('./child/child.js')
    child.on("message", (childMsg) => {
        if (childMsg === "Listo") {
            child.send(500000000)
        } else {
            res.json({ resultado: childMsg })
        }
    })
})

export default prueba