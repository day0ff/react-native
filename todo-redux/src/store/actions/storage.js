import { LOAD_STORAGE, UPDATE_STORAGE } from './action-types';

export const loadStorage = value => ({type: LOAD_STORAGE, value});
export const updateStorage = (key, value) => ({type: UPDATE_STORAGE, key, value});
