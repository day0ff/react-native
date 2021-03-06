import { UPLOAD_TODOS, ADD_TODO, DELETE_TODO } from '../actions/action-types';

const initialState = {
    toDos: []
    // toDos: [{title: "Do homework."}, {title: "By new stuffs."}]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_TODOS:
            return {...state, toDos: [...action.toDos]};
        case ADD_TODO:
            return {...state, toDos: [...state.toDos, {title: action.todo}]};
        case DELETE_TODO:
            return {...state, toDos: [...state.toDos.filter((todo, todoIndex) => todoIndex !== action.index)]};
        default:
            return state;
    }
};

export default todoReducer;
