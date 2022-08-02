import React from 'react';
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchList } from '../../store/actions/todoActions';

import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';

export default function App () {
    // const dispatch = useDispatch();

    // useEffect (() => {
    //     dispatch(fetchList());
    // }, []);

    return (
        <div className="container">
            <TodoList />
            <NewTodoForm />
        </div>
    );
}
