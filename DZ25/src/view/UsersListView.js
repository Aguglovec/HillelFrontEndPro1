import $ from 'jquery';
import interpolate from '../../../common/js/utils.js';

export class UsersListView {
    static LIST_TEMPLATE = `<tbody id="userList"></tbody>`;

    static LIST_ITEM_TEMPLATE = `  <tr class="user-item" data-item-id="{{id}}">
    <td class="userName">{{name}}</td>
    <td class="userSurname">{{surname}}</td>
    <td class="userEmail">{{email}}</td>
    <td class="userAction">
        <button type="button" class="user-edit edit-btn">Edit</button>
        <button type="button" class="user-delete delete-btn">X</button>
    </td>
    </tr>`;

    static TASK_SELECTOR = '.user-item';
    static TASK_EDIT_SELECTOR = '.edit-btn';
    static TASK_DELETE_SELECTOR = '.delete-btn';
    static TASK_DONE_CLASS = 'taskDone';
    static TASK_DATA_ID = 'itemId';

    static createItemElement(user) {
        return $(
            interpolate(UsersListView.LIST_ITEM_TEMPLATE, user)
        );
    }

    
    constructor(config = {}) {
        this.$el = $(UsersListView.LIST_TEMPLATE)
            .on(
                'click',UsersListView.TASK_EDIT_SELECTOR,
                (e) =>
                    config.onEdit && config.onEdit($(e.target)
                    .closest(UsersListView.TASK_SELECTOR)
                    .data(UsersListView.TASK_DATA_ID)),
            )
            .on('click', UsersListView.TASK_DELETE_SELECTOR, (e) => {
                // e.stopPropagation();
                config.onDelete &&
                    config.onDelete(
                        $(e.target)
                            .closest(UsersListView.TASK_SELECTOR)
                            .data(UsersListView.TASK_DATA_ID),
                    );
            });
    }

    renderList(list) {
        this.$el.empty();
        this.$el.append(list.map(UsersListView.createItemElement));
    }
}
