import { COLOR_PALETTE_ACTION_TYPES } from '../actions/action-types';

const {SET_CURRENT_COLOR} = COLOR_PALETTE_ACTION_TYPES;

const setCurrentColor = (currentColor) => ({type: SET_CURRENT_COLOR, currentColor});

export const CURRENT_COLOR_ACTION = {
    setCurrentColor
};
