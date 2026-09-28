import axios from "axios"
import { TOKEN } from "./constant"

const BASE_URL = "http://localhost:3000"

const setupInterceptor = async () => {
    axios.defaults.baseURL = BASE_URL

    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem(TOKEN)
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        },
        (error) => {
            Promise.reject(error)
        }
    )

    axios.interceptors.response.use(
        function (response) {
            return response
        }

    )
}

export default setupInterceptor