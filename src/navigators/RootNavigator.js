import React, {Component} from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import SplashScreen from '../screens/splashscreen/splashscreen'
import Login from '../screens/login/login'
import Register from '../screens/register/register'
import Home from '../screens/home/home'

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
})

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  },
})

const RootNavigator = createSwitchNavigator(
  {
    Load: SplashScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Load',
    defaultNavigationOptions: {
      header: null
    }
  }
)


export default createAppContainer(RootNavigator);
