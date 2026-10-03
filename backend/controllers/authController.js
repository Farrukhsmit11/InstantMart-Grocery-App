import jwt from "jsonwebtoken"
import { User } from "../models/User.js"

export const login = async (request, response) => {
    try {
        const { email, password } = request.body

        if (!email || !password) {
            response.status(400).send("Email and password required")
            return
        }

        const user = await User.findOne({ email })
        if (!user) {
            response.status(400).send("user not found")
            return
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET
        )

        response.status(200).json({ message: "Login Sucessfull", user })
    } catch (error) {

    }
}