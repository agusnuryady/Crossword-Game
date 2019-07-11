import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../screens/splashscreen/splashscreen';
import Login from '../screens/login/login';
import Register from '../screens/register/register';
import Home from '../screens/home/home';
import Crossword from '../screens/game/crossword';

const AppStack = createStackNavigator(
  {
    Home: Home,
    Crossword: Crossword
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Register: Register
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const RootNavigator = createStackNavigator(
  {
    Load: SplashScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Load',
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(RootNavigator);
