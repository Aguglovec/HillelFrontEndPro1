import './TodoList.css';

// import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchList } from '../../store/actions/todoActions';

import TodoListItem from '../TodoListItem/TodoListItem';
import { useSelector } from 'react-redux';
import listSelector from '../../selectors/listSelector';


export default function TodoList () {
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(fetchList());
// eslint-disable-next-line
    }, []);


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
