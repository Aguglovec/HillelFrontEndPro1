import Loader from '../../common/components/Loader';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';


function AlbumDetails() {
    const params = useParams();
    const { data: album, isLoaded} = useAlbum(params.id);


    if (isLoaded) {
        return (
            <div>
                {!isLoaded && <Loader />}
                <h1>Album ID: {String(params.id)}</h1>
                {album.map((photo) => (
                    <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title}/>
                ))}
            </div>
        );
    }


}

export default AlbumDetails;
