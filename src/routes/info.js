import { Router } from "express";


const info = Router()


info.get("/info", (req, res) => {
    res.json({
        "Argumentos de entrada": process.argv,
        "S.O.": process.platform,
        "Version de NODE": process.version,
        "Memoria total Reservada": process.memoryUsage().rss,
        "Path de ejecucion": process.execPath,
        "Process ID": process.pid,
        "Ubicacion del proyecto": process.env.INIT_CWD,
    })
})


export default info
