import React from 'react';
import AlbumProvider from '../providers/AlbumProvider';
import AlbumDetailsPage from './AlbumDetailsPage';

function AlbumDetailsWrapper() {
    return (
        <AlbumProvider>
            <AlbumDetailsPage />
        </AlbumProvider>
    );
}

export default AlbumDetailsWrapper;
