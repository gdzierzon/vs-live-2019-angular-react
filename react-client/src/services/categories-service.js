import axios from 'axios';

const baseUrl = 'https://localhost:44370/api/categories';

class CategoryService {

    getCategories(){
        return axios.get(baseUrl);
    }

    getCategory(id) {
        const url = `${baseUrl}/${id}`;
        return axios.get(url);
    }

    addCategory(category){
        return axios.post(baseUrl, category);
    }
}

export default CategoryService;
