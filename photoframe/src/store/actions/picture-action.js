import { ACTION_TYPES } from './action-types';

const {CHANGE_PICTURE_ROWS, CHANGE_PICTURE_COLUMNS, CHANGE_PICTURE_PIXEL_COLOR, CLEARER_PICTURE} = ACTION_TYPES.PICTURE_ACTION_TYPES;

const changePictureRows = rows => ({type: CHANGE_PICTURE_ROWS, rows});
const changePictureColumns = columns => ({type: CHANGE_PICTURE_COLUMNS, columns});
const changePicturePixelColor = (x, y, color) => ({type: CHANGE_PICTURE_PIXEL_COLOR, x, y, color});
const clearPicture = (columns, rows) => ({type: CLEARER_PICTURE, columns, rows});

export const PICTURE_ACTION = {
    changePictureRows,
    changePictureColumns,
    changePicturePixelColor,
    clearPicture
};
