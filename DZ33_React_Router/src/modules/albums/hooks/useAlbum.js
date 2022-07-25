import { useEffect } from 'react';

import { getAlbumDetails } from '../services/albumsService';
import useAsync from '../../common/hooks/useAsync';

export default function useAlbum(id) {
    const { run, ...state } = useAsync(getAlbumDetails, {});

    useEffect(() => {
        run(id);
    }, [id]);

    return {...state, refreshDetails: run };
}
