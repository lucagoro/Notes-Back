import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI)
        const dbURI = process.env.MONGODB_URI
        mongoose.connect(dbURI)
        console.log("MongoDB conectado correctamente")
    } catch (error) {
        console.error("Error al conectar con MongoDB ", error)
        process.exit(1)
    }
}