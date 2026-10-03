import { Route, Routes } from "react-router-dom"
import { Login, SignUp } from "../pages/auth"

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
    )
}

export default AuthRoutes