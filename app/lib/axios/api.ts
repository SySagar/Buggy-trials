import useAxiosAuthorized from "./hooks/useAxiosAuthorized";
import axios, { AxiosInstance, AxiosProgressEvent } from "axios";
import CreateUserData from "./types/signupTypes";
import LoginData from "./types/loginType";
import Cookies from "js-cookie";
import refresh  from "./hooks/useRefreshToken";

const APIInstance: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

const AuthorizedAPIInstance: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: { 'Content-Type': 'application/json'},
    withCredentials: true,
})


AuthorizedAPIInstance.interceptors.request.use((config) => {
	config.headers.Authorization = Cookies.get('accessToken');
	return config
})

AuthorizedAPIInstance.interceptors.response.use(
    response => response,
    async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
            prevRequest.sent = true;
            const newAccessToken = await refresh();
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return AuthorizedAPIInstance(prevRequest);
        }
        return Promise.reject(error);
    });

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