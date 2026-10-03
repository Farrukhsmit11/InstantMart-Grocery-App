import * as Yup from "yup"

export const loginSchema = Yup.object({
    email: { type: String, required: true },
    password: { type: String, required: true }
})