import api from '../../../api';

export function getPhotos(albumId) {
    return api.get(`photos?albumId=${albumId}`).then((response) => response.data);
}
