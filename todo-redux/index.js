import { AppRegistry } from 'react-native';
import React from 'react';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/store/store';

const RNRedux = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <App/>
        </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
