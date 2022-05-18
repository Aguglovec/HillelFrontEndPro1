"use strict";

const ITEM_CLASS = 'user-item';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const STORAGE_KEY = 'itemList';
const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users'

const ERROR_MESSAGES = {
    name: 'Enter Name',
    email: 'Enter Email',
    phone: 'Enter Phone number',
    address: 'Enter Adress',
    invalidPhone : 'Phone should be a number',
};

const newItemFormEl = document.querySelector("#userForm");
const errorMsgEl = document.querySelector("#error"); 
const itemListEL = document.querySelector("#userList");
const itemTemplate = document.querySelector("#userItemTemplate").innerHTML;
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
    console.log(id);
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        removeItem(id);
        clearInput();
    }
    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        editItem(id);
    }
}

function init() {
    // itemList = restoreData();
    // renderItemList();
    fetchList ();
}

function fetchList() {
    fetch (API_URL)
    .then ((res) => res.json(res))
    .then ((data) => {
        itemList = data;
        renderItemList();
        console.log(itemList);
    });
} 

function getItem() {
    const item = {};

    formInputs.forEach((inp) => {
        item[inp.name] = inp.value;
    });

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
    // if (isNaN(obj.phone))  {    //проверка номера на число
    //     errorMsg(ERROR_MESSAGES.invalidPhone);
    //     document.querySelector(`[name="phone"]`).focus();
    //     return false;
    // }
    errorMsg();
    formInputs[0].focus();
    return true;
}

function addItem(item) {
    if (isNaN(item.id)) {
        delete item.id;
        console.log (JSON.stringify(item));
        fetch ( API_URL, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then (() => {
                fetchList();
                });
    } else {
        const oldItem = findItem(item.id);
        for (let key in oldItem) {
            oldItem[key] = item[key];
        }
    }
}

function findItem(id) {
    return itemList.find((obj) => obj.id === id);
}
function renderItemList() {
    itemListEL.innerHTML = itemList.map(generateItemHtml).join('\n');
}

function generateItemHtml (item) {
    //Первый вариант. Зайдёт в  address и заберёт нужные свойства:
    // return interpolate(interpolate(itemTemplate, item), item.address);

    //Второй вариант. Переписал функцию interpolate, добавил рекурсию, чтобы она перебирала объекты на всю глубину.
    // Плюс - масштабируемость. Достаточно добавить новые свойства только в шаблон, и не надо переписывать код.
    // Минус - все свойства должны иметь уникальные имена иначе будет записано первое, которое попадётся.
    // В нашем случае свойство name есть как у user так и у company
    return interpolateDeeper(itemTemplate, item)
}

function clearInput() {
    newItemFormEl.reset();
}

function getItemId(el) {
    const itemEl = el.closest('.'+ITEM_CLASS);
    return +itemEl.dataset.itemId;
}

function removeItem(itemId) {
    fetch ( API_URL+'/'+ itemId, {
        method: 'DELETE',
    })
        .then (() => {
            fetchList();
            });
}

function editItem (id) {
    const item = findItem(id);
    formInputs.forEach((inp) => inp.value = item[inp.name]);
    console.log (item);
}

function errorMsg(error) {
    errorMsgEl.textContent = error;
}