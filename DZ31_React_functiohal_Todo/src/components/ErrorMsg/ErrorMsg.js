import React from 'react';
import './ErrorMsg.css'

export default function UserList ({error}) {

        return (
            <div className='error'>{error ? error : null}</div>
);

}
