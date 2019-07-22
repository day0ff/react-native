import { ADD_COLOR } from '../actions/types';

const initialState = {
    colors: []
};

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLOR:
            return {
                ...state,
                colors: state.colors.concat(action.color)
            };
        default:
            return state;
    }
};

export default colorReducer;