import { useCallback, useEffect, useState } from 'react';

import { getAlbumDetails } from '../services/albumsService';

export function useAlbumDetails(id) {
    const [album, setAlbum] = useState({});

    const fetchAlbum = useCallback(
        () => getAlbumDetails(id).then(setAlbum),
        [id, getAlbumDetails, setAlbum],
    );

    useEffect(() => {
        fetchAlbum();
    }, [id, fetchAlbum]);

    return { album, fetchAlbum };
}
