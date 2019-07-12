import React, { Component } from 'react'
import {StatusBar,View,Text,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { connect } from 'react-redux'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon} from  'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import {storageData} from '../../utils'
import * as actionAuth from '../../redux/actions/auth'

const Global = require('../../component/Global')
const url = Global.URL

var {width,height}=Dimensions.get('window')

class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            passwordInvisible: true,
        }
    }

    _loginHandler = async () => {
        if(!this.validation()) {
            return null
        }

        this.props.login({email: this.state.email, password: this.state.password})
    }

    _navigate = () => {
        this.props.navigation.navigate({ routeName: 'App' })
        // dispatch(StackActions.reset({
        //     index: 0,
        //     actions: [
        //         NavigationActions.navigate({ routeName: 'App' })
        //     ],
        // }))
    }

    _loginChecker = () => {
        if(this.props.auth.isLoggedIn) {
            this._navigate()
        }else if(this.props.auth.isError) {
            alert(this.props.auth.data)
            this.props.auth.isError = false
        }
    }

    validation = () => {
        if(this.state.email == '') {
            alert('email harus diisi')
            return false
        }else if(this.state.password == '') {
            alert('password harus diisi')
            return false
        }

        return true
    }

    render() {
        this._loginChecker()
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
                            source={require('../../component/img/crossword-logo.png')}/>
                        <Text style={styles.text1} >
                            CROSSWORD PUZZLE
                        </Text>
                    </View>
                    <View style={styles.contentItem2} >
                        <View style={styles.inputBox} >
                        <TextInput
                            style={styles.inputText}
                            placeholder='Email'
                            placeholderTextColor= 'gray'
                            value={this.state.email}
                            onChangeText={(text) => this.setState({email: text})} />
                        </View>
                        <View style={styles.inputBox} >
                            <TextInput
                                style={styles.inputText2}
                                secureTextEntry= {this.state.passwordInvisible}
                                placeholder='Password'
                                placeholderTextColor= 'gray'
                                value={this.state.password}
                                onChangeText={(text) => this.setState({password: text})} />
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
                            onPress={this._loginHandler}
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
                                onPress={ () => this.props.navigation.navigate('Register') }
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

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(actionAuth.login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
