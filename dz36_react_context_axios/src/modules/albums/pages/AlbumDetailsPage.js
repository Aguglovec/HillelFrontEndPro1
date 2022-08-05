import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import useAlbum from '../hooks/useAlbum';

function AlbumDetailsPage() {
    const album = useAlbum();
    console.dir(album);

    return (
        <div>
            <h2>Album Details</h2>
            <strong>Title:</strong> {album.title}<br />
            <Link to='photos'>Album's photos</Link>
            
            <Outlet />
        </div>
    );
}

export default AlbumDetailsPage;
