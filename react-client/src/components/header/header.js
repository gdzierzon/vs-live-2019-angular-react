import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <ul className="navbar-nav mr-auto">
                    <li><Link to="/" className="nav-link nav-item r-item">Home</Link></li>
                    <li><Link to="/users" className="nav-link nav-item r-item">Users</Link></li>
                    <li><Link to="/categories" className="nav-link nav-item r-item">Categories</Link></li>
                    <li><Link to="/expenses" className="nav-link nav-item r-item">Expenses</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
