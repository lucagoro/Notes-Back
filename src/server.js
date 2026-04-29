import dotenv from "dotenv"
import express from "express"
import router from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import cors from "cors"


const app = express()
app.use(cors({
    origin: ["https://note-front-ten.vercel.app/", "http://localhost:5173"]
}))
app.use(express.json())
app.use("/api/notes", router)

const PORT = process.env.PORT || 3000

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor levantado en el puerto ${PORT}`)
    })
})
