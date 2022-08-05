import { useCallback, useEffect, useState } from 'react';
import useUser from '../../users/hooks/useUser';

import { getAlbumsList } from '../services/albumsService';

export default function useAlbumsList() {
    const [list, setList] = useState([]);
    const user = useUser();

    const fetchList = useCallback(
        () => getAlbumsList(user.id).then(setList),
        [user.id, getAlbumsList, setList],
    );

    useEffect(() => {
        fetchList();
    }, [fetchList]);

    return { list, fetchList };
}
