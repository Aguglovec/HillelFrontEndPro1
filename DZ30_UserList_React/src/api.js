import { API_URL } from './config';

export function getItemList() {
    return fetch(API_URL).then((res) => res.json());
}

export function updateItem(updatedItem) {
    return fetch(API_URL + updatedItem.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
    }).then((res) => res.json());
}

export function removeItem(id) {
    return fetch(API_URL + id, {
        method: 'DELETE',
    });
}

export function createItem(newItem) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
    }).then((res) => res.json());
}
