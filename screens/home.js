import React from 'react';
import { Dimensions,TouchableOpacity,Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import MenuButton from '../components/MenuButton.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default class HomeScreen extends React.Component {

  static navigationOptions = {
          title: 'Home     ',
  };
  render() {
     const {navigate} = this.props.navigation;



    return (

	
      <View style={styles.container1}>
	 
      <View style={styles.buttonContainer}>
        <MenuButton navigation={this.props.navigation}/>

        
      <TouchableOpacity activeOpacity={1} onPress={() => navigate('Muscle')} style={styles.btn}>
        <View style={styles.absoluteView}>
            
        </View>
        <Image source={require('./image/muscle.jpg')}  style={styles.img}/>
      </TouchableOpacity>




       </View>

       <View style ={styles.buttonContainer}>
      
   
      <TouchableOpacity activeOpacity={1} onPress={() => navigate('Slim')} style={styles.btn}>
        <View style={styles.absoluteView}>
            
        </View>
        <Image source={require('./image/slim.jpg')}  style={styles.img}/>
      </TouchableOpacity>



       </View>

       <View style ={styles.buttonContainer}>
                 
      <TouchableOpacity  activeOpacity={1}  onPress={() => navigate('Regular')} style={styles.btn}>
        
        <Image source={require('./image/regular.jpg')}  style={styles.img}/>
      </TouchableOpacity>

              </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({

  absoluteView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },


  container1: {
    flex: 1,
    width:wp('100%'),
    height:hp('100%'),
    alignItems: 'center',
    justifyContent: 'center'
  },


  buttonContainer: {
    width:wp('100%'),
    height:hp('33.333%'),
    justifyContent: 'center',



  },


  header: {
    fontSize: 30,
  },


  img:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.33333,

  }






});


