// import { getList, create, update, remove } from "../../components/RestApi/RestApi";
// import React from "react";
// import { useSelector } from "react-redux";
// import { maxTileSelector, searchingForSelector } from "../../selectors/selectors";

import getHighscores from "../../modules/highscore/services/highscoreServices";
import { getList } from "../../modules/RestApi/RestApi";


export const RESET_STATE = 'RESET_STATE';
export function  resetGameState (payload) {
    return { type: RESET_STATE, payload };
}

export const TILES_SET_LIST = 'TILES_SET_LIST';
export function  setTilesList (payload) {
    return { type: TILES_SET_LIST, payload };
}

export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export function  setDifficulty (payload) {
    return { type: SET_DIFFICULTY, payload };
}

export const SET_START_TIME = 'SET_START_TIME';
export function  setStartTime (payload) {
    return { type: SET_START_TIME, payload };
}

export const SET_END_TIME = 'SET_END_TIME';
export function  setEndTime (payload) {
    return { type: SET_END_TIME, payload };
}

export const WIN_SEQUENCE = 'WIN_SEQUENCE';
export function  winSequence (payload) {
    return { type: WIN_SEQUENCE, payload };
}

export const RESET_WIN = 'RESET_WIN';
export function  resetWinState (payload) {
    return { type: RESET_WIN, payload };
}

export const TILE_CLICKED = 'TILE_CLICKED';
export function  clickOnTile (payload) {
    return { type: TILE_CLICKED, payload };
}

export const UPDATE_TILE = 'UPDATE_TILE';
export function  updateTile (payload) {
    return { type: UPDATE_TILE, payload };
}

export const HIGHSCORE_SET_LIST = 'HIGHSCORE_SET_LIST';
export function  setTodoList (payload) {
    return { type: HIGHSCORE_SET_LIST, payload };
}


export const setBoard = (maxTile) => (dispatch) => {
    const tilesList = randomArr(maxTile).reduce((acc, value) => {
        return [...acc, {id:value, done:false, error:false, hidden:false, }]
    },[]);
    dispatch(setTilesList(tilesList));
}

function randomArr (max) {
    const tilesArr = [];
    while (tilesArr.length < max) {
        let randomNumber = Math.ceil(Math.random() * max);
        if (!tilesArr.includes(randomNumber)) {
            tilesArr.push(randomNumber);
        }
    }
    console.log(tilesArr);
    return tilesArr
}

// export const setDifficulty = (dif) => (dispatch) => {
//     dispatch(setDif(dif));
// }



export const resetErrorState = (tile) => (dispatch) => {
const tileReset = {...tile, error:false}
    dispatch(updateTile(tileReset));
}

export const fetchList = (diff) => (dispatch) => {
    getHighscores(diff)
        .then((data) => dispatch(setTodoList(data)))
};


