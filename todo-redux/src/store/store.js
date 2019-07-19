import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todo-reducer';

const rootReducer = combineReducers({todoReducer});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
