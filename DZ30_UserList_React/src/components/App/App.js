import React, { Component } from 'react';
import  RespApi from '../RestApi/RestApi';
import { API_URL } from '../../config'

import NewUserForm from '../NewUserForm/NewUserForm';
import UserList from '../UserList/UserList';
import ErrorMsg from '../ErrorMsg/ErrorMsg';



export default class App extends Component {
    state = {
        list: [],
        user: {
            name: '',
            surname: '',
            email: '',
            id: 'new',
        },
        error: '',
    };



    componentDidMount() {
        this.api = new RespApi (API_URL);
        this.fetchList();
    }

    render() {
        return (
            <div className="container">
                
                <UserList
                    list={this.state.list}
                    onEdit={this.editUser}
                    onRemove={this.removeItem}
                />
                <ErrorMsg error={this.state.error} />
                <NewUserForm 
                onSave={this.saveItem} 
                user={this.state.user}  
                onInput={this.oninputChange}/>
            </div>
        );
    }

    fetchList() {
        return this.api.getList()
            .then((data) => this.setState({ list: data, error:'',}))
            .catch(() => {
                this.setState({
                    error: 'Unable to get User list. Try later.',
                });
            });
    }

    updateItem(updatedUser) {
        const prevUser = this.state.list.find(
            (item) => item.id === updatedUser.id,
        );

        this.setState({
            list: this.state.list.map((item) =>
                item.id === updatedUser.id ? updatedUser : item,
            ),
        });

        this.resetUserForm();

        return this.api.update(updatedUser)
        .then((data) => this.setState({error:'',}))
        .catch(() => {
            this.setState({
                error: 'Unable to update a user. Try later.',
                list: this.state.list.map((item) =>
                    item.id === prevUser.id ? prevUser : item,
                ),
            });
        });
        
    }

    editUser = (id) => {
        const user = this.state.list.find((item) => item.id === id);
        this.setState({
            user: {...user},
            })
    };

    removeItem = (id) => {
        const prevList = [...this.state.list];
        const newList = this.state.list.filter((item) => item.id !== id);

        this.setState({
            list: newList,
        });

        return this.api.remove(id)
        .then((data) => this.setState({error:'',}))
        .catch(() => {
            this.setState({
                error: 'Unable to remove a user. Try later.',
                list: prevList,
            });
            });
    };


    saveItem = (newUser) => {
        newUser = {...this.state.user};

        if (isNaN(newUser.id)) {
            this.createItem(newUser);
        } else {
            this.updateItem(newUser);
        }
    }

    createItem(newUser) {
        const prevList = [...this.state.list];
        this.setState({
            list: [...this.state.list, newUser],
        });
        this.api.create(newUser).then((data) => {
            console.log(data);
            this.setState({
                list: [...prevList, data],
                error:'',
            });
        })
        .catch(() => {
            this.setState({
                error: 'Unable to create a user. Try later.',
                list: prevList,
            });

        });
        
        this.resetUserForm();
    };

    resetUserForm() {
        this.setState({
            user: {
                name: '',
                surname: '',
                email: '',
                id: 'new',
            },
        });
    }

    oninputChange = (e) => {
        this.setState({
            user:{...this.state.user, [e.target.name]: e.target.value,}
        });
    };

}