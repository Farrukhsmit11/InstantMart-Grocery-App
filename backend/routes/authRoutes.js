import express from "express"
import { login, signUp } from "../controllers/authController"

const router = express.Router()

router.route("/login").post(login)
