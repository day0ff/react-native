import { ERROR_STORAGE, LOAD_STORAGE, UPDATE_STORAGE } from '../actions/action-types';

const initialState = {
    toDos: []
};

const storageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STORAGE:
            return {...state, toDos: [...action.storage.toDos]};
        case UPDATE_STORAGE:
            return {...state, ...action.storage};
        case ERROR_STORAGE:
            return state;
        default:
            return state;
    }
};

export default storageReducer;
