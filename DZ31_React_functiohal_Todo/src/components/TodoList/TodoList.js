import './TodoList.css';

import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

export default function TodoList ({list, onToggle, onRemove}) {
    return (
        <> 
            <h1>Todo List</h1>
            <ul>{
                list.map((todo) => <TodoListItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />)
                }
            </ul>
        </>
    );

}
