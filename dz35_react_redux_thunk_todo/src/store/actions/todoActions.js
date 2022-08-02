import { getList, create, update, remove } from "../../components/RestApi/RestApi";

export const CREATE_TODO_ACTION_TYPE = 'CREATE_TODO_ACTION_TYPE';
export function createTodo(payload) {
    console.dir(payload);
    return { type: CREATE_TODO_ACTION_TYPE, payload };
}

export const DELETE_TODO_ACTION_TYPE = 'DELETE_TODO_ACTION_TYPE';
export function removeTodo(payload) {
    console.log('delete ' + payload);
    return { type: DELETE_TODO_ACTION_TYPE, payload };
}

export const TOGGLE_TODO_ACTION_TYPE = 'TOGGLE_TODO_ACTION_TYPE';
export function updateTodo(payload) {
    console.log('toggle ' + payload);
    return { type: TOGGLE_TODO_ACTION_TYPE, payload };
}

export const TODOS_SET_LIST = 'TODOS_SET_LIST';
export function  setTodoList (payload) {
    console.log('toggle ' + payload);
    return { type: TODOS_SET_LIST, payload };
}

export const fetchList = () => (dispatch) => {
    getList()
        .then((data) => dispatch(setTodoList(data)))
};

export const addNewTodo = (newTodo) => (dispatch) => {
    create(newTodo)
        .then((data) => dispatch(createTodo(data)))
};

export const toggleTodo = (toggledTodo) => (dispatch) => {
    update({...toggledTodo, isDone: !toggledTodo.isDone})
        .then((data) => dispatch(updateTodo(data.id)))
};

export const deleteTodo = (id) => (dispatch) => {
    remove(id)
        .then((data) => dispatch(removeTodo(data.id)))
};