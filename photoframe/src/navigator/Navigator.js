import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Painter from '../pages/Painter/Painter';
import Storage from '../pages/Storage/Storage';
import Connection from '../pages/Connection/Connection';

const PainterNavigator = createStackNavigator(
    {
        painter: Painter
    },
    {
        initialRouteName: 'painter',
    }
);

const StorageNavigator = createStackNavigator(
    {
        storage: Storage
    },
    {
        initialRouteName: 'storage',
    }
);

const ConnectionNavigator = createStackNavigator(
    {
        connection: Connection
    },
    {
        initialRouteName: 'connection',
    }
);

const Navigator = createDrawerNavigator(
    {
        painter: PainterNavigator,
        storage: StorageNavigator,
        connection: ConnectionNavigator,
    },
    {
        initialRouteName: 'connection',
        drawerWidth: 200,
        contentOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            labelStyle: {
                textTransform: 'capitalize',
            },
        }
    },
);

export default createAppContainer(Navigator);
