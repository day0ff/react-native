import AsyncStorage from '@react-native-community/async-storage';

import { UPLOAD_TODOS, ERROR_STORAGE, UPDATE_STORAGE } from './action-types';

export const loadStorage = key => dispatch => AsyncStorage.getItem(key)
    .then(storage => dispatch({type: UPLOAD_TODOS, toDos: JSON.parse(storage).toDos}))
    .catch(() => dispatch({type: ERROR_STORAGE}));

export const updateStorage = (key, value) => dispatch => AsyncStorage.setItem(key, JSON.stringify(value))
    .then(() => dispatch({type: UPDATE_STORAGE, storage: value}))
    .catch(() => dispatch({type: ERROR_STORAGE}));

