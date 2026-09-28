import express from "express"
import cors from "cors"

const app = express()
const PORT = 3000

app.use(cors(
    {
        origin: "http://localhost:5173"
    }
))

app.use(express.json())

app.get("/", () => {
    console.log("backend working")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})