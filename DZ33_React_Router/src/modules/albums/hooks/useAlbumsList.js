import { useEffect } from 'react';

import { getAlbumsList } from '../services/albumsService';
import useAsync from '../../common/hooks/useAsync';


export default function useAlbumsList() {
    const { run, ...state } = useAsync(getAlbumsList, []);

    useEffect(() => {
        run();
        // eslint-disable-next-line
    }, []);

    return { ...state, fetchList: run };
}
