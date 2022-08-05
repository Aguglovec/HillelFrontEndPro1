import React from 'react';
import { Link } from 'react-router-dom';

function AlbumsListItem({ album }) {
    return  (
        <li>
            <Link to={String(album.id)}>{album.title}</Link>
        </li>
    );
}

export default AlbumsListItem;
