import { Link } from 'react-router-dom';
import React from 'react';

function Heading() {
    return (
        <div>
            <Link to="/albums">Go to all albums</Link>
        </div>
    );
}

export default Heading;
