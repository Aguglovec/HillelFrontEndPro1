"use strict";

const CONTACT_ITEM_CLASS = 'contact-item';
const DELETE_BTN_CLASS = 'contact-delete';
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
const contactList = document.getElementById("contactList");
const newContactFormEL = document.getElementById("newContact");
const ContactFormEl = document.getElementById("ContactForm")

contactList.addEventListener('click', onDelBtnClick);
ContactFormEl.addEventListener('submit', onAddBtnClick)

function onAddBtnClick(e) {
    e.preventDefault();
    const name = getContactName();
    const surname = getContactSurname();
    const number = getContactPhone();
    if (isValid(name, surname, number)) {   
        addContact(name, surname, number);
        clearInput();
    }
}

function getContactName () {
    return nameInput.value
}

function getContactSurname () {
    return surnameInput.value
}

function getContactPhone () {
    return numberInput.value
}

//Вопрос: как лучше проверять на пустой input? el.value.length < 1 ИЛИ el.value === ''?
function isValid (name, surname, number) {
    if (name === '')  {
        errorMsg(ERROR_MESSAGES.NAME);
        nameInput.focus();
        return false;
    }  
    if (surname === '')  {
        errorMsg(ERROR_MESSAGES.SURNAME);
        surnameInput.focus();
        return false;
    }
    if (number === '')  {
        errorMsg(ERROR_MESSAGES.PHONE);
        numberInput.focus();
        return false;
    }
    errorMsg();
    nameInput.focus();
    return true;
}

function addContact(name, surname, number) {
    const contact = createContactItem (name, surname, number);
    newContactFormEL.insertAdjacentHTML('beforebegin', contact);
}

function createContactItem (name, surname, number) {
        return CONTACT_ITEM_TEMPLATE
            .replace('{{name}}', name)
            .replace('{{surname}}', surname)
            .replace('{{number}}', number);
}


function onDelBtnClick (e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteContact(e.target.closest('.' + CONTACT_ITEM_CLASS));
    }
}

function clearInput() {
    nameInput.value = '';
    surnameInput.value = '';
    numberInput.value = '';
}

function errorMsg(error) {
    errorMsgEl.textContent = error;
}

function deleteContact(el) {
    el.remove();
}