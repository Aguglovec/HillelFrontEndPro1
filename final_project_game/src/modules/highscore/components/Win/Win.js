import "./Win.css"

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { difficultySelector, endTimeSelector, highscoreSelector, isWinSelector, startTimeSelector } from '../../../../selectors/selectors';
import { resetWinState } from '../../../../store/actions/game25Actions';
import { timeMsToMin } from '../../../utils/utils';
import HighscoreForm from "../HighscoreForm/HighscoreForm";

function Win({diff,highscoreList}) {
    const dispatch = useDispatch();
    // const diff = useSelector(difficultySelector);
    // const win = useSelector(isWinSelector);
    // const highscoreList = useSelector(highscoreSelector);
    const time = useSelector(endTimeSelector) - useSelector(startTimeSelector);
//     const position=""
// useEffect(() => {

//       position = highscoreList.find((user)=> time < user.time ).position
//     }, [win, highscoreList])
    
function isHighscore() {
 if ( highscoreList.find((user)=> time < user.time )) {
    return <h3>Your place : {highscoreList.find((user)=> time < user.time ).position} </h3>
}
}

function winClick(e) {
dispatch(resetWinState());
// e.stopPropagation();

}

  return (
    <div className='big center' onClick={winClick}>
        <h1>Congratulation!</h1>
        <h3>You win with time:<br />{timeMsToMin(time)}</h3>
        {isHighscore()}
        {(isHighscore()) ? <HighscoreForm />:null}
    </div>
  )
}

export default Win