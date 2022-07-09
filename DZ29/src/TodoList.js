import React, { Component } from 'react';

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.list.map((todo) => (
                    <li
                        key={todo.id}
                    >
                        <span 
                            className={todo.isDone ? "taskDone" : ''}
                            onClick={() => this.props.onToggle(todo.id)}
                        >  
                        {todo.title} 
                        </span>&ensp;
                        <span 
                        onClick={() => this.props.onRemove(todo.id)} className="delete-btn">✘</span>
                    </li>
                ))}
            </ul>
        );
    }
}
