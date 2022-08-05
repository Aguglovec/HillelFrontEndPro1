import React from 'react';
import UsersListItem from './UsersListItem';

function UsersList({ list }) {
    return (
        <ul>
            {list.map((user) => (
                <UsersListItem key={user.id} user={user} />
            ))}
        </ul>
    );
}

export default UsersList;
