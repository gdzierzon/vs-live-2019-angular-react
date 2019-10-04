import React, {Component} from 'react';
import UserService from '../../services/user-service';

const userService = new UserService;

class Users extends Component {

    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        userService.getUsers()
            .then(results => {
                return results.data;
            }).then(data => {
                let users = data.map((user) => {
                    return(
                        <tr>
                            <td>{user.userId}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                        </tr>
                    )
                });
                this.setState({users:users});
            })
    }

    render() {
        return (
            <div>
                <h2>Users</h2>

                <table className="table table-hover table-margin">
                    <thead>
                    <tr className="table-dark">
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Users;
