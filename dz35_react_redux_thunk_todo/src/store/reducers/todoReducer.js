import { CREATE_TODO_ACTION_TYPE, DELETE_TODO_ACTION_TYPE, TODOS_SET_LIST, TOGGLE_TODO_ACTION_TYPE } from '../actions/todoActions';

const INITIAL_VALUE = {
    list: [],
};

function toggleTodo(todo) {
    return {...todo, isDone: !todo.isDone}
}

export default function todoReducer(
    state = INITIAL_VALUE,
    { type, payload },
) {
    switch (type) {
        case CREATE_TODO_ACTION_TYPE:
            return { ...state, list: [...state.list, payload] };
        case DELETE_TODO_ACTION_TYPE:
            return { ...state, list: state.list.filter((item) => item.id !== payload) };
        case TOGGLE_TODO_ACTION_TYPE:
            return { ...state, list: state.list.map((todo) => todo.id !== payload ? todo : toggleTodo(todo))};
        case TODOS_SET_LIST:
            return { ...state, list: payload };        
                
        default:
            return state;
    }
}
