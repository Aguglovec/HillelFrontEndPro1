class TodosListView {
    static LIST_TEMPLATE = `<ul id="toDoList"></ul>`;
    static LIST_ITEM_TEMPLATE = `<li class="taskItem {{doneClass}}" data-task-id="{{id}}">{{title}}
    <button class="task-delete delete-btn">X</button>
</li>`;

    static TASK_SELECTOR = '.taskItem';
    static TASK_DELETE_SELECTOR = '.delete-btn';
    static TASK_DONE_CLASS = 'taskDone';
    static TASK_DATA_ID = 'taskId';

    static createItemElement(todo) {
        return $(
            TodosListView.LIST_ITEM_TEMPLATE.replace('{{id}}', todo.id)
                .replace('{{title}}', todo.title)
                .replace(
                    '{{doneClass}}',
                    todo.isDone ? TodosListView.TASK_DONE_CLASS : '',
                ),
        );
    }

    
    constructor(config = {}) {
        this.$el = $(TodosListView.LIST_TEMPLATE)
            .on(
                'click',
                TodosListView.TASK_SELECTOR,
                (e) =>
                    config.onToggle && config.onToggle($(e.target).data(TodosListView.TASK_DATA_ID)),
            )
            .on('click', TodosListView.TASK_DELETE_SELECTOR, (e) => {
                e.stopPropagation();
                config.onDelete &&
                    config.onDelete(
                        $(e.target)
                            .closest(TodosListView.TASK_SELECTOR)
                            .data(TodosListView.TASK_DATA_ID),
                    );
            });
    }

    renderList(list) {
        this.$el.empty();
        this.$el.append(list.map(TodosListView.createItemElement));
    }

    renderOne (todo) {
        this.$el.append(TodosListView.createItemElement(todo));
    }
}
