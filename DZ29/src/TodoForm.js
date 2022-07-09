import React, { Component } from 'react';

export default class TodoForm extends Component {

    state = {
        title: '',
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    name="title"
                    value={this.state.title}
                    onChange={this.oninputChange}
                />
                <button>Save task</button>
            </form>
        );
    }

    oninputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        for (let key in this.state) {
            if (!this.isValid(this.state[key])) {
                return null
            }
        this.props.onSave(this.state);
        this.reset(this.state);
        }
        

    };

    isValid (string) {
        if (string.length < 1) {
            return false;
        } 
        return true;
    }

    reset (obj) {
        for (let key in obj) {
            obj[key] = '';
        }
    }
}
