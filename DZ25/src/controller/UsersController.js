const $ = require( "jquery" );
import {UsersCollection} from '../model/UsersCollection.js';
import {UsersFormView} from '../view/UsersFormView.js';
import {UsersListView} from '../view/UsersListView.js';

export class UsersController {
    constructor($container) {
        this._usersFormView = new UsersFormView({
            onAdd: (newUser) => this.addUser(newUser),
        });

        $container.append(this._usersFormView.$el);

        this._usersListView = new UsersListView({
            onEdit: (id) => this.setInput(id),
            onDelete: (id) => this.removeUser(id),
        });

        $(UsersFormView.FORM_HEAD_SELECTOR).after(this._usersListView.$el);




        this._usersList = new UsersCollection();
        this._usersList
            .fetchList()
            .then(() => this._usersListView.renderList(this._usersList.list));
    }

    setInput(id) {
        const item = this._usersList.getItemfromID(id);
        this._usersFormView.editItem(item);
        this._usersListView.renderList(this._usersList.list);

    }

    removeUser(id) {
        this._usersList.removeUser(id);
        this._usersListView.renderList(this._usersList.list);
    }

    addUser(newUser) {
        this._usersList.addUser(newUser)
        .then((data) => {
            this._usersListView.renderList(this._usersList.list);
        })


    }
}
