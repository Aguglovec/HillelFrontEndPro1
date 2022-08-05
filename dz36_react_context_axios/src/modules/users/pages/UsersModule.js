import { Link, Outlet } from 'react-router-dom';
import React from 'react';

function UsersModule() {
    return (
        <div>
            <Link to="/users">Go to all users</Link>
            <Outlet />
        </div>
    );
}

export default UsersModule;
