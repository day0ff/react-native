import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Painter from '../pages/Painter/Painter';
import Storage from '../pages/Storage/Storage';

const Navigator = createBottomTabNavigator(
    {
        painter: Painter,
        storage: Storage,
    },
    {
        initialRouteName: 'painter',
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

export default createAppContainer(Navigator);
