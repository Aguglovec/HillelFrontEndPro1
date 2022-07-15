import './UserList.css';

import React, { Component } from 'react';

import UserListItem from '../UserListItem/UserListItem';

export default class UserList extends Component {
    render() {
        return (
        <> 
            <h1>User List</h1>
            <table className="box u-full-width">
            <thead id="userListHead">
                <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody id="userList" className="task-list ">
            {this.props.list.map((item) => (
                    <UserListItem
                        key={item.id}
                        item={item}
                        onEdit={this.props.onEdit}
                        onRemove={this.props.onRemove}
                    />
                ))}
            </tbody>
            </table>
        </>

        );
    }
}
