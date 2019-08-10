import { ACTION_TYPES } from '../actions/action-types';

const {SET_BRUSH_TYPE} = ACTION_TYPES.BRUSH_ACTION_TYPES;

const setBrushType = (brushType) => ({type: SET_BRUSH_TYPE, brushType});

export const BRUSH_ACTION = {
    setBrushType
};
