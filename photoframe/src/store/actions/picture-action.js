import { ACTION_TYPES } from './action-types';

const {
    CHANGE_PICTURE_ROWS,
    CHANGE_PICTURE_COLUMNS,
    CHANGE_PICTURE_PIXEL_COLOR,
    TOGGLE_PICTURE_PIXEL_COLORFUL,
    SET_PICTURE_PIXEL_COLORFUL,
    CLEARER_PICTURE
} = ACTION_TYPES.PICTURE_ACTION_TYPES;

const changePictureRows = rows => ({type: CHANGE_PICTURE_ROWS, rows});
const changePictureColumns = columns => ({type: CHANGE_PICTURE_COLUMNS, columns});
const changePicturePixelColor = (x, y, color) => ({type: CHANGE_PICTURE_PIXEL_COLOR, x, y, color});
const setPicturePixelColorful = (x, y, isColorful) => ({type: SET_PICTURE_PIXEL_COLORFUL, x, y, isColorful});
const togglePicturePixelColorful = (x, y) => ({type: TOGGLE_PICTURE_PIXEL_COLORFUL, x, y});
const clearPicture = (columns, rows) => ({type: CLEARER_PICTURE, columns, rows});

export const PICTURE_ACTION = {
    changePictureRows,
    changePictureColumns,
    changePicturePixelColor,
    setPicturePixelColorful,
    togglePicturePixelColorful,
    clearPicture,
};
