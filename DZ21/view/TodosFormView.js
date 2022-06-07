class TodosFormView {

static FORM_TEMPLATE = `<form id="newTaskForm">
    <input type="text" class="form-input" id="title" placeholder="Enter new task here" value="" autofocus name='title'>
    <button id="addBtn">Add task</button>
    </form>
    <div class="error" id="error"></div>`;


static FORM_SELECTOR = '#newTaskForm';
static FORM_INPUTS_SELECTOR = '.form-input';
static ERROR_SELECTOR = '#error';
static ADD_BTN_SELECTOR = '#addBtn';


constructor(config = {}) {
    this.$el = $(TodosFormView.FORM_TEMPLATE)
        .on('submit', (e) => {
            e.preventDefault();

            const newItem = this.getItemFromForm();
            config.onAdd(newItem);

        })
        .on ('input', (e) => {this.isValid(e.target.value)});
}

getItemFromForm() {
    const item = {};
    $(TodosFormView.FORM_INPUTS_SELECTOR)
        .each((i, el) => {


            item[$(el).attr("name")] = $(el).val(); // Надо ли делать через $ ?
            $(el).val('');
            // item[el.name] = el.value;    // Или так тоже правильно?
            // el.value = '';               // По идее мы ведь тут работаем с объектом а не DOM, и $ здесь лишний. Верно?

        })
    
    return item;
}

isValid (string) {
    if (string.length < 4) {
        this.errorMsg('Task is too short');
        $(TodosFormView.ADD_BTN_SELECTOR).prop( "disabled", true);
        return false;
    } 

    $(TodosFormView.ADD_BTN_SELECTOR).prop( "disabled", false);
    this.errorMsg("");
    return true;
}

errorMsg(error) {
    $(TodosFormView.ERROR_SELECTOR).html(error);
    (error) ? $(TodosFormView.FORM_INPUTS_SELECTOR).addClass('error') : $(TodosFormView.FORM_INPUTS_SELECTOR).removeClass('error');
}

}