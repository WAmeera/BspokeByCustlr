import React from 'react';
import { Dimensions,TouchableOpacity,Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as firebase from 'firebase';



export default class Size extends React.Component {

  state = {
    size : 'unspecified'
  }
  static navigationOptions = {
          title: 'Standard Size     ',
  };
  render() {
     const {navigate} = this.props.navigation;
     const itemID = this.props.navigation.getParam('itemID',0);
      const Price = this.props.navigation.getParam('Price',0);
      const category = this.props.navigation.getParam('category', 'x'); 
      const brand = this.props.navigation.getParam('brand','x');
      const name = this.props.navigation.getParam('name','x');
      const Photo1 = this.props.navigation.getParam('Photo1','x');
    const Quantity = 1;
    const collar = 0;
    const shoulder = 0;
    const chest = 0;
    const sleeve = 0;
   

    onButtonPress =  (size, collar, shoulder, chest, sleeve) => {
      navigate('ShoppingBag',{ size : size});
     
          firebase.database().ref('ShoppingBag/').push({
              itemID,
              Price,
              category,
              brand,
              name, 
              Photo1, 
              Quantity,
              collar,
              shoulder,
              chest,
              sleeve,
              size
         });//.then((data)=>{console.log('data ' , data)
          //}).catch((error)=>{console.log('error ' , error)})
    }

    return (
      <View style={styles.container1}>
      <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={1} onPress={() => onButtonPress ('Standard S', 15.5, 17.5, 40.0, 24.5)} style={styles.btn}>
            <View style={styles.absoluteView}>
            </View>
            <Image source={require('./image/s.png')}  style={styles.img}/>
          </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={1} onPress={() => onButtonPress ('Standard M', 16.0, 18.5, 42.0, 25.0)} style={styles.btn}>
            <View style={styles.absoluteView}>
            </View>
            <Image source={require('./image/m.png')}  style={styles.img}/>
          </TouchableOpacity>
      </View>

       <View style ={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={1} onPress={() => onButtonPress ('Standard L', 16.5, 19.5, 46.0, 25.5)} style={styles.btn}>
            <View style={styles.absoluteView}>   
            </View>
             <Image source={require('./image/l.png')}  style={styles.img}/>
          </TouchableOpacity>
       </View>

      <View style ={styles.buttonContainer}>          
          <TouchableOpacity  activeOpacity={1}  onPress={() => onButtonPress ('Standard XL', 17.0, 20.5, 46.0, 25.5)} style={styles.btn}>
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


