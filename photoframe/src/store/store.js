import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import * as config from '../config';
import colorPaletteReducer from './reducers/color-palette-reducer';
import currentColorReducer from './reducers/current-color-reducer';
import pictureReducer from './reducers/picture-reducer';
import deviceReducer from './reducers/device-reducer';

const rootPersistConfig = {
    key: config.root_key,
    storage: AsyncStorage,
    whitelist: ['colorPaletteReducer', 'pictureReducer'],
};

const colorPalettePersistConfig = {
    key: config.color_palette_key,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['colorPalette'],
    // blacklist: ['size', 'count'], blacklist reducer persist
};

const picturePersistConfig = {
    key: config.picture_key,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
};


export const rootReducer = combineReducers({
    colorPaletteReducer: persistReducer(colorPalettePersistConfig, colorPaletteReducer),
    pictureReducer: persistReducer(picturePersistConfig, pictureReducer),
    currentColorReducer,
    deviceReducer
});

export const store = createStore(persistReducer(rootPersistConfig, rootReducer), compose(applyMiddleware(thunk)));

export const persistor = persistStore(store);
