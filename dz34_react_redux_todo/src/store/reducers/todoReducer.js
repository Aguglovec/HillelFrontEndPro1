import { CREATE_TODO_ACTION_TYPE, DELETE_TODO_ACTION_TYPE, TOGGLE_TODO_ACTION_TYPE } from '../actions/todoActions';

const INITIAL_VALUE = {
    list: [
        {
            id: 1,
            title: 'Make a To Do list',
            isDone: true,
        },
        {
            id: 2,
            title: 'Check off the first thing on the To Do List',
            isDone: true,
        },
        {
            id: 3,
            title: 'Realise you have already completed 2 things on the list',
            isDone: true,
        },
        {
            id: 4,
            title: 'Reward yourself with a nap',
            isDone: false,
        },
    ],
};

function constructTodo(payload) {
    return {    ...payload, 
        id: Date.now(),
        isDone: false,
    }
}

function toggleTodo(todo) {
    return {...todo, isDone: !todo.isDone}
}

export default function todoReducer(
    state = INITIAL_VALUE,
    { type, payload },
) {
    switch (type) {
        case CREATE_TODO_ACTION_TYPE:
            return { ...state, list: [...state.list, constructTodo(payload)] };
        case DELETE_TODO_ACTION_TYPE:
            return { ...state, list: state.list.filter((item) => item.id !== payload) };
        case TOGGLE_TODO_ACTION_TYPE:
            return { ...state, list: state.list.map((todo) => todo.id !== payload ? todo : toggleTodo(todo))};
                
                
        default:
            return state;
    }
}
