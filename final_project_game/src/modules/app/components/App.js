import "./App.css"

import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';

function App() {
    return (
        <div className='center'>
            <h1>Game 25</h1>
            <Provider store={store}>
                <Outlet />
            </Provider>
            <br />
            <footer><Link to="/menu">Return to start menu</Link></footer>
        </div>
    );
}

export default App;
