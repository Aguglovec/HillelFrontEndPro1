import React from 'react';

function PhotosListItem({ photo }) {
    console.dir(photo)
    return <img src={photo.thumbnailUrl} alt={photo.title}/>
}

export default PhotosListItem;
