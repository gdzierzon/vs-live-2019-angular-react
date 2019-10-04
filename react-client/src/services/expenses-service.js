import axios from 'axios';

const baseUrl = 'https://localhost:44370/api/expenses';

class ExpenseService {

    getExpensesPage(page, size){
        const url = `${baseUrl}/page/?page=${page}&size=${size}`;
        return axios.get(url);
    }

    getExpenses(){
        return axios.get(baseUrl);
    }

    addExpense(expense){
        return axios.post(baseUrl, expense);
    }
}

export default ExpenseService;
