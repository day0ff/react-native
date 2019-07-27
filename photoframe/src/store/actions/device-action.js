import { COLOR_PALETTE_ACTION_TYPES } from '../actions/action-types';

const {IS_BLUETOOTH_ENABLED, IS_DEVICE_CONNECTED} = COLOR_PALETTE_ACTION_TYPES;

const toggleBluethoos = isBluethoosEnabled => ({type: IS_BLUETOOTH_ENABLED, isBluethoosEnabled});
const toggleDevice = isDeviceEnabled => ({type: IS_DEVICE_CONNECTED, isDeviceEnabled});

export const DEVICE_ACTION = {
    toggleBluethoos,
    toggleDevice
};
