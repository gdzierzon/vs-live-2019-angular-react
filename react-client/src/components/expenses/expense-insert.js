import React, {Component} from 'react';
import ExpenseService from "../../services/expenses-service";
import UserService from "../../services/user-service";
import CategoryService from "../../services/categories-service";
import CategorySelectList from "../categories/category-select-list";
import UserSelectList from "../users/users-select-list";

const expenseService = new ExpenseService();
const userService = new UserService();
const categoryService = new CategoryService();

class ExpenseInsert extends Component {

    constructor(props){
        super(props);

        const today = new Date();
        let dd = '' + today.getDate();
        if(dd.length === 1) dd = '0' + dd;
        let mm = '' + (today.getMonth()+1);
        if(mm.length === 1) mm = '0' + mm;
        let yyyy = '' + today.getFullYear();

        let expense = {
            categoryId: 1,
            userId: 1,
            title: '',
            date: `${yyyy}-${mm}-${dd}`,
            description: '',
            amount: 0,
            vendor: '',
            isBusinessExpense: false
        };

        this.state = {
            redirect: false,
            expense: expense,
            users: [],
            categories: []
        }
    }

    componentDidMount() {
        this.loadUsers();
    }

    handleCategoryChange = (event) =>
    {
        const categoryId = event.target.value;
        this.setState((state) =>
        {
            const expense = state.expense;
            expense.categoryId = categoryId;

            return {
                ...state,
                expense: expense
            }
        });
    }

    handleUserChange = (event) =>
    {
        const userId = event.target.value;
        this.setState((state) =>
        {
            const expense = state.expense;
            expense.userId = userId;

            return {
                ...state,
                expense: expense
            }
        });
    }

    handleTitleChange = (event) =>
    {
        const title = event.target.value;
        this.setState((state) =>
        {
            const expense = state.expense;
            expense.title = title;

            return {
                ...state,
                expense: expense
            }
        });
    }

    handleDateChange = (event) =>
    {
        const date = event.target.value;
        this.setState((state) =>
        {
            const expense = state.expense;
            expense.date = date;

            return {
                ...state,
                expense: expense
            }
        });
    }

    handleDescriptionChange = (event) =>
    {
        const description = event.target.value;
        this.setState((state) =>
        {
            const expense = state.expense;
            expense.description = description;

            return {
                ...state,
                expense: expense
            }
        });
    }

    handleAmountChange = (event) =>
    {
        const amount = event.target.value;
        this.setState((state) =>
        {
            const expense = state.expense;
            expense.amount = amount;

            return {
                ...state,
                expense: expense
            }
        });
    }

    loadUsers = () => {
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

    loadCategories = () => {
        categoryService.getCategories()
            .then(results => {
                this.setState(state => {
                    return {
                        ...state,
                        categories:results.data
                    }
                });
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const expense = this.state.expense;

        expenseService.addExpense(expense)
            .then(response => {
                this.props.history.push('/expenses');

                this.setState((state) =>
                {
                    return {
                        ...state,
                        redirect: true
                    }
                })
            })
    }

    render() {

        // if(this.state.redirect === true)
        // {
        //     return (
        //         <Redirect
        //     )
        // }

        const expense = this.state.expense;
        return (
            <div>
                <h2>Add Expense</h2>

                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="form-group row">
                            <label htmlFor="user" className="col-sm-2 col-form-label">User</label>
                            <div className="col-sm-10">
                                <UserSelectList users={this.state.users}
                                                onSelectionChange={this.handleUserChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Category</label>
                            <div className="col-sm-10">
                              <CategorySelectList categories={this.state.categories}
                                                  onSelectionChange={this.handleCategoryChange}
                              />
                            </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Expense Name</label>
                          <div className="col-sm-10">
                            <input type="text"
                                   onChange={this.handleTitleChange}
                                   className="form-control"
                                   id="title"
                                   name="title"
                                   value={expense.title}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Amount</label>
                          <div className="col-sm-10">
                            <input type="text"
                                   onChange={this.handleAmountChange}
                                   className="form-control"
                                   id="amount"
                                   name="amount"
                                   value={expense.amount}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Date</label>
                          <div className="col-sm-10">
                            <input type="date"
                                   onChange={this.handleDateChange}
                                   className="form-control"
                                   id="date"
                                   name="date"
                                   value={expense.date}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Description</label>
                          <div className="col-sm-10">
                            <input type="text"
                                   onChange={this.handleDescriptionChange}
                                   className="form-control"
                                   id="description"
                                   name="description"
                                   value={expense.description}
                            />
                          </div>
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default ExpenseInsert;
