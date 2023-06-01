import useAxiosAuthorized from "./hooks/useAxiosAuthorized";
import axios, { AxiosInstance, AxiosProgressEvent } from "axios";
import CreateUserData from "./types/signupTypes";
import LoginData from "./types/loginType";


const APIInstance: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

const AuthorizedAPIInstance: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: { 'Content-Type': 'application/json'},
    withCredentials: true
})


// AuthorizedAPIInstance.interceptors.request.use((config) => {
// 	config.headers.Authorization = localStorage.getItem('accessToken')
// 	return config
// })

const APIMethods = {
    auth: {
        login: (data: LoginData) => APIInstance.post('/auth/login', data),
        signUp : (data: CreateUserData) => APIInstance.post('/auth/signup', data),
        refresh : () => APIInstance.post('/auth/refresh'),
    },
    dashboard:{
        dashboard : () => AuthorizedAPIInstance.get('/dashboard'),
    }
}

export  {APIMethods, AuthorizedAPIInstance};