import React, { Component } from 'react'
import {StatusBar,View,Text,ScrollView,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon,Thumbnail} from  'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'

const Global = require('../component/Global')
const url = Global.URL

var {width,height}=Dimensions.get('window')

export default class Home extends Component {

    constructor(){
        super()
        this.state={
            passwordInvisible: true,
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <LinearGradient
                    start={{x: 1.5, y: 0.3}} 
                    end={{x: 0.5, y: 1.4}}
                    colors={[
                        "#f8d153", "#f8d463", "#f8d671", "#ddd975", 
                        "#a9db8b", "#65d6a7", "#00cdc9", "#00bee4", "#30abed"
                    ]} 
                    style={{height:475}} >
                    <View>
                        <StatusBar backgroundColor='white' barStyle='dark-content'/>
                        <View style={styles.header} >
                            <View style={styles.headerBox} >
                                <Image
                                    style={styles.image}
                                    source={require('../component/img/crossword-logo.png')}/>
                                <Text style={styles.text1} >
                                    CROSSWORD PUZZLE
                                </Text>
                            </View>
                        </View>
                        <View style={styles.content} >
                            <View style={styles.avatarBox} >
                                <Thumbnail
                                    style={styles.avatar}
                                    source={require('../component/img/avatar-profile.jpg')} />
                            </View>
                            <View style={styles.usernameBox} >
                                <View style={styles.usernameitem1} >
                                    <Text style={styles.usernameText1} >
                                        My Name Is Khan
                                    </Text>
                                </View>
                                <View style={styles.usernameitem2} >
                                    <Text style={styles.usernameText2} >
                                        user@email.com
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
                <View style={styles.menuBox} >
                    <View style={styles.menuHeader} >
                        <Text style={styles.menuHeaderText} >
                            Puzzle Category
                        </Text>
                    </View>
                    <View style={styles.menuItem} >
                        <TouchableOpacity
                            onPress={()=>alert('pressed!')}>
                            <View style={styles.menuItemBox} >
                                <Thumbnail
                                    small
                                    source={require('../component/img/check-icon.png')}
                                    style={styles.menuItemThumbnail} />
                                <Text style={styles.menuItemText} >
                                    Animal Names
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>alert('pressed!')}>
                            <View style={styles.menuItemBox} >
                                <Thumbnail
                                    small
                                    style={styles.menuItemThumbnail} />
                                <Text style={styles.menuItemText} >
                                    Friend Names
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>alert('pressed!')}>
                            <View style={styles.menuItemBox} >
                                <Thumbnail
                                    small
                                    source={require('../component/img/check-icon.png')}
                                    style={styles.menuItemThumbnail} />
                                <Text style={styles.menuItemText} >
                                    Country Names
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>alert('pressed!')}>
                            <View style={styles.menuItemBox} >
                                <Thumbnail
                                    small
                                    style={styles.menuItemThumbnail} />
                                <Text style={styles.menuItemText} >
                                    Food Names
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
