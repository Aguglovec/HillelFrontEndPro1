import todoReducer from './reducers/todoReducer';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(
    todoReducer,
    applyMiddleware(
        thunk,
        createLogger({
            collapsed: true,
        }),
    ),
);


export default store;