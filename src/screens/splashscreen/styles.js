import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native'

var {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:0
    },
    content: {
        height:height,
        alignItems:'center',
        justifyContent:'center'
    },
    contentItem: {
        flexDirection:'column',
        alignItems:'center'
    },
    image: {
        width:150,
        height:150
    },
    text1: {
        fontSize:18,
        paddingTop:20,
        fontWeight:'bold'
    }
})

export default styles