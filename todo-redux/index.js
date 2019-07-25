import { AppRegistry } from 'react-native';
import React from 'react';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { View, ActivityIndicator } from 'react-native';

import { store, persistor } from './src/store/store';

const loading = (<View><ActivityIndicator size="large"/></View>);

const RNRedux = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={loading}>
            <App/>
        </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
