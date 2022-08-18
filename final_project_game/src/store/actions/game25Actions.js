import { getHighscores, putHighscore } from "../../modules/highscore/services/highscoreServices";

export const RESET_STATE = 'RESET_STATE';
export function  resetGameState (payload) {
    return { type: RESET_STATE, payload };
}

export const SET_TILES_LIST = 'SET_TILES_LIST';
export function  setTilesList (payload) {
    return { type: SET_TILES_LIST, payload };
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

export const SET_START = 'SET_START';
export function  setStart (payload) {
    return { type: SET_START, payload };
}

export const SET_WIN = 'SET_WIN';
export function  winSequence (payload) {
    return { type: SET_WIN, payload };
}

export const RESET_WIN = 'RESET_WIN';
export function  resetWinState (payload) {
    return { type: RESET_WIN, payload };
}

export const TILE_CLICKED = 'TILE_CLICKED';
export function  clickOnTile (payload) {
    return { type: TILE_CLICKED, payload };
}

export const RESET_TILE_ERROR = 'RESET_TILE_ERROR';
export function  resetErrorState (payload) {
    return { type: RESET_TILE_ERROR, payload };
}

export const HIGHSCORE_SET_LIST = 'HIGHSCORE_SET_LIST';
export function  setHighscoreList (payload) {
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


export const fetchList = (diff) => (dispatch) => {
    getHighscores(diff)
        .then((data) => dispatch(setHighscoreList(data)))
        .catch(() => {
            throw new Error("Something went wrong during highscore fetch.")
        })
};

export const submitHighscore = (diff, highscore, highscoreList) => (dispatch) => {
    const newHighscoreList = highscoreList.map((user) => {
        if (highscore.time > user.time) {
            return user
        } else {
            const newUser = {...user, ...highscore};
            highscore = {userName:user.userName, time:user.time};
            return newUser
        }
        })
    
    dispatch(setHighscoreList(newHighscoreList));

    function f(i = 0) {
        if (i < newHighscoreList.length ){
        putHighscore(diff, newHighscoreList[i])
        .then(() => {f(++i)})
        .catch(() => {
            dispatch(setHighscoreList(highscoreList));
            throw new Error("Something went wrong during highscore submit.")
        })  }
    }
    f(); 
};

