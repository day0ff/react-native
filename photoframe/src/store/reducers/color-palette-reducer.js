import * as config from '../../config';

import { COLOR_PALETTE_ACTION_TYPES } from '../actions/action-types';

const {LOAD_COLOR_PALETTE, CHANGE_COLOR} = COLOR_PALETTE_ACTION_TYPES;

const INITIAL_STATE = {
    colorPalette: config.color_palette_15
};

const colorPaletteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_COLOR_PALETTE:
            return {...state, colorPalette: [...action.colorPalette]};
        case CHANGE_COLOR:
            return {
                ...state,
                colorPalette: state.colorPalette.map((color, index) => index === action.index ? action.color : color)
            };
        default:
            return state;
    }
};

export default colorPaletteReducer;
