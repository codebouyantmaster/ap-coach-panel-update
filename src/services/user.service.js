import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://laravel-tst.apolloprotocol.online/api/';
const usersID= localStorage.getItem('userID');
class UserService {
  
  coachRequest() {
    return axios.get(API_URL + 'coachRequest',{ headers: authHeader() });
  }

  getUsers() {
    return axios.get(API_URL + 'users',{params: { coach_id:usersID}, headers: authHeader() });
  }

  CurrentUserInfo() {
     axios.get(API_URL + 'coach').then((response) => {
      
      localStorage.setItem('userIn',JSON.stringify(response.data.data.data));
    });
  }

  AcceptRequest(id){
    return axios.get(API_URL + 'coachRequest/accept/'+id,{headers: authHeader() });
  }

  
}

export default new UserService();