import './css/skeleton.css';
// import './css/normalize.css';
import './css/dark-theme.css';




import './App.css';


import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                title: 'Make a To Do list',
                isDone: true,
            },
            {
                id: 2,
                title: 'Check off the first thing on the To Do List',
                isDone: true,
            },
            {
                id: 3,
                title: 'Realise you have already completed 2 things on the list',
                isDone: true,
            },
            {
                id: 4,
                title: 'Reward yourself with a nap',
                isDone: false,
            },
        ],
    };

    render() {
        return (
            <>
                <h2>To Do List</h2>
                <TodoList
                    list={this.state.list}
                    onRemove={this.removeTodo} 
                    onToggle={this.toggleTodo}
                />
                <TodoForm onSave={this.createTodo} />
            </>
        );
    }

    removeTodo = (id) => {
        this.setState({
            list: this.state.list.filter((todo) => todo.id !== id),
        });
    };

    createTodo = (newTodo) => {
        this.setState({
            list: [...this.state.list, { ...newTodo, id: Date.now(), isDone:false }],
        });
    };

    toggleTodo = (id) => {
        const toggledTodo = this.state.list.find((todo) => todo.id === id);
        toggledTodo.isDone = !toggledTodo.isDone;
        this.updateTodo (toggledTodo);
        // this.setState({
        //     list: [...this.state.list],
        // });
    }

    updateTodo (updatedTodo) {
        this.setState({
            list: this.state.list.map((todo) => todo.id !== updatedTodo.id ? todo : updatedTodo),
        });
    }
}
