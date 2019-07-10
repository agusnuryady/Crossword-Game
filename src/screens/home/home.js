import React, { Component } from 'react'
import {StatusBar,View,Text,FlatList,ScrollView,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon,Thumbnail} from  'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import {storageData} from '../../utils'

const Global = require('../../component/Global')
const url = Global.URL

var {width,height}=Dimensions.get('window')

export default class Home extends Component {

    _isMounted = false

    constructor(props){
        super(props)
        this.state={
            token:"",
            user:[],
            crosswordList:[],
            passwordInvisible: true,
        }
    }

    fetchUser = async (token)=> {
        let options = {headers: {"Authorization": `Bearer ${token}`}}
        let result = await Axios.get(`${url}profile`, options)
        this.setState({user: result.data})
        console.log(result.data)
    }

    fetchList = async (token)=> {
        let options = {headers: {"Authorization": `Bearer ${token}`}}
        let result = await Axios.get(`${url}crosswords`, options)
        this.setState({crosswordList: result.data.data})
        console.log(result.data.data)
    }

    componentDidMount() {
        this._isMounted = true
        AsyncStorage.getItem('token', (err, res) => {
            if (this._isMounted) {
                this.setState({token: res})
                this.fetchUser(res)
                this.fetchList(res)
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    handleLogout(){
        Alert.alert(
        '',
        'Are you sure you want to logout? ',
        [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text:'Yes', 
                onPress: ()=> {
                    AsyncStorage.removeItem('token')
                    this.props.navigation.dispatch(StackActions.reset({
                        index: 0,
                        actions: [
                        NavigationActions.navigate({ routeName: 'Login' })
                        ],
                    }))
                } 
            },
        ],
        {cancelable:false},
        )
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
                                    source={require('../../component/img/crossword-logo.png')}/>
                                <Text style={styles.text1} >
                                    CROSSWORD PUZZLE
                                </Text>
                            </View>
                            <TouchableOpacity 
                                onPress={()=> this.handleLogout()}
                                style={styles.headerButton} >
                                <Icon name='logout' type='AntDesign' style={styles.headerButtonIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content} >
                            <View style={styles.avatarBox} >
                                <Thumbnail
                                    style={styles.avatar}
                                    source={require('../../component/img/avatar-profile.jpg')} />
                            </View>
                            <View style={styles.usernameBox} >
                                <View style={styles.usernameitem1} >
                                    <Text style={styles.usernameText1} >
                                        {this.state.user.username}
                                    </Text>
                                </View>
                                <View style={styles.usernameitem2} >
                                    <Text style={styles.usernameText2} >
                                        {this.state.user.email}
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
                        
                        <FlatList
                            data={this.state.crosswordList}
                            renderItem={({item}) => (
                                <TouchableOpacity
                                    onPress={()=>alert('pressed!')}>
                                    <View style={styles.menuItemBox} >
                                        <Thumbnail
                                            small
                                            source={item.pivot.is_finished === 1 ? require('../../component/img/check-icon.png') : null}
                                            style={styles.menuItemThumbnail} />
                                        <Text style={styles.menuItemText} >
                                            {item.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => { return item.id.toString()}}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
