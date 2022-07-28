import React from 'react';

import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';

export default function App () {

    return (
        <div className="container">
            <TodoList />
            <NewTodoForm />
        </div>
    );
}
