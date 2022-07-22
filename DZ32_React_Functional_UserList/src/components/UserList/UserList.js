import './UserList.css';

import React from 'react';

import UserListItem from '../UserListItem/UserListItem';

export default function UserList ({list, onEdit, onRemove}) {
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
            {list.map((item) => (
                    <UserListItem
                        key={item.id}
                        user={item}
                        onEdit={onEdit}
                        onRemove={onRemove}
                    />
                ))}
            </tbody>
            </table>
        </>

        );

}
