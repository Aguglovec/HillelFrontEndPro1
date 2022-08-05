import React from 'react';
import UsersList from '../components/UsersList';
import { useUsersList } from '../hooks/useUsersList';

function UsersListPage() {
    const { list } = useUsersList();

    return (
        <div>
            <h3>Users list page</h3>
            <UsersList list={list} />
        </div>
    );
}

export default UsersListPage;
