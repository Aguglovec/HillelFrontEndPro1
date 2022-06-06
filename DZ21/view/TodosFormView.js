class TodosFormView {

static FORM_TEMPLATE = `<form id="newTaskForm">
    <input type="text" id="newTask" placeholder="Enter new task here" value="" autofocus name='title'>
    <button id="addBtn">Add task</button>
    <div class="error" id="error"></div>
        </form>`;


static FORM_SELECTOR = '#newTaskForm'
static INPUT_SELECTOR = '#newTaskForm'


        constructor(config = {}) {
            this.$el = $(TodosFormView.FORM_TEMPLATE)
                .on('submit', TodosFormView.FORM_SELECTOR,
                    (e) =>
                        config.onAdd && config.onAdd($(INPUT_SELECTOR).val()),
                )
                // .on('input', TodosFormView.TASK_DELETE_SELECTOR, (e) => {
                //     e.stopPropagation();
                //     config.onDelete &&
                //         config.onDelete(
                //             $(e.target)
                //                 .closest(TodosFormView.FORM_SELECTOR)
                //                 .data(TodosFormView.TASK_DATA_ID),
                //         );
                // });
        }



}