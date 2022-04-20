"use strict";

const newTaskInput = document.getElementById("newTask");
const errorMsgEl = document.getElementById("error"); 
const addBtnEl = document.getElementById("addBtn");
const taskListEL = document.getElementById("toDoList");

addBtnEl.addEventListener("click", onAddBtnClick);
newTaskInput.addEventListener("input", isValid);

// Захотел чтобы по нажатию на Enter добавлялась новая задача в список ToDo.
// Этот кусок я скомуниздил из интернета и не до конца его понимаю: 
// Когда пытаюсь его разделить на вызов обработчика и функцию(как мы обычно делаем) он перестаёт работать. 
// Плюс он помечен как deprecated. ыКак сейчас правильно отслеживать нажатие кнопок?
newTaskInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault(); //Без этой штуки тоже работает. Зачем она?
        onAddBtnClick();
    }
});


function onAddBtnClick() {
    if (isValid()) {   
        addTask();
        clearInput();
    }
}

function isValid () {
    if (newTaskInput.value.length < 1)  {
        errorMsg('Enter something');
        newTaskInput.classList.add('error');
        return false;
    } else 
    if (newTaskInput.value.length < 4) {
        errorMsg('Task is too short');
        newTaskInput.classList.add('error');
        return false;
    } else {
        errorMsg();
        newTaskInput.classList.remove('error');
        return true;
    }
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

const errorMsg = (error) => errorMsgEl.textContent = error;
