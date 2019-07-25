import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import todoReducer from './reducers/todo-reducer';

const ROOT_KEY = 'root';
const TODO_REDUX_KEY = 'todo_redux';

const rootPersistConfig = {
    key: ROOT_KEY,
    storage: AsyncStorage,
    whitelist: ['todoReducer'],
};

const todoPersistConfig = {
    key: TODO_REDUX_KEY,
    storage: AsyncStorage,
    whitelist: ['toDos'],
    // blacklist: ['todoReducer'], blacklist reducer for persist
};

const rootReducer = combineReducers({todoReducer: persistReducer(todoPersistConfig, todoReducer)});


export const store = createStore(persistReducer(rootPersistConfig, rootReducer), compose(applyMiddleware(thunk)));

export const persistor = persistStore(store);