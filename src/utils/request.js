import axios from "axios";

const service = axios.create({
    // baseURL:process.env.BASE_API,
    baseURL: 'http://localhost:9090',
    timeout: 10000 //请求超时时间
})

service.interceptors.request.use(
    config => {
        // config.headers.token = localStorage.getItem("token")
        return config
    },
    error => {
        return Promise.reject(error)
    }
)



service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default service