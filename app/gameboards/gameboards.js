import React, { Component } from 'react';
import { Container, Header, Content, Input, Item } from 'native-base';
import {View,FlatList,Text,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import URL from '../component/Global'
import axios from 'axios'
export default class RegularTextboxExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer:[],
      List: [],
      token:'',
      data:[],
      list:'',
      listFix:[],
    };
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
  //   const answer = [
  //     {"key":0,"answer":"a"},
  //     {"key":1,"answer":"y"},
  //     {"key":2,"answer":"a"},
  //     {"key":3,"answer":"m"},
  //     {"key":4,"answer":"m"},
  // ]
  // const IDInput = []
  // IDInput.push(id)
  // let filter = answer.filter(cls => IDInput.includes(cls.key));
  //   return filter[0] ? filter[0].answer : null

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
      <Container>
        <Content style={{padding:10}}>
        <FlatList
          data={data}
          key={data} 
          numColumns={Math.sqrt(data.length)}
          renderItem={({item}) => {
            if (this.state.listFix.includes(item.key)){
              return(
              <Input placeholder='Jawaban' value={this.state[item.key]} onFocus={()=>{this._LihatSoal(item.key)}} onChangeText={(answer)=>{this.handleInput(item.key,answer)}} style={{borderColor:'gray',borderWidth:0.5}} />
              )
            }else{
                return(
                  <Input disabled style={{backgroundColor:'black'}} />
                  )
              }
          }}
        />
        {this.state.answer.map((data,index)=>{
          return(
            <Text key={index}>{data.type} {data.question}</Text>
          )
        })}
        <TouchableOpacity onPress={()=>{this.getInputData()}}>
          <Text>halooo</Text>
        </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}