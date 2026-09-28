import { Route, Routes } from "react-router-dom"
import { Login, SignUp } from "../pages/auth"

const Auth = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
    )
}

export default Auth