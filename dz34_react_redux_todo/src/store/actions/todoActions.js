export const CREATE_TODO_ACTION_TYPE = 'CREATE_TODO_ACTION_TYPE';
export function createTodo(payload) {
    console.dir(payload);
    return { type: CREATE_TODO_ACTION_TYPE, payload };
}

export const DELETE_TODO_ACTION_TYPE = 'DELETE_TODO_ACTION_TYPE';
export function deleteTodo(payload) {
    console.log('delete ' + payload);
    return { type: DELETE_TODO_ACTION_TYPE, payload };
}

export const TOGGLE_TODO_ACTION_TYPE = 'TOGGLE_TODO_ACTION_TYPE';
export function toggleTodo(payload) {
    console.log('toggle ' + payload);
    return { type: TOGGLE_TODO_ACTION_TYPE, payload };
}

