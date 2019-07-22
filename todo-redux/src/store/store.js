import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import todoReducer from './reducers/todo-reducer';
import storageReducer from './reducers/storage-reducer';

const rootReducer = combineReducers({todoReducer, storageReducer});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;
