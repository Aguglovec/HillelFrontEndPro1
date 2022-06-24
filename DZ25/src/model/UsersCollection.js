const USERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

export class UsersCollection {
    constructor() {
        this.list = [];
    }

    fetchList() {
        return fetch(USERS_URL)
            .then((res) => res.json())
            .then((data) => (this.list = data));
    }

    removeUser(userId) {
        this.list = this.list.filter(({ id }) => id != userId);

        fetch(USERS_URL + userId, {
            method: 'DELETE',
        });
    }

    addUser(userItem) {
        if (isNaN(userItem.id)) {
            return fetch(USERS_URL, {
                method: 'POST',
                body: JSON.stringify(userItem),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.json())
            .then((data) => {
                this.list.push(data);
                return data;
            })
        } else {
            return fetch(USERS_URL + userItem.id, {
                method: 'PUT',
                body: JSON.stringify(userItem),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(() => this.fetchList())
            
        }
    }

    getItemfromID (id) {
        return this.list.find((obj) => obj.id == id);
    }
}
