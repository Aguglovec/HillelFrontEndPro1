import { useCallback, useEffect, useState } from 'react';

import { getUserDetails } from '../services/usersService';

export function useUserDetails(id) {
    const [user, setUser] = useState({});

    const fetchUser = useCallback(
        () => getUserDetails(id).then(setUser),
        [id, getUserDetails, setUser],
    );

    useEffect(() => {
        fetchUser();
    }, [id, fetchUser]);

    return { user, fetchUser };
}
