import React from 'react';
import { Dimensions,TouchableOpacity,Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export default class Size extends React.Component {

  static navigationOptions = {
          title: 'Standard Size     ',
  };
  render() {
     const {navigate} = this.props.navigation;



    return (


      <View style={styles.container1}>



      <View style={styles.buttonContainer}>
             <TouchableOpacity activeOpacity={1} onPress={() => navigate('ShoppingBag')} style={styles.btn}>
               <View style={styles.absoluteView}>
            
               </View>
              <Image source={require('./image/s.png')}  style={styles.img}/>
            </TouchableOpacity>

      </View>




      <View style={styles.buttonContainer}>
             <TouchableOpacity activeOpacity={1} onPress={() => navigate('ShoppingBag')} style={styles.btn}>
               <View style={styles.absoluteView}>
            
               </View>
              <Image source={require('./image/m.png')}  style={styles.img}/>
            </TouchableOpacity>

      </View>






       <View style ={styles.buttonContainer}>
      
   
      <TouchableOpacity activeOpacity={1} onPress={() => navigate('ShoppingBag')} style={styles.btn}>
        <View style={styles.absoluteView}>
            
        </View>
        <Image source={require('./image/l.png')}  style={styles.img}/>
      </TouchableOpacity>



       </View>

       <View style ={styles.buttonContainer}>
                 
      <TouchableOpacity  activeOpacity={1}  onPress={() => navigate('ShoppingBag')} style={styles.btn}>
        
        <Image source={require('./image/xl.png')}  style={styles.img}/>
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
    height: hp('25%'),
    justifyContent: 'center',



  },


  header: {
    fontSize: 30,
  },


  img:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.25,

  }





});


