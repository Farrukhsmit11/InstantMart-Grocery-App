import { Formik } from "formik"
import { loginSchema } from "./Validation"
import { Form as AntForm, Button } from "antd"
import FormInput from "../formInput/FormInput"
import "./LoginForm.css"

const LoginForm = () => {

    const form = AntForm.useForm();

    const initialValues = {
        email: "",
        password: ""
    }

    return (
        <div className='auth-container'>
            <div className='auth-header'>
                <h1>Sign in to your account</h1>
                <p>Dont have an account? <a href="/register">Sign up</a></p>
            </div>

            <Formik
                validationSchema={loginSchema}
                initialValues={initialValues}
            >
                {({
                    handleSubmit,
                    handleBlur,
                    handleChange,
                    errors,
                    touched,
                }) => (
                    <AntForm
                        form={form}
                        layout="vertical"
                    >
                        <AntForm.Item>
                            <FormInput
                                name="email"
                                placeholder="Enter your name"
                                type="email"
                                label="email"
                            ></FormInput>
                        </AntForm.Item>

                        <AntForm.Item>
                            <FormInput
                                name="password"
                                placeholder="Enter your name"
                                type="password"
                                label="password"

                            ></FormInput>
                        </AntForm.Item>

                        <Button>Login</Button>
                    </AntForm>
                )
                }
            </Formik>
        </div>
    )
}

export default LoginForm