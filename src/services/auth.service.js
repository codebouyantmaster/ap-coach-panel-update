import axios from 'axios';

const API_URL = 'https://laravel-tst.apolloprotocol.online/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'coach/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
     // console.log( JSON.stringify(response.data.data.userInfo.id));
        if (response.data.data.access_token) {
          localStorage.setItem('userInfo', JSON.stringify(response.data.data));
          localStorage.setItem('userID', JSON.stringify(response.data.data.userInfo.id));
          
          axios.get(API_URL + 'coach').then((response) => {
               
            if(response.data.data.data[0].id == localStorage.getItem('userID')){
 console.log('ff');
            }
            
          });
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userID');
    localStorage.removeItem('userIn');
   
  }

  
}

export default new AuthService();