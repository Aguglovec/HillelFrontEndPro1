import "./menu.css"

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { resetGameState } from "../../../store/actions/game25Actions";

function MenuComponent() {
const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(resetGameState());

// }, [])


  return (
    <>
    <div className="">
    <div>Choose your difficulty:</div>
    <Link to="/easy">Easy Game</Link><br />
    <Link to="/regular">Regular Game</Link><br />
    <Link to="/hard">Hard Game</Link><br />
    <br />
    <Link to="/highscore">Highscore</Link><br />
    <br />
    </div>
    </>
    
  )
}

export default MenuComponent