import React, { Component } from 'react'
import {StatusBar,View,Text,FlatList,ScrollView,TextInput,Alert,TouchableOpacity,TouchableWithoutFeedback,Dimensions,Image} from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Icon,Thumbnail,Container, Content, Input,} from  'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import URL from '../component/Global'

var {width,height}=Dimensions.get('window')

export default class Crossword extends Component {
    
    _isMounted = false

    constructor(props){
        super(props)
        this.state={
            answer:[],
            List: [
                {"id":0,"question":"Haaloo gayss","type":"mendatar","answer":"ayam","is_clue":1},
                {"id":1,"question":"Haaloo gayss","type":"mendatar","answer":"ayam","is_clue":1},
                {"id":2,"question":"Haaloo gayss","type":"mendatar","answer":"ayam","is_clue":1},
                {"id":3,"question":"Haaloo gayss","type":"mendatar","answer":"ayam","is_clue":1},
                {"id":4,"question":"Haaloo gayss","type":"mendatar","answer":"ayam","is_clue":1},
                {"id":2,"question":"yo wasap gayss","type":"menurun"},
                {"id":7,"question":"yo wasap gayss","type":"menurun"},
                {"id":12,"question":"yo wasap gayss","type":"menurun"},
                {"id":17,"question":"yo wasap gayss","type":"menurun"},
                {"id":22,"question":"yo wasap gayss","type":"menurun"},
                {"id":10,"question":"halo sayang","type":"mendatar"},
                {"id":11,"question":"halo sayang","type":"mendatar"},
                {"id":12,"question":"halo sayang","type":"mendatar"},
                {"id":13,"question":"halo sayang","type":"mendatar"},
                {"id":14,"question":"halo sayang","type":"mendatar"},
                {"id":20,"question":"halo bebeb","type":"menurun"},
                {"id":21,"question":"halo bebeb","type":"menurun"},
                {"id":22,"question":"halo bebeb","type":"menurun"},
                {"id":23,"question":"halo bebeb","type":"menurun"},
                {"id":24,"question":"halo bebeb","type":"menurun"},
            ],
            token:'',
            data:[]
        }
    }

    async componentDidMount(){
        try{
        const token = await AsyncStorage.getItem('token');
        this.setState({token:token})
        this._getData()
        }catch(err){
        
        }
    
    
        }
    
    async _getData() {
        try {
        const response = await axios.get(`${URL.URL}crosswords/1/answers`,{
            headers:{
            Authorization: `Bearer ${this.state.token}`
            }
        })
        if(response.status == 200){
            console.log(response)
            this.setState({data:response.data.data[0]})
        }
        } catch (error) {
        console.log(error.response)
        }
    }
    
    _LihatSoal(id){
        const IDInput = []
        IDInput.push(id)
        let filter = this.state.List.filter(cls => IDInput.includes(cls.id));
        this.setState({answer:filter})
    
    }
    clue(id){
        const answer = [
        {"key":0,"answer":"a"},
        {"key":1,"answer":"y"},
        {"key":2,"answer":"a"},
        {"key":3,"answer":"m"},
        {"key":4,"answer":"m"},
    ]
    const IDInput = []
    IDInput.push(id)
    let filter = answer.filter(cls => IDInput.includes(cls.key));
    
        return filter[0] ? filter[0].answer : ''
    }    

    render() {

        const list = [0,1,2,3,4,7,10,11,12,13,14,17,20,21,22,23,24];
        const columnlength =this.state.data.total_columns
        const data = Array.from({length: columnlength}, (x,i) => {
            return { key: i }
        })

        return (
            <LinearGradient
                start={{x: 1.5, y: 0.3}} 
                end={{x: 0.5, y: 1.4}}
                colors={[
                    "#f8d153", "#f8d463", "#f8d671", "#ddd975", 
                    "#a9db8b", "#65d6a7", "#00cdc9", "#00bee4", "#30abed"
                ]} 
                style={styles.container} >
                <Content style={{flexDirection:'column'}} >
                    <StatusBar backgroundColor='white' barStyle='dark-content'/>
                    <View style={styles.header} >
                        <View style={styles.header2} >
                            <View style={styles.header3} >
                                <View style={styles.headerBoxLeft} >
                                    <Image
                                        style={styles.image}
                                        source={require('../component/img/crossword-logo.png')}/>
                                    <Text style={styles.text1} >
                                        CROSSWORD PUZZLE
                                    </Text>
                                </View>
                                <View style={styles.headerBox} >
                                    <Text style={styles.text2} >
                                        X
                                    </Text>
                                </View>
                                <View style={styles.headerBoxRight} >
                                    <Text
                                        numberOfLines={1}
                                        style={styles.text3} >
                                        My Name Is Khan
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.headerBox} >
                                <View style={styles.menuHeader} >
                                    <Text
                                        numberOfLines={1}
                                        style={styles.text4} >
                                        Nama Hewan
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.headerBox} >
                            <View style={styles.menuHeader} >
                                <Text style={styles.menuHeaderText} >
                                    Petunjuk
                                </Text>
                            </View>
                            <View style={styles.menuItem} >
                                <ScrollView 
                                    showsVerticalScrollIndicator={false}
                                    style={{maxHeight:45,}} >
                                    {this.state.answer.map((data,index)=>{
                                        return(
                                            <Text 
                                                key={index} 
                                                style={styles.text5}
                                            >
                                                {data.type} {data.question}
                                            </Text>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content} >
                        <View style={styles.contentItem} >
                            <FlatList
                                data={data}
                                key={data} 
                                numColumns={Math.sqrt(data.length)}
                                renderItem={({item}) => {
                                    if (list.includes(item.key)){
                                    return(
                                        <Input 
                                            autoCapitalize='characters'
                                            maxLength={1}
                                            onFocus={()=>{this._LihatSoal(item.key)}} 
                                            style={styles.inputBox1} />
                                    )
                                    }else{
                                        return(
                                            <Input disabled style={styles.inputBox2} />
                                        )
                                    }
                                //  return console.log(test[item.key].key)
                                }}
                                
                            />
                        </View>
                        <View style={{margin:20}} >
                            <TouchableOpacity 
                                onPress={()=> alert('Pressed!')}
                                style={styles.buttonBox} >
                                <Thumbnail
                                    source={require('../component/img/check-icon.png')}
                                    style={styles.menuItemThumbnail} />
                                <Text style={styles.buttonText} >
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </LinearGradient>
        )
    }
}
