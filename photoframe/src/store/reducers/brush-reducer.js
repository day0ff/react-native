import * as config from '../../config';

import { ACTION_TYPES } from '../actions/action-types';

const {SET_BRUSH_TYPE} = ACTION_TYPES.BRUSH_ACTION_TYPES;

const INITIAL_STATE = {
    brushType: config.current_brush
};

const brushReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_BRUSH_TYPE:
            return {...state, brushType: action.brushType};
        default:
            return state;
    }
};

export default brushReducer;
