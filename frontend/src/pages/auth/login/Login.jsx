import heroBgImg from "../../../assets/hero_bg.jpeg.svg"
import LoginForm from "../../../components/loginForm/LoginForm"

const Login = () => {
    return (
        <div className="auth-parent">
            <div className="auth-sub-parent">
                <div className="auth-left">
                    <img src={heroBgImg} alt="logo" />
                </div>
                <div className="auth-right">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login