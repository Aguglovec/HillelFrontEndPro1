import React, { useState, useEffect } from 'react';
import  {getList, update, create, remove} from '../RestApi/RestApi';

import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';
import ErrorMsg from '../ErrorMsg/ErrorMsg';


export default function App () {
const [list, setList] = useState([]);
const [error, setError] = useState('');

    useEffect(() => {
        getList()
            .then((data) => {
                setList(data);
                setError('');
            })
            .catch(() => {
                setError('Unable to get Todo list. Try later.');
            });
    }, []);

    function saveItem (newTodo) {
        console.log(newTodo);
        const prevList = [...list];
        newTodo.id='new';
        setList([...list, newTodo]);
        create(newTodo)
            .then((data) => {
                setList([...prevList, data]);
                setError('');
            })
            .catch(() => {
                setList(prevList);
                setError('Unable to create a todo. Try later.');
            });
    };



    function removeItem (id) {
        const prevList = [...list];
        const newList = list.filter((item) => item.id !== id);

        setList(newList);

        return remove(id)
        .then((data) => setError(''))
        .catch(() => {
            setError('Unable to remove a todo. Try later.');
            setList(prevList);
            });
    };

    function toggleTodo (id) {
        const toggledTodo = {...list.find((todo) => todo.id === id)};
        toggledTodo.isDone = !toggledTodo.isDone;
        updateItem(toggledTodo);

}

    function updateItem (updatedTodo) {
        const prevTodo = list.find((item) => item.id === updatedTodo.id);

        setList( list.map((item) =>
                item.id === updatedTodo.id ? updatedTodo : item,
            )
        );

    return update(updatedTodo)
    .then((data) => setError(''))
    .catch(() => {
        setError('Unable to update a todo. Try later.');
        setList(list.map((item) =>
                item.id === prevTodo.id ? prevTodo : item,
            ));
        });
    }

    return (
        <div className="container">
            
            <TodoList
                list={list}
                onToggle={toggleTodo}
                onRemove={removeItem}
            />
            <ErrorMsg error={error} />
            <NewTodoForm 
            onSave={saveItem} 
            />
        </div>
    );
}




// export default App;