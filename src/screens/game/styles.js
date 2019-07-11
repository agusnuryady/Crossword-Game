import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0
  },
  image: {
    width: 25,
    height: 25
  },
  text1: {
    fontSize: 8,
    paddingTop: 5,
    fontWeight: 'bold'
  },
  text2: {
    fontSize: 30,
    fontFamily: 'sans-serif-light'
  },
  text3: {
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    width: 130
  },
  text4: {
    fontSize: 20,
    fontFamily: 'sans-serif-condensed'
  },
  text5: {
    fontSize: 17,
    fontFamily: 'roboto',
    textAlign: 'center'
  },
  headerButton: {
    position: 'absolute',
    top: 17,
    right: 17
  },
  headerButtonIcon: {
    color: 'gray',
    fontSize: 25
  },
  header: {
    flexDirection: 'column',
    width: width,
    elevation: 3,
    paddingBottom: 5,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.99)'
  },
  header2: {
    flexDirection: 'column',
    height: 115,
    width: width,
    elevation: 1.5,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.95)'
  },
  header3: {
    flexDirection: 'column',
    height: 60,
    width: width,
    elevation: 1.5,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.95)'
  },
  headerBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  headerBoxLeft: {
    position: 'absolute',
    left: 85,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  headerBoxRight: {
    position: 'absolute',
    right: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 17
  },
  content: {
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: width
  },
  contentItem: {
    width: 350,
    height: 335,
    backgroundColor: 'white'
  },
  inputBox1: {
    borderColor: '#898D44',
    borderWidth: 0.5,
    padding: 5,
    fontSize: 22,
    textAlign: 'center',
    height: 56
  },
  inputBox2: {
    backgroundColor: '#627C66',
    borderColor: '#354A51',
    borderWidth: 0.5,
    height: 56
  },
  menuBox: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.97)',
    width: width,
    height: 155,
    padding: 5
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    paddingBottom: 3,
    borderBottomColor: '#02A8DF',
    borderBottomWidth: 2
  },
  menuHeaderText: {
    fontSize: 20,
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold'
  },
  menuItem: {
    marginTop: 5,
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingHorizontal: 30
  },
  menuItemThumbnail: {
    borderColor: '#1FD6EC',
    width: 30,
    height: 30,
    marginLeft: 5,
    borderWidth: 2,
    backgroundColor: '#EFEFEF'
  },
  buttonBox: {
    flexDirection: 'row',
    elevation: 2,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#20DD3A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'sans-serif-medium',
    marginHorizontal: 10
  }
});

export default styles;
