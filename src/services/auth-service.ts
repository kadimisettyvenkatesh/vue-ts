import http from '../plugins/axios-api';

class userService {
    loginUser(payload: any) {
        let queryParams = "";
        queryParams = Object.entries(payload).map(([key, value]) => `${key}=${value}`).join('&');
        return http.get(`/users?${queryParams}`);
    }

    signupUser(payload: any) {
        return http.post('/users', payload)
    }
}

export default new userService();
