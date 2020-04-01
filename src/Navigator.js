import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './screens/Home'
import Auth from './screens/Auth'
import AddTatto from './screens/AddTatto';

const MainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Home
    },
    AddTatto: {
        name: 'AddTatto',
        screen: AddTatto
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes,{
    initialRouteName: 'Auth'
})

export default createAppContainer(MainNavigator)
