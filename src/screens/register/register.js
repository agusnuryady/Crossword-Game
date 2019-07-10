import React, { Component } from 'react'
import {StatusBar,View,Text,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon} from  'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

const Global = require('../../component/Global')
const url = Global.URL

var {width,height}=Dimensions.get('window')

export default class Register extends Component {

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
                    "#91cde6","#6fbce5","#50a9e4","#47a5e3","#3ea2e2","#339ee1","#40a9e0", 
                    "#53b4de","#68bedc","#7fc7da"
                ]} 
                style={styles.container} >
                <View style={styles.content} >
                    <StatusBar backgroundColor='#6fbce5' barStyle='dark-content'/>
                    <View style={styles.contentItem} >
                        <Image
                            style={styles.image}
                            source={require('../../component/img/crossword-logo.png')}/>
                        <Text style={styles.text1} >
                            CROSSWORD PUZZLE
                        </Text>
                    </View>
                    <View style={styles.content2} >
                        <View style={styles.contentItem4} >
                            <Text style={styles.text4} >
                                REGISTER
                            </Text>
                        </View>
                        <View style={styles.contentItem2} >
                            <View style={styles.inputBox} >
                            <TextInput 
                                style={styles.inputText}
                                placeholder='Email' 
                                placeholderTextColor= '#D9EDF0' />
                            </View>
                            <View style={styles.inputBox} >
                            <TextInput 
                                style={styles.inputText}
                                placeholder='Username' 
                                placeholderTextColor= '#D9EDF0' />
                            </View>
                            <View style={styles.inputBox} >
                                <TextInput 
                                    style={styles.inputText2}
                                    secureTextEntry= {this.state.passwordInvisible}
                                    placeholder='Password' 
                                    placeholderTextColor= '#D9EDF0' />
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
                                onPress={ ()=> this.props.navigation.navigate('Login') }
                                style={styles.inputBox2} >
                                <Text style={styles.iconItem2} >
                                    REGISTER NOW
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}
