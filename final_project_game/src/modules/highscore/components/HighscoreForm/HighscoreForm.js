import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { resetWinState } from '../../../../store/actions/game25Actions';

function HighscoreForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    function onHighscoreSubmit(e) {
        e.preventDefault();
        dispatch(resetWinState());
        console.log(name);
    }
    
return (
    <>
    <form onClick={(e) => e.stopPropagation()} onSubmit={onHighscoreSubmit}>
    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
    <button>Submit</button>
    </form>
    </>
    )
}

export default HighscoreForm