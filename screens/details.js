import React from 'react';
import {Dimensions,TouchableOpacity, StyleSheet, Button, Text, View,AsyncStorage} from 'react-native';
import {createStackNavigator, createAppContainer,StackActions, NavigationActions} from "react-navigation";
import {Image} from 'react-native' ; 
import ImagesSwiper from "react-native-image-swiper";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as firebase from 'firebase';

export default class DetailsScreen extends React.Component{
  static navigationOptions = {
      title: 'Details',
  };

  render(){
       const {navigate} = this.props.navigation;
       const customImg = [
       "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
      "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
      "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c"
      ];
      const itemID = this.props.navigation.getParam('itemID',0);
      const Price = this.props.navigation.getParam('Price',0);
      const category = this.props.navigation.getParam('category','x'); 
      const brand = this.props.navigation.getParam('brand','x');
      const name = this.props.navigation.getParam('name','x');
      const Photo1 = this.props.navigation.getParam('Photo','x');
    
     senditemID = (itemID) => {
      navigate('Options',{ itemID : itemID});}

      sendPrice = (Price) => {
      navigate('Options',{ Price : Price});}

       sendcategory = (category) => {
      navigate('Options',{ category : category});}

       sendbrand = (brand) => {
      navigate('Options',{ brand : brand});}

       sendname = (name) => {
      navigate('Options',{ name : name});}

       sendPhoto1 = (Photo1) => {
      navigate('Options',{ Photo1 : Photo1});}

     return (
      <View style={styles.container}>
        <View style={styles.menuContainer}>
            <View style = {styles.menuItem}>
                       <ImagesSwiper 
                          images={customImg}
                          height={550} 
                          width={400}          
                        />
                      <View style={styles.infoContainer}>
                        <Text style={styles.info}> {Price} {"\n"}
                              {category} 

                        </Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {senditemID(itemID);sendPrice(Price);sendcategory(category);sendbrand(brand);sendname(name);sendPhoto1(Photo1)}}>        
                          <Image source={require('./image/select4.png')}  style={styles.img}/>
                        </TouchableOpacity>       
                    </View>        
            </View>
        </View>        
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:wp('100%'),
    height:hp('100%'),

  },

  top: {
       backgroundColor: '#8E8E8E',
       width:'100%',
       alignItems: 'center',

  },
    header: {
      fontSize: 30,
      color: '#ffffff',

    },



  menuContainer: {

    width:wp('100%'),
    height:hp('100%'),

  },

   menuItem: {  
            height:hp('90%'),
             alignItems:'center',
             margin: 20,
            




         },


    img:{

          width: Dimensions.get('window').width*0.5,
          height: Dimensions.get('window').height*0.1,

    },


    info:{
      fontSize: 20,

    },

    infoContainer:{
       justifyContent: 'flex-end',
       margin:50,



    }



});
