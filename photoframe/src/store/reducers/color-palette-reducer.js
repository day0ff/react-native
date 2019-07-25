import { COLOR_PALETTE_ACTION_TYPES } from '../actions/action-types';

const {LOAD_COLOR_PALETTE, CHANGE_COLOR} = COLOR_PALETTE_ACTION_TYPES;

const INITIAL_STATE = {
    colorPalette: new Array(16).fill(({color: 'FFF'}))
};

const colorPaletteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_COLOR_PALETTE:
            return {...state, colorPalette: [...action.colorPalette]};
        case CHANGE_COLOR:
            return {
                ...state,
                colorPalette: state.colorPalette.map((color, index) => index === action.index ? ({color: action.color}) : color)
            };
        default:
            return state;
    }
};

export default colorPaletteReducer;