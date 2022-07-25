import React, { useEffect, useState } from 'react';

import Loader from '../../common/components/Loader';
import AlbumsListItem from './AlbumsListItem';
import { getAlbumsList } from '../services/albumsService';
import useAlbumsList from '../hooks/useAlbumsList';

//
function AlbumsList() {
    const { data: list, isLoaded, error, fetchList } = useAlbumsList();



    return (
        <>
            {error && <div className="error">{error.toString()}</div>}

            {!isLoaded && <Loader />}

            <ul>
                {list.map((album) => (
                    <AlbumsListItem key={album.id} album={album} />
                ))}
            </ul>
        </>
    );
}

export default AlbumsList;
