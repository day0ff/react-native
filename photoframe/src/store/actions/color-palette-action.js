import { ACTION_TYPES } from '../actions/action-types';

const {CHANGE_COLOR} = ACTION_TYPES.COLOR_PALETTE_ACTION_TYPES;

const changeColor = (index, color) => ({type: CHANGE_COLOR, index, color});

export const COLOR_PALETTE_ACTION = {
    changeColor
};