import { ACTION_TYPES } from '../actions/action-types';

const {SET_CURRENT_COLOR} = ACTION_TYPES.CURRENT_COLOR__ACTION_TYPES;

const setCurrentColor = (currentColor) => ({type: SET_CURRENT_COLOR, currentColor});

export const CURRENT_COLOR_ACTION = {
    setCurrentColor
};
