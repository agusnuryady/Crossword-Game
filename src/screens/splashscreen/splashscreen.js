import React, {Component} from 'react'
import {View,Text,TextInput,Alert,TouchableOpacity,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon} from  'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import {storageData} from '../../utils'

const Global = require('../../component/Global')
const url = Global.URL

var {width,height}=Dimensions.get('window')

export default class SplashScreen extends Component {

    constructor(){
        super()
        this.state={
            //token:'',
        }
    }

    componentDidMount() {
        this.GoToApp()
    }

    GoToApp = () => {
        setTimeout( async () => {
            let token = await AsyncStorage.getItem('token')
            if (token) {
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Auth' })]
                }))
            } else {
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'App' })]
                }))
            }
        }, 2000)
    }

    render() {
        return(
            <LinearGradient
                start={{x: 1.5, y: 0.3}}
                end={{x: 0.5, y: 1.4}}
                colors={[
                    "#f2e8d8","#f9e4be","#fde0a4","#fde0a4","#ffdd8a","#ffe28b","#ffe7a6","#fdedc1","#fbf2dc",

                    "#daedf0","#b5dee9","#91cde6","#6fbce5","#50a9e4","#47a5e3","#3ea2e2","#339ee1","#40a9e0",
                    "#53b4de","#68bedc","#7fc7da"
                ]}
                style={styles.container} >
                <View style={styles.content} >
                    <View style={styles.contentItem} >
                        <Image
                            style={styles.image}
                            source={require('../../component/img/crossword-logo.png')}/>
                        <Text style={styles.text1} >
                            CROSSWORD PUZZLE
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }

}