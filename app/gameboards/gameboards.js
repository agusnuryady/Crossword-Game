    import React, { Component } from 'react';
import { Container, Header, Content, Input, Item } from 'native-base';
import {View,FlatList,Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import URL from '../component/Global'
import axios from 'axios'

export default class RegularTextboxExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        };
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
        // const n = 'ayam';
        // const test = Array.from(n).map(data=>{return data}); 

        
        return (
        <Container>
            <Content style={{padding:10}}>
            <FlatList
            data={data}
            key={data} 
            numColumns={Math.sqrt(data.length)}
            renderItem={({item}) => {
                if (list.includes(item.key)){
                return(
                <Input placeholder='Jawaban' onFocus={()=>{this._LihatSoal(item.key)}} style={{borderColor:'gray',borderWidth:0.5}} />
                )
                }else{
                    return(
                    <Input disabled style={{backgroundColor:'black'}} />
                    )
                }
            //  return console.log(test[item.key].key)
            }}
            
            />
            {this.state.answer.map((data,index)=>{
            return(
                <Text key={index}>{data.type} {data.question}</Text>
            )
            })}
            </Content>
        </Container>
        );
    }
}