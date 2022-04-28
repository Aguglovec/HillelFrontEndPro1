"use strict";


const CONTACT_ITEM_TEMPLATE = document.getElementById('contactItemTemplate').innerHTML;
const ERROR_MESSAGES = {
    NAME: 'Enter Name',
    SURNAME: 'Enter Surname',
    PHONE: 'Enter Phone number'
};


const nameInput = document.getElementById("newName");
const surnameInput = document.getElementById("newSurname");
const numberInput = document.getElementById("newNumber");
const errorMsgEl = document.getElementById("error"); 
const addBtnEl = document.getElementById("addBtn");
const contactListEL = document.getElementById("contactList");
const newContactFormEL = document.getElementById("newContact");


addBtnEl.addEventListener("click", onAddBtnClick);
// newTaskInput.addEventListener("input", isValid);

// Захотел чтобы по нажатию на Enter добавлялась новая задача в список ToDo.
// newTaskInput.addEventListener("keyup", enterPress);

// function enterPress (event) {
//     if (event.key === 'Enter') {
//         event.preventDefault(); //Без этой штуки тоже работает. Зачем она?
//         onAddBtnClick();
//     }
// };

function onAddBtnClick() {
    if (isValid()) {   
        addContact();
        clearInput();
    }
}

//Вопрос: как лучше проверять на пустой input? .value.length < 1 ИЛИ .value === ''?
function isValid () {
    if (nameInput.value.length < 1)  {
        errorMsg(ERROR_MESSAGES.NAME);
        return false;
    }  
    if (surnameInput.value.length < 1)  {
        errorMsg(ERROR_MESSAGES.SURNAME);
        return false;
    }
    if (numberInput.value.length < 1)  {
        errorMsg(ERROR_MESSAGES.PHONE);
        return false;
    }
    errorMsg();
    return true;
}

function addContact() {
    const contact = createContactItem();
    newContactFormEL.insertAdjacentHTML('beforebegin', contact);
}

function createContactItem() {
        return CONTACT_ITEM_TEMPLATE
            .replace('{{name}}', nameInput.value)
            .replace('{{surname}}', surnameInput.value)
            .replace('{{number}}', numberInput.value);
}

// function taskStatus () {
//     this.classList.toggle('taskDone');

// }

function clearInput() {
    nameInput.value = '';
    surnameInput.value = '';
    numberInput.value = '';
}

function errorMsg(error) {
    errorMsgEl.textContent = error;
    // (error) ? newTaskInput.classList.add('error') : newTaskInput.classList.remove('error');
}
