import { UPDATE_TILE, TILES_SET_LIST, TILE_CLICKED, WIN_SEQUENCE, SET_DIFFICULTY, HIGHSCORE_SET_LIST, RESET_STATE, SET_START_TIME, SET_END_TIME, RESET_WIN } from '../actions/game25Actions';

const INITIAL_VALUE = {
    list: [],
    highscoreList: [],
    difficulty: "easy",
    maxTile: 25,
    win:false,
    searchingFor: 1,
    startTime: null,
    endTime: null

};

// function resetErrorState(state, tile) {
//     return {...state, list: state.list.map((item) => item.id !== tile.id ? item : {...item, error:false})}
// }

function whenTileClicked(state, tile) {
    if (tile.id === state.searchingFor && tile.id === state.maxTile) {
        return {
            ...state, 
            win:true, 
            list: state.list.map((item) => item.id !== tile.id ? item : {...item, done:true})
        };

    } else if (tile.id === state.searchingFor) {
        return { 
            ...state, 
            searchingFor: ++state.searchingFor, 
            list: state.list.map((item) => item.id !== tile.id ? item : {...item, done:true})
        };

    } else if (tile.id > state.searchingFor) {
        return { 
            ...state, 
            list: state.list.map((item) => item.id !== tile.id ? item : {...item, error:true}) 
        };

    } else {
        return state
    }
}

export default function game25Reducer(state = INITIAL_VALUE, { type, payload },) {
    switch (type) {
        case RESET_STATE:
            return { ...INITIAL_VALUE};        
        case TILES_SET_LIST:
            return { ...state, list: payload };        
        case SET_DIFFICULTY:
            return { ...state, difficulty: payload };        
        case SET_START_TIME:
            return { ...state, startTime: payload };        
        case SET_END_TIME:
            return { ...state, endTime: payload };        
        case TILE_CLICKED:
            return  whenTileClicked(state, payload)
        case UPDATE_TILE:
            return { ...state, list: state.list.map((item) => item.id !== payload.id ? item : payload ) };
        case WIN_SEQUENCE:
            return { ...state, win:true};
        case RESET_WIN:
            return { ...state, win:false};
        case HIGHSCORE_SET_LIST:
            return { ...state, highscoreList: payload };        
                
        default:
            return state;
    }
}
