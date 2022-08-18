import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isStartSelector, isWinSelector } from '../../../../selectors/selectors';
import { resetGameState, setBoard, setDifficulty, setEndTime, setStart, setStartTime } from '../../../../store/actions/game25Actions';
import Board from '../Board/Board';
import Timer from '../Timer/Timer';
import Countdown from '../Countdown/Countdown';
import { DIFF_EASY, START_DELAY } from '../../../../config';

function Game({difficulty}) {
  const dispatch = useDispatch();
  const win = useSelector(isWinSelector);
  const start = useSelector(isStartSelector);
  const navigate = useNavigate();

  useEffect (() => {
    dispatch(resetGameState());
    dispatch(setBoard(25));
    dispatch(setDifficulty(difficulty));

    if (difficulty === DIFF_EASY) {
      dispatch(setStart());
      dispatch(setStartTime(Date.now()));
    } else {
      setTimeout(() => {
        dispatch(setStart());
        dispatch(setStartTime(Date.now()));
      }, START_DELAY); 

    }

  }, [dispatch, difficulty]);

  useEffect (() => {
    if (win) {
      dispatch(setEndTime(Date.now()));
      navigate ("/highscore")
    }
}, [win, navigate, dispatch]);

  return (
    <>
    {(start) ? <Timer /> : <Countdown mSeconds={START_DELAY}/> }
    <Board />
    </>
  )
}

export default Game