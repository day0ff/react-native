import { ADD_TODO, DELETE_TODO } from '../actions/types';

const initialState = {
    todo: null,
    toDos: [{title: "Do homework."}, {title: "By new stuffs."}]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: null,
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