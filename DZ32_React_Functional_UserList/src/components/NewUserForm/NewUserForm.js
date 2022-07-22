import React, { useState } from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

export default function NewUserForm ({user, onInput, onSave}) {
    const [error, setError] = useState('');

    function oninputChange (e) {
        setError('');
        onInput(e);
    };

    function onFormSubmit (e) {
        e.preventDefault();
        for (let key in user) {
            if (!isValid(user[key])) {
                setError('Please enter user\'s  ' + key + '.');
                return null
            }
        }
        console.log(user);
        setError('');
        onSave(user);
    };


    return (
        <> 
        <ErrorMsg error={error} />
        <form id="userForm" onSubmit={onFormSubmit}>
            <table className="u-full-width">
            <tbody>
            <tr>
                <td><input 
                    className="form-input" 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={user.name} 
                    onChange={oninputChange}
                    autoFocus /></td>
                <td><input 
                    className="form-input" 
                    type="text" 
                    name="surname" 
                    placeholder="Surname" 
                    value={user.surname} 
                    onChange={oninputChange} /></td>
                <td><input 
                    className="form-input" 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={user.email}
                    onChange={oninputChange} /></td>
                <td><input 
                    className="form-input" 
                    type="text" 
                    name="id" 
                    placeholder="" 
                    value={user.id}  
                    onChange={oninputChange}
                    hidden /></td>
                <td>
                <button id="addBtn" >Save user</button></td>
            </tr></tbody>
            </table>
        </form>
        </>
        );
}
    

function isValid (string) {
    if (string.length < 1) {
        return false;
    } 
    return true;
}



