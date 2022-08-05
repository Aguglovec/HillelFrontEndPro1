import { Outlet } from 'react-router-dom';
import React from 'react';

function App() {
    return (
        <div>
            <header>Application header</header>
            <Outlet />
            <footer>Application footer</footer>
        </div>
    );
}

export default App;
