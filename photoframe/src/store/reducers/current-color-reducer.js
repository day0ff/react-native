import * as config from '../../config';

import { ACTION_TYPES } from '../actions/action-types';

const {SET_CURRENT_COLOR} = ACTION_TYPES.CURRENT_COLOR__ACTION_TYPES;

const INITIAL_STATE = {
    currentColor: config.color_palette_15[0]
};

const currentColorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_COLOR:
            return {...state, currentColor: action.currentColor};
        default:
            return state;
    }
};

export default currentColorReducer;
