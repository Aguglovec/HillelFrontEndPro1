"use strict";

const ITEM_CLASS = 'contact-item';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const STORAGE_KEY = 'itemList';

const ERROR_MESSAGES = {
    name: 'Enter Name',
    surname: 'Enter Surname',
    phone: 'Enter Phone number',
    invalidPhone : 'Phone should be a number',
};

const newItemFormEl = document.querySelector("#ContactForm");
const errorMsgEl = document.querySelector("#error"); 
const itemListEL = document.querySelector("#contactList");
const itemTemplate = document.querySelector("#contactItemTemplate").innerHTML;
const formInputs = document.querySelectorAll('.form-input');

newItemFormEl.addEventListener("submit", onItemSubmit);
itemListEL.addEventListener("click", onItemCkick);

let itemList = [];
init();



function onItemSubmit(e) {
    e.preventDefault();
    const newItem = getItem();

    if (isValid(newItem)) {   
        addItem(newItem);
        clearInput();
    }
}

function onItemCkick(e) {
    const id = getItemId(e.target);
    
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        removeItem(id);
        clearInput();
    }
    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        editItem(id);
    }
}

function init() {
    itemList = restoreData();
    renderItemList();
}

function getItem() {
    const item = {};

    formInputs.forEach((inp) => {
        item[inp.name] = inp.value;
    });
    item.id = +item.id;
    return item;
}


function isValid (obj) {
    for (let key in obj) {
        if (obj[key] === '')  {  //проверка на пустые поля всех input и выводом ошибки +с фокусировкой на поле с ошибкой
            errorMsg(ERROR_MESSAGES[key]);
            document.querySelector(`[name="${key}"]`).focus();
            return false;
        }
    }
    if (isNaN(obj.phone))  {    //проверка номера на число
        errorMsg(ERROR_MESSAGES.invalidPhone);
        document.querySelector(`[name="phone"]`).focus();
        return false;
    }
    errorMsg();
    formInputs[0].focus();
    return true;
}

function addItem(item) {
    if (isNaN(item.id)) {
        item.id = Date.now();
        itemList.push(item);
    } else {
        const oldItem = findItem(item.id);
        for (let key in oldItem) {
            oldItem[key] = item[key];
        }
    }
    console.log (item);
    saveData();
    renderItemList();
}

function findItem(id) {
    return itemList.find((obj) => obj.id === id);
}
function renderItemList() {
    itemListEL.innerHTML = itemList.map(generateItemHtml).join('\n');
}

function generateItemHtml (item) {
    return interpolate(itemTemplate, item);
}

function clearInput() {
    newItemFormEl.reset();
}

function getItemId(el) {
    const itemEl = el.closest('.'+ITEM_CLASS);
    return +itemEl.dataset.itemId;
}

function removeItem(itemId) {
    itemList = itemList.filter(({ id }) => id !== itemId);
    saveData();
    renderItemList();
}

function editItem (id) {
    const item = findItem(id);
    formInputs.forEach((inp) => inp.value = item[inp.name]);
    console.log (item);
}

function errorMsg(error) {
    errorMsgEl.textContent = error;
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itemList));
}

function restoreData() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

