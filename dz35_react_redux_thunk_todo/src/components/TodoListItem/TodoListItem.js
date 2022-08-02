import './TodoListItem.css';

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/actions/todoActions';

export default function TodoListItem ({todo}) {
    const dispatch = useDispatch();

    function onToggleClick (e) {
        e.stopPropagation();
        dispatch(toggleTodo(todo));
    }

    function onRemoveClick (e) {
        e.stopPropagation();
        dispatch(deleteTodo(todo.id));
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

