import Home from '../pages/Home/Home';
import ToDos from '../pages/ToDos/ToDos';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

const AppNavigator = createBottomTabNavigator(
    {
        home: Home,
        todos: ToDos
    },
    {
        initialRouteName: "home",
        tabBarOptions: {
            activeTintColor: '#e91e63',
            tabStyle:{
                paddingLeft:5,
                paddingRight:5,
            },
            labelStyle: {
                fontSize: 18,
                height:'100%',
                padding:10,
                borderWidth:1,
                borderRadius:8,
                borderColor:'gray',
            },
            style: {
                display:'flex',
                backgroundColor: 'white',
                alignItems:'center',
            },
        }
    },

);

export default createAppContainer(AppNavigator);
