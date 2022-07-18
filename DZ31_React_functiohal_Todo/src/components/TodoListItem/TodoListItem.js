import './TodoListItem.css';

import React from 'react';

export default function TodoListItem ({todo, onToggle, onRemove}) {

    function onToggleClick (e) {
        e.stopPropagation();
        onToggle(todo.id);
    }

    function onRemoveClick (e) {
        e.stopPropagation();
        onRemove(todo.id);
    }

    return (
        <li
            className={todo.isDone ? "taskDone task-item" : "task-item"}
            onClick={(e) => onToggleClick(e)}
            >  
            {todo.title} 
            
            <span 
            onClick={(e) => onRemoveClick(e)} className="delete-btn">✘</span>
        </li>
    );
    }

