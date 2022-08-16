import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { difficultySelector, highscoreSelector, isWinSelector } from '../../../selectors/selectors';
import { fetchList } from '../../../store/actions/game25Actions';
import HighscoreHeader from './HighscoreHeader/HighscoreHeader';
import UserList from './UserList/UserList';
import Win from './Win/Win';

function HighscoreComponent() {
      const dispatch = useDispatch();
      const diff = useSelector(difficultySelector);
      const win = useSelector(isWinSelector);
      const highscoreList = useSelector(highscoreSelector);

    useEffect (() => {
        dispatch(fetchList(diff));
// eslint-disable-next-line
    }, [diff]);


  return (
    <>
    { (win) ? <Win diff = {diff} highscoreList = {highscoreList} /> : ""}
    <HighscoreHeader  />
    <UserList list={highscoreList} />
    {/* <UserList list={highscoreList.filter((item) => (item.difficulty === diff))} /> */}
    </>
  )
}

export default HighscoreComponent