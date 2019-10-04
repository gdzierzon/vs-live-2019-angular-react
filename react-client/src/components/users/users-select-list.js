import React from "react";

const UserSelectList =  props => {
    let items = [];
    props.users.forEach( user => {
        items.push(<option key={user.userId} value={user.userId}>{user.firstName} {user.lastName}</option>);
    });

    return (
        <select onChange={props.onSelectionChange} class="form-control" id="userId" name="userId">
            {items}
        </select>
    );
}

export default UserSelectList;
