import React, { Component } from 'react'
import {StatusBar,View,Text,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon} from  'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

const Global = require('../component/Global')
const url = Global.URL

var {width,height}=Dimensions.get('window')

export default class Login extends Component {

    constructor(){
        super()
        this.state={
            passwordInvisible: true,
        }
    }

    render() {
        return (
            <LinearGradient
                start={{x: 1.5, y: 0.3}} 
                end={{x: 0.5, y: 1.4}}
                colors={[
                    "#fde0a4","#ffdd8a","#ffda6e","#ffdb6e","#ffdc6e","#ffdd6e","#ffe28b","#ffe7a6", 
                    // "#fdedc1", 
                    // "#fbf2dc",
                ]} 
                style={styles.container} >
                <View style={styles.content} >
                    <StatusBar backgroundColor='#fde0a4' barStyle='dark-content'/>
                    <View style={styles.contentItem} >
                        <Image
                            style={styles.image}
                            source={require('../component/img/crossword-logo.png')}/>
                        <Text style={styles.text1} >
                            CROSSWORD PUZZLE
                        </Text>
                    </View>
                    <View style={styles.contentItem2} >
                        <View style={styles.inputBox} >
                        <TextInput 
                            style={styles.inputText}
                            placeholder='Email' 
                            placeholderTextColor= 'gray' />
                        </View>
                        <View style={styles.inputBox} >
                            <TextInput 
                                style={styles.inputText2}
                                secureTextEntry= {this.state.passwordInvisible}
                                placeholder='Password' 
                                placeholderTextColor= 'gray' />
                            <TouchableOpacity
                                style={styles.iconBox}
                                onPress={()=> this.setState({passwordInvisible: !this.state.passwordInvisible})}
                            >
                                <Icon 
                                    name={this.state.passwordInvisible === true ? 'eye-with-line': 'eye'} 
                                    type='Entypo' style={styles.iconItem} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={ ()=> {
                                this.props.navigation.dispatch(StackActions.reset({
                                    index: 0,
                                    actions: [
                                    NavigationActions.navigate({ routeName: 'Home' })
                                    ],
                                }))
                            } }
                            style={styles.inputBox2} >
                            <Text style={styles.iconItem2} >
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.contentItem3} >
                            <Text style={styles.text2} >
                                Not registered?
                            </Text>
                            <TouchableOpacity 
                                onPress={ ()=> this.props.navigation.navigate('Register') }
                                style={styles.inputBox3} >
                                <Text style={styles.text3} >
                                    Create an account
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}
