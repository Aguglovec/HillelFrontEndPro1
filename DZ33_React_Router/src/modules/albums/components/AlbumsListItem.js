import { Link } from 'react-router-dom';
import React from 'react';

function AlbumsListItem({ album }) {
    return (
        <li>
            <Link to={String(album.id)}>{album.title}</Link>
        </li>
    );
}

export default AlbumsListItem;
