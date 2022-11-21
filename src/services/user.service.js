import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.API_URL + 'users/';

class UserService {
    getUser(id) {
        return axios.get(API_URL + id, { headers: authHeader() });
    }

    getUserByLoginOrEmail(loe) {
        return axios.get(API_URL + 'logOrEmail/' + loe, { headers: authHeader() });
    }

    getChilds(parrain) {
        return axios.get(API_URL + 'parrain/' + parrain, { headers: authHeader() });
    }

    getAllUser() {
        return axios.get(API_URL, { headers: authHeader() });
    }
}

export default new UserService();
