"use strict";

const TASK_CLASS = 'taskItem';
const DELETE_BTN_CLASS = 'delete-btn';

const newTaskFormEl = document.getElementById('newTaskForm');
const taskInput = document.getElementById("newTask");
const errorMsgEl = document.getElementById("error"); 
// const addBtnEl = document.getElementById("addBtn");
const taskListEL = document.getElementById("toDoList");
const taskTemplate = document.getElementById('taskTemplate').innerHTML;

newTaskFormEl.addEventListener("submit", onTaskSubmit);
taskInput.addEventListener("input", isValid);
taskListEL.addEventListener("click", onTaskCkick);

let taskList = [
    {
        id:1,
        task: "task 1",
        taskStatus: 'taskDone',
    },
    {
        id:2,
        task: "task 2",
        taskStatus: 'taskToDo',
    }
];

init();

function init() {
    renderTaskList();
}

function onTaskSubmit(e) {
    e.preventDefault();
    if (isValid()) {   
        addTask();
        clearInput();
    }
}

function onTaskCkick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const id = getTaskId(e.target);
        removeTask(id);
    }
    if (e.target.classList.contains(TASK_CLASS)) {
        const id = getTaskId(e.target);
        taskStatusToggle(id);
    }
}

function isValid () {
    if (taskInput.value.length < 1)  {
        errorMsg('Enter something');
        return false;
    }  
    if (taskInput.value.length < 4) {
        errorMsg('Task is too short');
        return false;
    } 
    errorMsg();
    return true;
}

function addTask() {
    const task = {
        taskStatus: 'taskToDo',
        task: taskInput.value,
        id: Date.now(),
    };
    taskList.push(task);
    renderTaskList();
}

function renderTaskList() {
    taskListEL.innerHTML = taskList.map(generateTaskHtml).join('\n');
}

function generateTaskHtml (task) {
    return interpolate(taskTemplate, task);
}

function clearInput() {
    newTaskFormEl.reset();
}

function getTaskId(el) {
    const taskEl = el.closest('.'+TASK_CLASS);
    return +taskEl.dataset.taskId;
}

function removeTask(id) {
    taskList = taskList.filter((obj) => obj.id !== id);
    renderTaskList();
}

function taskStatusToggle (id) {
    const index = taskList.findIndex((obj) => obj.id === id);
    taskList[index].taskStatus =  taskList[index].taskStatus === 'taskToDo' ? 'taskDone' : 'taskToDo';
    renderTaskList();
}

function errorMsg(error) {
    errorMsgEl.textContent = error;
    (error) ? taskInput.classList.add('error') : taskInput.classList.remove('error');
}
