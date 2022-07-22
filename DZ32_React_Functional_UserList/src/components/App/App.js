import React, { useState, useEffect } from 'react';
import  {getList, update, create, remove} from '../RestApi/RestApi';

import NewUserForm from '../NewUserForm/NewUserForm';
import UserList from '../UserList/UserList';
import ErrorMsg from '../ErrorMsg/ErrorMsg';


export default function App () {
    const [list, setList] = useState([]);
    const [error, setError] = useState('');
    const [user, setUser] = useState({
            name: '',
            surname: '',
            email: '',
            id: 'new',
        });


    useEffect(() => {
        setError('');
        getList()
            .then((data) => {
                setList(data);
            })
            .catch(() => {
                setError('Unable to get User list. Try later.');
            });
    }, []);

    function oninputChange(e) {
        setUser({...user, [e.target.name]: e.target.value,});
        }

    function removeUser (id) {
        setError('');
        const prevList = [...list];
        const newList = list.filter((item) => item.id !== id);

        setList(newList);

        return remove(id)
        .catch(() => {
            setError('Unable to remove a user. Try later.');
            setList(prevList);
            });
    };

    
    function editUser(id) {
        const userToEdit = list.find((item) => item.id === id);
        setUser({...userToEdit});
    };


    function saveItem (newUser) {
        newUser = {...user};
        resetUserForm();

        if (isNaN(newUser.id)) {
            createItem(newUser);
        } else {
            updateItem(newUser);
        }
    }

    function createItem(newUser) {
        setError('');
        const prevList = [...list];
        setList([...list, newUser]);

        return create(newUser)
            .then((data) => {
                console.log(data);
                setList([...prevList, data]);
                })
            .catch(() => {
                setError('Unable to create a user. Try later.');
                setList(prevList);
            });
    };

    function updateItem (updatedUser) {
        setError('');
        const prevUser = list.find((item) => item.id === updatedUser.id);

        setList( list.map((item) =>
                item.id === updatedUser.id ? updatedUser : item,
            )
        );

        return update(updatedUser)
            .catch(() => {
            setError('Unable to update a user. Try later.');
            setList(list.map((item) =>
                    item.id === prevUser.id ? prevUser : item,
                ));
            });
    }

    function resetUserForm() {
        setUser({
                name: '',
                surname: '',
                email: '',
                id: 'new',
            });
    }

    return (
        <div className="container">
            
            <UserList
                list={list}
                onEdit={editUser}
                onRemove={removeUser}
            />
            <ErrorMsg error={error} />
            <NewUserForm 
            onSave={saveItem} 
            user={user}  
            onInput={oninputChange}/>
        </div>
    )
}

