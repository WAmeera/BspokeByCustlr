import React from 'react';
import { Dimensions,TouchableOpacity,Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as firebase from 'firebase';



export default class Options extends React.Component {

  static navigationOptions = {
          title: 'Options     ',
  };
  render() {
     const {navigate} = this.props.navigation;
     const itemID = this.props.navigation.getParam('itemID',0);
      const Price = this.props.navigation.getParam('Price',0);
      const category = this.props.navigation.getParam('category','x'); 
      const brand = this.props.navigation.getParam('brand','x');
      const name = this.props.navigation.getParam('name','x');
      const Photo1 = this.props.navigation.getParam('Photo1','x');

      senditemID = (itemID) => {
      navigate('Size',{ itemID : itemID});}

      sendPrice = (Price) => {
      navigate('Size',{ Price : Price});}

       sendcategory = (category) => {
      navigate('Size',{ category : category});}

       sendbrand = (brand) => {
      navigate('Size',{ brand : brand});}

       sendname = (name) => {
      navigate('Size',{ name : name});}

       sendPhoto1 = (Photo1) => {
      navigate('Size',{ Photo1 : Photo1});}

//////////////////////////////////////////////////////////
       senditemID_custom = (itemID) => {
      navigate('Custom',{ itemID : itemID});}

      sendPrice_custom = (Price) => {
      navigate('Custom',{ Price : Price});}

       sendcategory_custom = (category) => {
      navigate('Custom',{ category : category});}

       sendbrand_custom = (brand) => {
      navigate('Custom',{ brand : brand});}

       sendname_custom = (name) => {
      navigate('Custom',{ name : name});}

       sendPhoto1_custom = (Photo1) => {
      navigate('Custom',{ Photo1 : Photo1});}

    return (

      <View style={styles.container1}>
        
        <View style={styles.buttonContainer}>

          <TouchableOpacity activeOpacity={1} onPress={() => {senditemID(itemID);sendPrice(Price);sendcategory(category);sendbrand(brand);sendname(name);sendPhoto1(Photo1)}} style={styles.btn}>
            <Image source={require('./image/size1.jpg')}  style={styles.img}/>
          </TouchableOpacity>

       </View>


          <View style={styles.buttonContainer}>

          <TouchableOpacity activeOpacity={1} onPress={() => {senditemID_custom(itemID);sendPrice_custom(Price);sendcategory_custom(category);sendbrand_custom(brand);sendname_custom(name);sendPhoto1_custom(Photo1)}} style={styles.btn}>
            <Image source={require('./image/size2.jpg')}  style={styles.img}/>
          </TouchableOpacity>

       </View>


          <View style={styles.buttonContainer}>

          <TouchableOpacity activeOpacity={1} onPress={() => navigate('TailorOptions')} style={styles.btn}>
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

  img:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.33333,


  }




});


