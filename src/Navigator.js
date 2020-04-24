import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './screens/Home'
import Auth from './screens/Auth'
import AddTatto from './screens/AddTatto';
import Viveiro from './screens/Viveiro';

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
    },
    Viveiro: {
        name: 'Viveiro',
        screen: Viveiro
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes,{
    initialRouteName: 'Auth'
})

export default createAppContainer(MainNavigator)
