import './HighscoreHeader.css'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { difficultySelector, highscoreSelector } from '../../../../selectors/selectors';
import { setDifficulty } from '../../../../store/actions/game25Actions';


function HighscoreHeader() {
    const dispatch = useDispatch();
    const difficulty = useSelector(difficultySelector);
    const difs = ["easy", "regular", "hard"];

    function onDifClick(e) {
        dispatch(setDifficulty(e.target.id));
    }


    function tileClasses (dif) {
        if (dif === difficulty) {
            return "diffTile red"
        }
        return "diffTile"
    }

    return (
        <>
        <div className="container wide">
        <h1>Highscores:</h1>
        {difs.map((item) => (<span className={tileClasses(item)} onClick={onDifClick} key={item} id={item}>{item.toUpperCase()}</span>))}
        </div>
        </>
    )
}
export default HighscoreHeader