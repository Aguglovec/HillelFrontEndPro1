import AlbumsList from '../components/AlbumsList';
import React from 'react';
import useAlbumsList from '../hooks/useAlbumsList';

function AlbumsListPage() {
    const { list } = useAlbumsList();

    return (
        <div>
            <h3>User's albums:</h3>
            <AlbumsList list={list} />
        </div>
    );
}

export default AlbumsListPage;
