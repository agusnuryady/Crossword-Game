import React, {Component} from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import SplashScreen from './app/splashscreen/splashscreen'
import Login from './app/login/login'
import Register from './app/register/register'
import Home from './app/home/home'

const AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {header: null}
  },
  Login: {
    screen: Login,
    navigationOptions: {header: null}
  },
  Register: {
    screen: Register,
    navigationOptions: {header: null}
  },
  Home: {
    screen: Home,
    navigationOptions: {header: null}
  },
}, {
    initialRouteName: 'SplashScreen',
})

const ShowScreen = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <ShowScreen/>
    )
  }
}