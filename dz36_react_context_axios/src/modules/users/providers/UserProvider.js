import React, { createContext } from 'react';

import { useParams } from 'react-router-dom';
import { useUserDetails } from '../hooks/userUserDetails';

export const UserContext = createContext(null);

function UserProvider({ children }) {
    const { userId } = useParams();
    const { user } = useUserDetails(userId);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;
