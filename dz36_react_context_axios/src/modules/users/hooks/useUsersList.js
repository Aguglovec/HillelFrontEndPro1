import { useCallback, useEffect, useState } from 'react';

import { getUsersList } from '../services/usersService';

export function useUsersList() {
    const [list, setList] = useState([]);

    const fetchList = useCallback(
        () => getUsersList().then(setList),
        [getUsersList, setList],
    );

    useEffect(() => {
        fetchList();
    }, [fetchList]);

    return { list, fetchList };
}
