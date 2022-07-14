import React, { Component } from 'react';

export default class NewTodoForm extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
    };

    render() {
        return (
            <> 
        <form id="userForm" onSubmit={this.onFormSubmit}>
            <table className="u-full-width">
            <tbody>
            <tr id="newUser">
                <td><input 
                    className="form-input" 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={this.props.user.name} 
                    onChange={this.oninputChange}
                    autoFocus /></td>
                <td><input 
                    className="form-input" 
                    type="text" 
                    name="surname" 
                    placeholder="Surname" 
                    value={this.props.user.surname} 
                    onChange={this.oninputChange} /></td>
                <td><input 
                    className="form-input" 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={this.props.user.email}
                    onChange={this.oninputChange} /></td>
                <td><input 
                    className="form-input" 
                    type="text" 
                    name="id" 
                    placeholder="" 
                    value={this.props.user.id}  
                    onChange={this.oninputChange}
                    hidden /></td>
                <td className="userAction" >
                <button id="addBtn" className="">Save user</button></td>
            </tr></tbody>
            </table>
        </form>
        {/* <InputError /> */}
        {/* <div className="error" id="error"></div> */}
        </>



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
        }
        console.log(this.state);
        this.props.onSave(this.state);

        this.setState({
            name: '',
            surname: '',
            email: '',
        });
    };

    isValid (string) {
        if (string.length < 1) {
            return false;
        } 
        return true;
    }

}
