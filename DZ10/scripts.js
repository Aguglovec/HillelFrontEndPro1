"use strict";

const newTaskInput = document.getElementById("newTask");
const errorMsgEl = document.getElementById("error"); 
const addBtnEl = document.getElementById("addBtn");
const taskListEL = document.getElementById("toDoList");

addBtnEl.addEventListener("click", onAddBtnClick);
newTaskInput.addEventListener("input", isValid);

// Захотел чтобы по нажатию на Enter добавлялась новая задача в список ToDo.
newTaskInput.addEventListener("keyup", enterPress);

function enterPress (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); //Без этой штуки тоже работает. Зачем она?
        onAddBtnClick();
    }
};

function onAddBtnClick() {
    if (isValid()) {   
        addTask();
        clearInput();
    }
}

function isValid () {
    if (newTaskInput.value.length < 1)  {
        errorMsg('Enter something');
        return false;
    }  
    if (newTaskInput.value.length < 4) {
        errorMsg('Task is too short');
        return false;
    } 
    errorMsg();
    return true;
}

function addTask() {
    const li = createLi();
    taskListEL.append(li);
    li.addEventListener("click", taskStatus);
}

function clearInput() {
    newTaskInput.value = ''
}

function createLi() {
    const el = document.createElement('li');
    el.classList.add('taskToDo');
    el.textContent = newTaskInput.value;
    return el;
}

function taskStatus () {
    this.classList.toggle('taskDone');

}

function errorMsg(error) {
    errorMsgEl.textContent = error;
    (error) ? newTaskInput.classList.add('error') : newTaskInput.classList.remove('error');
}
