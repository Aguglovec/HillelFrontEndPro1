import api from '../../../api';

export function getUsersList() {
    return api.get('users').then((resp) => resp.data);
}

export function getUserDetails(id) {
    return api.get(`users/${id}`).then((resp) => resp.data);
}
