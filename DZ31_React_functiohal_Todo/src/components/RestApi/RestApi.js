import {API_URL} from "../../config"

export function getList() {
        return fetch(API_URL).then((res) => res.json());
    }
    export function getOne(id) {
        return fetch(API_URL + id).then((res) => res.json());
    }
    export function create(data) {
        return fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
    }
    export function update(data) {
        return fetch(API_URL + data.id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
    }
    export function remove(id) {
        return fetch(API_URL + id, {
            method: 'DELETE',
        }).then((res) => res.json());
    }

