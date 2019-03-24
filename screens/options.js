import React from 'react';
import { TouchableOpacity,Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export default class HomeScreen extends React.Component {

  static navigationOptions = {
          title: 'Options     ',
  };
  render() {
     const {navigate} = this.props.navigation;



    return (


      <View style={styles.container1}>
      <View style={styles.buttonContainer}>
       

        
      <TouchableOpacity activeOpacity={1} onPress={() => navigate('Size')} style={styles.btn}>
        <View style={styles.absoluteView}>
            
        </View>
        <Image source={require('./image/size1.jpg')}  style={styles.img}/>
      </TouchableOpacity>




       </View>

       <View style ={styles.buttonContainer}>
      
   
      <TouchableOpacity activeOpacity={1} onPress={() => navigate('Custom')} style={styles.btn}>
        <View style={styles.absoluteView}>
            
        </View>
        <Image source={require('./image/size2.jpg')}  style={styles.img}/>
      </TouchableOpacity>



       </View>

       <View style ={styles.buttonContainer}>
                 
      <TouchableOpacity  onPress={() => navigate('TailorOptions')} activeOpacity={1}  style={styles.btn}>
        
        <Image source={require('./image/size3.jpg')}  style={styles.img}/>
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
    height: '33.333%',
    justifyContent: 'center',



  },


  header: {
    fontSize: 30,
  },






});


