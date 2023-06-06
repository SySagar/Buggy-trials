import { useEffect } from "react";
import { AuthorizedAPIInstance } from "../api";
import refresh  from "./useRefreshToken";
import Cookies from "js-cookie";

const useAxiosAuthorized = () => {
  useEffect(() => {
   const requestIntercept =  AuthorizedAPIInstance.interceptors.request.use((config: any) => {
      config.headers.Authorization = Cookies.get('accessToken');
      return config;
    });

    const responseIntercept = AuthorizedAPIInstance.interceptors.response.use(
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
        }
    );

    return () => {
        AuthorizedAPIInstance.interceptors.request.eject(requestIntercept);
        AuthorizedAPIInstance.interceptors.response.eject(responseIntercept);
    }

  }, [refresh]);

  return AuthorizedAPIInstance;
};

export default useAxiosAuthorized;
