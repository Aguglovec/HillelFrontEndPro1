import { ALBUMS_URL, PHOTOS_URL } from '../../../config';

export function getAlbumsList() {
    return fetch(ALBUMS_URL).then((res) => res.json());
}

export function getAlbumDetails(id) {
    return fetch(PHOTOS_URL + id).then((res) => res.json());
}
