import * as config from '../../config';

import { ACTION_TYPES } from '../actions/action-types';

const {CHANGE_PICTURE_COLUMNS, CHANGE_PICTURE_ROWS, CHANGE_PICTURE_PIXEL_COLOR, CLEARER_PICTURE} = ACTION_TYPES.PICTURE_ACTION_TYPES;

const initArray = (columns, rows) => {
    return new Array(columns).fill(new Array(rows).fill(config.current_color));
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
        case CHANGE_PICTURE_PIXEL_COLOR:
            return {
                ...state,
                picture: state
                    .picture.map((pictureCol, column) =>
                        pictureCol.map((color, row) =>
                            column === action.x && row === action.y ? action.color : color
                        )
                    )
            };
        case CLEARER_PICTURE:
            return {...state, picture: initArray(action.columns, action.rows)};
        default:
            return state;
    }
};

export default pictureReducer;
