class TodosFormView {

static FORM_TEMPLATE = `<form id="newTaskForm">
    <input type="text" class="form-input" id="title" placeholder="Enter new task here" value="" autofocus name='title'>
    <button id="addBtn">Add task</button>
    <div class="error" id="error"></div>
        </form>`;


static FORM_SELECTOR = '#newTaskForm'
static INPUT_SELECTOR = '#newTask'
static FORM_INPUTS_SELECTOR = '.form-input'


        constructor(config = {}) {
            this.$el = $(TodosFormView.FORM_TEMPLATE)
                .on('submit', (e) => {
                    e.preventDefault();
                    console.log(e);
                    config.onAdd(this.getItemFromForm());
                });
        }

        // submitInput(e) {
        //     e.preventDefault();
        //     console.log(e);
        //     this.config.onAdd($(TodosFormView.INPUT_SELECTOR).val()); 
        // }
        

        getItemFromForm() {
            const item = {};
        console.log($(TodosFormView.FORM_INPUTS_SELECTOR));
            $(TodosFormView.FORM_INPUTS_SELECTOR).map((inp) => {
                item[inp.name] = inp.value;
            });
        
            return item;

}
}