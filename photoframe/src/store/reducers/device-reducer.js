import { COLOR_PALETTE_ACTION_TYPES } from '../actions/action-types';

const {IS_BLUETOOTH_ENABLED, IS_DEVICE_CONNECTED} = COLOR_PALETTE_ACTION_TYPES;

const INITIAL_STATE = {
    isBluethoosEnabled: false,
    isDeviceEnabled: false
};

const deviceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IS_BLUETOOTH_ENABLED:
            return {...state, isBluethoosEnabled: action.isBluethoosEnabled};
        case IS_DEVICE_CONNECTED:
            return {...state, isDeviceEnabled: action.isDeviceEnabled};
        default:
            return state;
    }
};

export default deviceReducer;
