import axios from 'axios';

const baseUrl = 'https://localhost:44370/api/users';

class UserService {

    getUsers(){
        return axios.get(baseUrl);
    }

    getUser(id){
        const url = `${baseUrl}/${id}`;
        return axios.get(url);
    }
}

export default UserService;
