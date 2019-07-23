import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import todoReducer from './reducers/todo-reducer';

const TODO_REDUX_KEY = 'todo_redux';

const persistConfig = {
    key: TODO_REDUX_KEY,
    storage: AsyncStorage,
    whitelist: ['todoReducer'],
    // blacklist: ['todoReducer'], blacklist reducer for persist
};

const rootReducer = combineReducers({todoReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

export const persistor = persistStore(store);