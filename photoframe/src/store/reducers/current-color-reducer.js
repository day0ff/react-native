import * as config from '../../config';

import { COLOR_PALETTE_ACTION_TYPES } from '../actions/action-types';

const {SET_CURRENT_COLOR} = COLOR_PALETTE_ACTION_TYPES;

const INITIAL_STATE = {
    currentColor: config.current_color
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
