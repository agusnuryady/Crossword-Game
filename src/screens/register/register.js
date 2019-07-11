import React, { Component } from 'react'
import {StatusBar,View,Text,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon} from  'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import axios from 'axios'
const Global = require('../../component/Global')
const url = Global.URL

var {width,height}=Dimensions.get('window')

export default class Register extends Component {

    constructor(){
        super()
        this.state={
            email:'',
            username:'',
            password:'',
            passwordInvisible: true,
            isEmailValid:true,
            isUsernameValid:true,
            isPasswordValid:true,
        }
    }
    async _handlingRegister() {
        try {
          const response = await axios.post(`${URL.URL}register`,{
              email:this.state.email,
              password:this.state.password,
              username:this.state.username
          });
          if(response.status == 200){
            console.log(response)
            AsyncStorage.setItem('token',response.data.token)
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Gameboards' })
                ],
              }))

          }
        } catch (error) {

                console.log(error.response);
                if(error.response.data.some(data=>data.field=="email")){
                  this.setState({isEmailValid:false})
              }else{
                  this.setState({isEmailValid:true})
              }
              if(error.response.data.some(data=>data.field=="username")){
                  this.setState({isUsernameValid:false})
              }else{
                  this.setState({isUsernameValid:true})
              }
              if(error.response.data.some(data=>data.field=="password")){
                  this.setState({isPasswordValid:false})
              }else{
                  this.setState({isPasswordValid:true})
              }
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
                            <View style={(this.state.isEmailValid===false) ? [styles.inputBox,{borderColor:'red',borderWidth:1}] : styles.inputBox} >
                            <TextInput
                                style={styles.inputText}
                                placeholder='Email'
                                placeholderTextColor= '#D9EDF0' onChangeText={(email) =>{this.setState({email})}} />
                            </View>
                            <View style={(this.state.isUsernameValid===false) ? [styles.inputBox,{borderColor:'red',borderWidth:1}] : styles.inputBox} >
                            <TextInput
                                style={styles.inputText}
                                placeholder='Username'
                                placeholderTextColor='#D9EDF0' onChangeText={(username) => {this.setState({username})}} />
                            </View>
                            <View style={(this.state.isPasswordValid===false) ? [styles.inputBox,{borderColor:'red',borderWidth:1}] : styles.inputBox} >
                                <TextInput
                                    style={styles.inputText2}
                                    secureTextEntry= {this.state.passwordInvisible}
                                    placeholder='Password'
                                    placeholderTextColor= '#D9EDF0' onChangeText={(password) => {this.setState({password})}} />
                                <TouchableOpacity
                                    style={styles.iconBox}
                                    onPress={() => this.setState({passwordInvisible: !this.state.passwordInvisible})}
                                >
                                    <Icon
                                        name={this.state.passwordInvisible === true ? 'eye-with-line': 'eye'}
                                        type='Entypo' style={styles.iconItem} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={ () => this._handlingRegister() }
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