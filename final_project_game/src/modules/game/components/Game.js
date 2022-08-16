import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isWinSelector } from '../../../selectors/selectors';
import { resetGameState, setBoard, setDifficulty, setEndTime, setStartTime } from '../../../store/actions/game25Actions';
import Board from './Board/Board';
import Timer from './Timer/Timer';

function Game({difficulty}) {
  const dispatch = useDispatch();
  const win = useSelector(isWinSelector);
  const navigate = useNavigate();

  useEffect (() => {
    dispatch(resetGameState());
      dispatch(setBoard(25));
      dispatch(setDifficulty(difficulty));
      dispatch(setStartTime(Date.now()));

  }, []);

  useEffect (() => {
    if (win) {
      dispatch(setEndTime(Date.now()));
      navigate ("/highscore")
    }
}, [win, navigate]);

  return (
    <>
    <Timer />
    <Board />
    </>
  )
}

export default Game