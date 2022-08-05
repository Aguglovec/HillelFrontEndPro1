// import PhotosListItem from './PhotosListItem';
import React from 'react';
import PhotosListItem from './PhotosListItem';

function PhotosList({ list }) {
    return (
        <>
                {list.map((photo) => (
                    <PhotosListItem key={photo.id} photo={photo}/>
                ))}
        </>
    );
}

export default PhotosList;
