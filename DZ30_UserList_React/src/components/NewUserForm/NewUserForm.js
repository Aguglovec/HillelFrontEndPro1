import React, { Component } from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

export default class NewUserForm extends Component {
    state = {
        error: '',
    };

render() {
            return (
            <> 
            <ErrorMsg error={this.state.error} />
            <form id="userForm" onSubmit={this.onFormSubmit}>
                <table className="u-full-width">
                <tbody>
                <tr>
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
                    <td>
                    <button id="addBtn" >Save user</button></td>
                </tr></tbody>
                </table>
            </form>
            </>
    
    
    
            );
        }
    
        oninputChange = (e) => {
            this.setState({error: '',});
            this.props.onInput(e);
        };
    
        onFormSubmit = (e) => {
            e.preventDefault();
            for (let key in this.props.user) {

                if (!this.isValid(this.props.user[key])) {
                    this.setState({
                        error: 'Please enter user\'s  ' + key + '.',
                    });
                    return null
                }
            }
            console.log(this.props.user);
            this.setState({error: '',});
            this.props.onSave(this.props.user);
    
    
        };
    
        isValid (string) {
            if (string.length < 1) {
                return false;
            } 
            return true;
        }
    
    }
    