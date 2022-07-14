import React, { Component } from 'react';
import { createItem, getItemList, removeItem, updateItem } from '../../api';


import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';

export default class App extends Component {
    state = {
        list: [],
        user: {},
    };

    componentDidMount() {
        this.fetchList();
    }

    render() {
        return (
            <div className="container">
                {this.state.error ? this.state.error : null}
                <TodoList
                    list={this.state.list}
                    onToggle={this.toggleTodo}
                    onRemove={this.removeItem}
                />
                <NewTodoForm onSave={this.createItem} user={this.state.user} />
            </div>
        );
    }

    fetchList() {
        return getItemList()
            .then((data) => this.setState({ list: data }))
            .catch(() => {
                this.setState({
                    error: 'Something went wrong',
                });
            });
    }

    updateItem(updatedTodo) {
        const prevTodo = this.state.list.find(
            (item) => item.id === updatedTodo.id,
        );

        this.setState({
            list: this.state.list.map((item) =>
                item.id === updatedTodo.id ? updatedTodo : item,
            ),
        });

        return updateItem(updatedTodo).catch(() => {
            this.setState({
                error: 'Something went wrong',
                list: this.state.list.map((item) =>
                    item.id === prevTodo.id ? prevTodo : item,
                ),
            });
        });
    }

    toggleTodo = (id) => {
        const todo = this.state.list.find((item) => item.id === id);
        this.setState({
            user: {todo},
            })

        // this.updateItem({ ...todo, isDone: !todo.isDone });
    };

    removeItem = (id) => {
        const newList = this.state.list.filter((item) => item.id !== id);

        this.setState({
            list: newList,
        });

        return removeItem(id);
    };

    createItem = (newTodo) => {
        newTodo = {
            ...newTodo,
            isDone: false,
        };

        createItem(newTodo).then((data) => {
            this.setState({
                list: [...this.state.list, data],
            });
        });
    };
}
