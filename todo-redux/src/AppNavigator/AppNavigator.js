import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Home from '../pages/Home/Home';
import ToDos from '../pages/ToDos/ToDos';
import Modal from '../pages/Modal/Modal';
import Gesture from '../pages/Gesture/Gesture';
import Storage from '../pages/Storage/Storage';

const StackNavigator = createStackNavigator(
    {
        todos: ToDos,
        details: Modal,
    },
    {
        initialRouteName: 'todos',
    }
);

const AppNavigator = createBottomTabNavigator(
    {
        home: Home,
        todos: StackNavigator,
        gesture: Gesture,
        storage: Storage,
    },
    {
        initialRouteName: 'gesture',
        tabBarOptions: {
            activeTintColor: '#e91e63',
            tabStyle: {
                paddingLeft: 5,
                paddingRight: 5,
            },
            labelStyle: {
                fontSize: 18,
                height: '100%',
                padding: 10,
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'gray',
            },
            style: {
                display: 'flex',
                backgroundColor: 'white',
                alignItems: 'center',
            },
        }
    },
);

export default createAppContainer(AppNavigator);
