import React, {Component} from 'react';
import ExpenseService from "../../services/expenses-service";
import CurrencyFormat from 'react-currency-format';
import Moment from 'react-moment';
import UserService from "../../services/user-service";
import CategoryService from "../../services/categories-service";
import {Link} from "react-router-dom";

const expenseService = new ExpenseService();
const userService = new UserService();
const categoryService = new CategoryService();

class Expenses extends Component {

    constructor(props){
        super(props);

        this.state = {
            page: 1,
            size: 5,
            expenses: [],
            users: [],
            categories: []
        }
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers(){
        userService.getUsers()
            .then(results => {
                this.setState(state => {
                    return {
                        ...state,
                        users: results.data
                    }
                });
                this.loadCategories();
            });

    }

    loadCategories(){
        categoryService.getCategories()
            .then(results => {
                this.setState(state => {
                    return {
                        ...state,
                        categories:results.data
                    }
                });
                this.loadExpenses();
            });
    }

    loadExpenses() {

        expenseService.getExpenses()
            .then(results => {
                let expenses = results.data;
                console.log(this.state.categories);
                expenses.forEach(expense => {
                    expense.category = this.state.categories.find(cat => cat.categoryId === expense.categoryId);
                    expense.user = this.state.users.find(user => user.userId === expense.userId);
                })
                return expenses;
            }).then(data => {
                let expenses = data.map((expense) => {
                return(
                        <tr>
                            <td>{expense.expenseId}</td>
                            <td>{expense.user.firstName}</td>
                            <td>{expense.category.title}</td>
                            <td>{expense.title}</td>
                            <td><CurrencyFormat className="textDisplay" value={expense.amount} displayType={Text} thousandSeparator={true} prefix={'$'}  /></td>
                            <td><Moment format="MM/DD/YYYY">{expense.date}</Moment></td>
                        </tr>
                    )
                });
                this.setState((state) => {
                    return {
                        ...state,
                        expenses: expenses
                    }
                });
            });
    }

    render() {
        return (
            <div>
                <h2>Expenses</h2>
                <Link to="/expenses/insert" className="btn btn-success">Add</Link>

                <table className="table table-hover table-margin">
                    <thead>
                    <tr className="table-dark">
                        <th>Id</th>
                        <th>User</th>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.expenses}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Expenses;
