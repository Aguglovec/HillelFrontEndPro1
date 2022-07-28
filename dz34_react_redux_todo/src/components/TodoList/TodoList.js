import './TodoList.css';

import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';
import { useSelector } from 'react-redux';
import listSelector from '../../selectors/listSelector';


export default function TodoList () {
const list = useSelector(listSelector);

    return (
        <> 
            <h1>Todo List</h1>
            <ul>{
                list.map((todo) => <TodoListItem todo={todo} key={todo.id} />)
                }
            </ul>
        </>
    );

}
