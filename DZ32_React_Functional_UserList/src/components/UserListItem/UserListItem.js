import './UserListItem.css';

import React from 'react';

export default function UserListItem ({user, onEdit, onRemove}) {

    function onEditClick (e) {
        e.stopPropagation();
        onEdit(user.id);
    }

    function onDeleteClick (e) {
        e.stopPropagation();
        onRemove(user.id);
    }

    return (

        <tr className='task-item u-full-width'>
            <td className="userName">{user.name}</td>
            <td className="userSurname">{user.surname}</td>
            <td className="userEmail">{user.email}</td>
            <td className="userAction">
                <button type="button" className="user-edit edit-btn" onClick={onEditClick}>Edit</button>
                <button type="button" className="delete-btn" onClick={onDeleteClick}>X</button>
            </td>
        </tr>

    );
    }

