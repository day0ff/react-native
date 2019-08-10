import * as config from '../../config';

import { ACTION_TYPES } from '../actions/action-types';

const {
    CHANGE_PICTURE_COLUMNS,
    CHANGE_PICTURE_ROWS,
    CHANGE_PICTURE_PIXEL_COLOR,
    TOGGLE_PICTURE_PIXEL_COLORFUL,
    SET_PICTURE_PIXEL_COLORFUL,
    CLEARER_PICTURE
} = ACTION_TYPES.PICTURE_ACTION_TYPES;

const initArray = (columns, rows) => {
    return new Array(columns).fill(new Array(rows).fill({color: config.current_color, isColorful: false}));
};

const INITIAL_STATE = {
    columns: config.picture.columns,
    rows: config.picture.rows,
    picture: initArray(config.picture.columns, config.picture.rows)
};

const pictureReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_PICTURE_COLUMNS:
            return {...state, columns: action.columns};
        case CHANGE_PICTURE_ROWS:
            return {...state, rows: action.rows};
        case SET_PICTURE_PIXEL_COLORFUL:
            return {
                ...state,
                picture: state
                    .picture.map((pictureCol, column) =>
                        pictureCol.map((pixel, row) => {
                            const isColorful = column === +action.x && row === +action.y ? action.isColorful : pixel.isColorful;
                            return {
                                ...pixel,
                                isColorful
                            }
                        })
                    )
            };
        case TOGGLE_PICTURE_PIXEL_COLORFUL:
            return {
                ...state,
                picture: state
                    .picture.map((pictureCol, column) =>
                        pictureCol.map((pixel, row) => {
                            const isColorful = column === +action.x && row === +action.y ? !pixel.isColorful : pixel.isColorful;
                            return {
                                ...pixel,
                                isColorful
                            }
                        })
                    )
            };
        case CHANGE_PICTURE_PIXEL_COLOR:
            return {
                ...state,
                picture: state
                    .picture.map((pictureCol, column) =>
                        pictureCol.map((pixel, row) => {
                            const color = column === +action.x && row === +action.y ? action.color : pixel.color;
                            return {
                                ...pixel,
                                color
                            }
                        })
                    )
            };
        case CLEARER_PICTURE:
            return {...state, picture: initArray(action.columns, action.rows)};
        default:
            return state;
    }
};

export default pictureReducer;
