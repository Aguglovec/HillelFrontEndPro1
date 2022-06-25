import $ from 'jquery';

export class UsersFormView {

static FORM_TEMPLATE = `<h1>User List</h1>
<form id="userForm">
    <table class="box">
    <thead id="userListHead">
        <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Actions</th>
        </tr>
    </thead>

    <tfoot>
    <tr id="newUser">
        <td><input class="form-input" type="text" name="name" id="newName" placeholder="Name" value="" autofocus></td>
        <td><input class="form-input" type="text" name="surname" id="newNumber" placeholder="Surname" value=""></td>
        <td><input class="form-input" type="text" name="email" id="newEmail" placeholder="Email" value=""></td>
        <input class="form-input" type="text" name="id" id="newId" placeholder="" value="new" hidden>
        <td class="userAction"><button id="addBtn" class="">Save user</button></td>
    </tr>
    </tfoot>
    </table>
</form>
<div class="error" id="error"></div>`;

static FORM_HEAD_SELECTOR = '#userListHead';
static FORM_SELECTOR = '#userForm';
static FORM_INPUTS_SELECTOR = '.form-input';
static ERROR_SELECTOR = '#error';
static ADD_BTN_SELECTOR = '#addBtn';
static ERROR_MESSAGES = {
    name: 'Enter Name',
    email: 'Enter Email',
    surname: 'Enter Surname',
};

constructor(config = {}) {
    this.$el = $(UsersFormView.FORM_TEMPLATE)
        .on('submit', (e) => {
            e.preventDefault();

            const newItem = this.getItemFromForm();
            if (this.isValid(newItem)) {
            config.onAdd(newItem);
            $(UsersFormView.FORM_SELECTOR).trigger("reset");
            }
        })


        
}

getItemFromForm() {
    const item = {};
    $(UsersFormView.FORM_INPUTS_SELECTOR)
        .each((i, el) => {
            item[$(el).attr("name")] = $(el).val();
        });

    return item;
}

isValid (obj) {
    for (let key in obj) {
        if (obj[key] === '')  {  
            this.errorMsg(UsersFormView.ERROR_MESSAGES[key]);
            $(`[name="${key}"]`).focus();
            return false;
        }
    }
    this.errorMsg("");
    $(UsersFormView.FORM_INPUTS_SELECTOR)[0].focus();
    return true;
}


errorMsg(error) {
    $(UsersFormView.ERROR_SELECTOR).html(error);
    (error) ? $(UsersFormView.FORM_INPUTS_SELECTOR).addClass('error') : $(UsersFormView.FORM_INPUTS_SELECTOR).removeClass('error');
}

editItem (item) {
    $(UsersFormView.FORM_INPUTS_SELECTOR).each((inp,val) => {
        val.value = item[val.name]});

}


}