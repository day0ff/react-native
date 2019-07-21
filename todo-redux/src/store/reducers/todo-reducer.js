import AsyncStorage from '@react-native-community/async-storage';

import { ADD_TODO, DELETE_TODO, LOAD_STORAGE, UPDATE_STORAGE } from '../actions/action-types';

const initialState = {
    toDos: []
    // toDos: [{title: "Do homework."}, {title: "By new stuffs."}]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STORAGE:
            return {...state, ...action.value};
        case UPDATE_STORAGE:
            AsyncStorage.setItem(action.key, JSON.stringify(action.value)).catch(() => ({}));
            return state;
        case ADD_TODO:
            return {
                ...state,
                toDos: [...state.toDos, {title: action.todo}]
            };
        case DELETE_TODO:
            return {
                ...state,
                toDos: [...state.toDos.filter((todo, todoIndex) => todoIndex !== action.index)]
            };
        default:
            return state;
    }
};

export default todoReducer;
