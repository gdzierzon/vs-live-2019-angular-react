import React from 'react';
import Header from './components/header/header';
import {Route} from 'react-router-dom';
import Home from './components/home/home';
import './App.css';
import Users from "./components/users/users";
import Categories from "./components/categories/categories";
import CategoryInsert from "./components/categories/category-insert";
import Expenses from "./components/expenses/expenses";
import ExpenseInsert from "./components/expenses/expense-insert";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
          <Route exact={true} path="/" component={Home}/>
          <Route path="/users" component={Users}/>
          <Route exact={true} path="/categories" component={Categories}/>
          <Route path="/categories/insert" component={CategoryInsert}/>
          <Route exact={true} path="/expenses" component={Expenses}/>
          <Route path="/expenses/insert" component={ExpenseInsert}/>
      </div>
    </div>
  );
}

export default App;
