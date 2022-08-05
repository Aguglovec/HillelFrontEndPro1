import { AlbumContext } from '../providers/AlbumProvider';
import { useContext } from 'react';

export default function useAlbum() {
    return useContext(AlbumContext);
}
