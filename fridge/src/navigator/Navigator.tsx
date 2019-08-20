import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Loading from '../screens/Loading';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Other from '../screens/Other';

const AuthStack = createStackNavigator(
  {
    'sign-in': SignIn
  },
  {
    initialRouteName: 'sign-in',
  },
);

const AppStack = createStackNavigator(
  {
    home: Home,
    other: Other,
  },
  {
    initialRouteName: 'home',
  },
);

const Navigator = createSwitchNavigator(
  {
    loading:Loading,
    app: AppStack,
    auth: AuthStack,
  },
  {
    initialRouteName: 'loading',
  },
);

export default createAppContainer(Navigator);
