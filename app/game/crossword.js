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
            List: [],
            token:'',
            data:[],
            list:'',
            listFix:[],
        }
    }


    async componentDidMount(){
        try{
          const token = await AsyncStorage.getItem('token');
          this.setState({token:token})
          this._getData()
        }catch(err){
          
        }}
    
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
              this.state.data.answers.map(data=>{
                const list = this.state.list
                this.setState({list:list.concat(data.indexes+',')})
              })
              const listString = this.state.list;
              const listStringArr = listString.split(",");
              const listInt = listStringArr.map(function (x) { 
                  return parseInt(x);
              });
              const datalistfix = listInt.filter( function( element ) {
                return element !== undefined;
              });
              console.log(datalistfix);
              console.log(listInt);
              console.log(this.state.list);
              this.setState({listFix:datalistfix})
              this._setData()
              this.getClue()
              }
        
            } catch (error) {
              console.log(error.response)
            }
          }
          _setData(){
            const convarrayobj = []
            const list = []
            this.state.data.answers.map(data=>{
             convarrayobj.push({"index":data.indexes,"question":data.question,"type":data.type,"answer":data.answer,"is_clue":data.is_clue})
           })
           convarrayobj.map(data=>{
             const question = data.question
             const type = data.type
             const answer = data.answer
             const is_clue = data.is_clue
       
             const listStringArr = data.index.split(",");
             const listInt = listStringArr.map(function (x) { 
                 return parseInt(x);
             });
       
             const datalistfix = listInt.filter( function( element ) {
               return element !== undefined;
             });
             
             datalistfix.map(data=>{
               if(isNaN(data)==false){
                 list.push({"index":data,"question":question,"type":type,"answer":answer,"is_clue":is_clue})
               }
             })
           })
           this.setState({List:list})
           console.log(list)
         }
         handleInput(id,answer){
            this.setState({[id]:answer})
        
          }
    
          _LihatSoal(id){
            const IDInput = []
            IDInput.push(id)
            let filter = this.state.List.filter(cls => IDInput.includes(cls.index));
            this.setState({answer:filter})
          }

          getClue(){
            const test = []
             this.state.data.answers.filter(x => x.is_clue === 1).map((x,index) => {
             const str = x.answer
             const res = str.split("");
             const str2 = x.indexes
             const res2 = str2.split(",");
            
             res2.map((data,index)=>{
               return this.setState({[data]:res[index]})
              //  return test.push({"id":data,"answer":res[index]})
             })
             return console.log(res)
             
            });
            console.log(test)
            
          }
    clue(id){
    //     const answer = [
    //     {"key":0,"answer":"a"},
    //     {"key":1,"answer":"y"},
    //     {"key":2,"answer":"a"},
    //     {"key":3,"answer":"m"},
    //     {"key":4,"answer":"m"},
    // ]
    // const IDInput = []
    // IDInput.push(id)
    // let filter = answer.filter(cls => IDInput.includes(cls.key));
    
    //     return filter[0] ? filter[0].answer : ''
    }    
    getInputData(){
        const myArr = []
        this.state.List.map(data=>{
          myArr.push({"index":data.index,"answer":this.state[data.index]})
        })
        return console.log(myArr)
      }

    render() {

        const columnlength =this.state.data.total_columns
        const data = Array.from({length: columnlength}, (x,i) => {return { key: i }});

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
                                        <Text key={index}>Soal {data.type}: {data.question}</Text>
                                        )})}
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
                                    if (this.state.listFix.includes(item.key)){
                                    return(
                                        <Input 
                                            autoCapitalize='characters'
                                            maxLength={1}
                                            value={this.state[item.key]}
                                            onFocus={()=>{this._LihatSoal(item.key)}} 
                                            onChangeText={(answer)=>{this.handleInput(item.key,answer)}}
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
                                onPress={()=> this.getInputData()}
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
