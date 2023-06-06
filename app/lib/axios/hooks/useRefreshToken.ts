import {APIMethods} from '../api';
import Cookies from 'js-cookie'

const useRefreshToken = async ()=>{
    const response = await APIMethods.auth.refresh() 
    localStorage.setItem('accessToken', response.data.accessToken)
    Cookies.set('accessToken', response.data.accessToken)
}

export default useRefreshToken;