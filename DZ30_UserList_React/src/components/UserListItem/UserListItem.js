import './UserListItem.css';

import React, { Component } from 'react';

export default class UserListItem extends Component {
    render() {
        return (

            <tr className='task-item u-full-width'>
                <td className="userName">{this.props.item.name}</td>
                <td className="userSurname">{this.props.item.surname}</td>
                <td className="userEmail">{this.props.item.email}</td>
                <td className="userAction">
                    <button type="button" className="user-edit edit-btn" onClick={this.onEditClick}>Edit</button>
                    <button type="button" className="delete-btn" onClick={this.onDeleteItemClick}>X</button>
                </td>
            </tr>

        );
    }

    onEditClick = () => {
        this.props.onToggle(this.props.item.id);
    };

    onDeleteItemClick = (e) => {
        e.stopPropagation();

        this.props.onRemove(this.props.item.id);
    };
}
