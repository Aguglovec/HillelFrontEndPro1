import React, { useState } from 'react'

function HighscoreForm() {
    const [name, setName] = useState("")

    function onHighscoreSubmit(e) {
        e.preventDefault();
        console.log(name);
    }
    
return (
    <form onClick={(e) => e.stopPropagation()} onSubmit={onHighscoreSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>Submit</button>
    </form>
    )
}

export default HighscoreForm