import todoReducer from './reducers/todoReducer';
import { createStore } from 'redux';

const store = createStore(todoReducer);

export default store;