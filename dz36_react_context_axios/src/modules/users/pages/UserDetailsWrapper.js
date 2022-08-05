import React from 'react';
import UserDetailsPage from './UserDetailsPage';
import UserProvider from '../providers/UserProvider';

function UserDetailsWrapper() {
    return (
        <UserProvider>
            <UserDetailsPage />
        </UserProvider>
    );
}

export default UserDetailsWrapper;
