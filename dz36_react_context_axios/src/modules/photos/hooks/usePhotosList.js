import { useCallback, useEffect, useState } from 'react';
import useAlbum from '../../albums/hooks/useAlbum';

import { getPhotos } from '../services/PhotosService';

export default function usePhotosList() {
    const [list, setList] = useState([]);
    const album = useAlbum();

    const fetchList = useCallback(
        () => getPhotos(String(album.id)).then(setList),
        [album.id, getPhotos, setList],
    );

    useEffect(() => {
        fetchList();
    }, [fetchList]);

    return { list, fetchList };
}
