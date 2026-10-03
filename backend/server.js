import "dotenv/config"
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"


const app = express()
const PORT = 3000

app.use(cors(
    {
        origin: "http://localhost:5173"
    }
))

app.use(express.json())

connectDB()

app.get("/", () => {
    console.log("backend working")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})