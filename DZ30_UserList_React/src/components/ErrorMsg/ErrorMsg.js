import React, { Component } from 'react';
import './ErrorMsg.css'

export default class UserList extends Component {
    render() {
        return (
            <div className='error'>{this.props.error ? this.props.error : null}</div>
);
}
}
