import React from 'react';
import { Link } from 'react-router-dom';

function PhotosListItem({ photo }) {
    console.dir(photo)
    return <img src={photo.thumbnailUrl} alt={photo.title}/>
}

export default PhotosListItem;
