import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native'

var {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:0
    },
    content: {
        flex:1,
        height:height,
        alignItems:'center',
        justifyContent:'center'
    },
    contentItem: {
        flexDirection:'column',
        alignItems:'center'
    },
    image: {
        width:100,
        height:100
    },
    text1: {
        fontSize:15,
        paddingTop:20,
        fontWeight:'bold'
    },
    contentItem2: {
        flexDirection:'column',
        alignItems:'center',
        marginTop:20
    },
    inputBox: {
        flexDirection:'row',
        minWidth: 300,
        padding: 5,
        paddingHorizontal:20,
        margin: 10,
        alignSelf: 'stretch',
        borderRadius: 40,
        backgroundColor: 'rgba(134,134,134,0.1)'
    },
    inputText: {
        fontSize: 18,
        color: 'black'
    },
    inputText2: {
        fontSize: 18,
        color: 'black',
        width:240
    },
    iconBox: {
        alignItems:'center',
        justifyContent:'center'
    },
    iconItem: {
        fontSize:20,
        color:'#555555'
    },
    inputBox2: {
        flexDirection:'row',
        minWidth: 300,
        minHeight:55,
        padding: 10,
        paddingHorizontal:20,
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'stretch',
        borderColor:'#F8CF42',
        borderWidth:2,
        borderRadius: 40,
        backgroundColor: 'rgba(124,124,124,0.2)'
    },
    iconItem2: {
        fontSize: 18,
        color: '#555555',
        fontWeight:'bold'
    },
    contentItem3: {
        flexDirection:'row',
        margin:10
    },
    text2: {
        fontSize:15
    },
    inputBox3: {
        paddingHorizontal:7
    },
    text3: {
        fontWeight:'bold', 
        fontSize:15
    }
})

export default styles