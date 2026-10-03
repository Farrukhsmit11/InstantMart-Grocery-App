import jwt from "jsonwebtoken"
import { User } from "../models/User.js"

export const authMiddleware = async (request, response) => {
    try {
        const token = request.headers.authorization(' ')[1]

        if (!token) {
            response.status(400).send({ message: 'token is required' })
            return
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const user = await User.findById(decoded.id).select("-password")

        if (!user) {
            response.status(400).send({ message: "user not found" })
            return
        }

        response.status(200).json({ message: "user founded sucessfully", user })
    } catch (error) {

    }
}