import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { difficultySelector, endTimeSelector, highscoreSelector, isWinSelector, startTimeSelector } from '../../../../selectors/selectors';
import { resetWinState } from '../../../../store/actions/game25Actions';
import { timeMsToMin } from '../../../utils/utils';

function Win() {
    const dispatch = useDispatch();
    const diff = useSelector(difficultySelector);
    const win = useSelector(isWinSelector);
    const highscoreList = useSelector(highscoreSelector);
    const time = useSelector(endTimeSelector) - useSelector(startTimeSelector);


    
function isHighscore() {
 console.log( highscoreList.find((user)=> time < user.time ))
    return highscoreList.find((user)=> time < user.time ).position
}


function winClick(e) {
dispatch(resetWinState());
// e.stopPropagation();

}

  return (
    <div className='big center' onClick={winClick}>
        <h1>Congratulation!</h1>
        <h3>You win with time {timeMsToMin(time)} </h3>
        <h3>Your place : {isHighscore() ? isHighscore() : ""} </h3>
    </div>
  )
}

export default Win