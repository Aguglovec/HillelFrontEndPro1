import './TodoList.css';

import React, { Component } from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

export default class TodoList extends Component {
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
                    <TodoListItem
                        key={item.id}
                        item={item}
                        onToggle={this.props.onToggle}
                        onRemove={this.props.onRemove}
                    />
                ))}
            </tbody>
            </table>
        </>

        );
    }
}
