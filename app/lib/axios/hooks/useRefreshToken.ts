import {APIMethods} from '../api';

const useRefreshToken = async ()=>{
    const response = await APIMethods.auth.refresh() 
    localStorage.setItem('accessToken', response.data.accessToken)
}

export default useRefreshToken;