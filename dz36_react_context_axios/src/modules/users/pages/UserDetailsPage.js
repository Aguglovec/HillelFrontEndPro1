import { Outlet } from 'react-router-dom';
import React from 'react';
import useUser from '../hooks/useUser';

function UserDetailsPage() {
    const user = useUser();

    return (
        <div>
            <h2>User Details</h2>
            <strong>Name : </strong>{user.name}
            <Outlet />
        </div>
    );
}

export default UserDetailsPage;
