import axios from 'axios';
import config from '../config';
import base64 from 'base-64'
import utf8 from 'utf8'

const API_URL = config.API_URL + 'users/';

class AuthService {
    login(user) {
        const auth = utf8.encode(base64.encode(user.username + ':' + user.password));
        return axios
            .get(API_URL + 'login', {
                headers: { Authorization: 'Basic ' + auth }
            })
            .then(response => {
                if (response.data.userToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        const auth = utf8.encode(base64.encode(user.username + ':' + user.password));
        return axios.post(API_URL + 'news', {
            nom: user.username,
            prenom: user.email,
            email: user.email,
            date_naissance: user.date_naissance,
            telephone: user.telephone,
            role: user.role
        }, {
            headers: { Authorization: 'Basic ' + auth }
        });
    }
}

export default new AuthService();
