import React, { useState } from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import { createTodo } from '../../store/actions/todoActions';
import { useDispatch } from 'react-redux';

export default function NewTodoForm ({onSave}) {
    const [newTodo, setNewTodo] = useState({title: "",});
    const [error, setError] = useState('');
    const dispatch = useDispatch ();

    function oninputChange (e) {
        setError('');
        setNewTodo({...newTodo, [e.target.name]: e.target.value});
    };

    function onFormSubmit(e) {
        e.preventDefault();
        for (let key in newTodo) {
            if (!isValid(newTodo[key])) {
                setError('Please enter todo\'s  ' + key + '.');
                return null
            };
        }
        
        setError('');
        dispatch(createTodo(newTodo));
        resetTodoForm();
    };

    function isValid (string) {
        if (string.length < 1) {
            return false;
        } 
        return true;
    }

    function resetTodoForm() {
        setNewTodo({title: ""});
    }

    return (
    <> 
    <ErrorMsg error={error} />
    <form onSubmit={onFormSubmit}>
        <input
            name="title"
            value={newTodo.title}
            onChange={oninputChange}
        />
        <button>Save task</button>
    </form>
    </>
    );
}
    

    



