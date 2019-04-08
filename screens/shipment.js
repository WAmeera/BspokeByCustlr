import React, { Component } from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet, AsyncStorage, TouchableOpacity} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Items from '../components/items';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {AppRegistr,FlatList,ListView, ActivityIndicator,Divider, StatusBar} from 'react-native';
import * as firebase from 'firebase';


export default class shipment extends React.Component {
    static navigationOptions = {
      title: 'Shipment       ',

  };

constructor (props){
      super(props)
      this.state = {
        dataSource : [],
        isLoading: true,
		categoryArray : '',
		colorArray : '',
		currentUser : null,
      }
    } 

componentWillMount (){
 firebase.auth().onAuthStateChanged((user) => {
   const { currentUser } = firebase.auth();
    this.setState ({currentUser});
	currentUser2 = this.state.currentUser;
	firebase.database().ref(`Shipping/${currentUser2.uid}/`).once('value', snapshot =>{
	 var items = [];
     snapshot.forEach((child) => {
       items.push({
          brand: child.val().item.brand,
          name: child.val().item.name,
          Price: child.val().item.Price,
		  ID : child.val().item.ID,
		  category : child.val().item.category,
		  color : child.val().item.color,
		  Shipment : child.val().item.Shipment,
       });
    });
	this.setState({
	dataSource : items
 });
 });
 })};
    
renderItem = ({item}) => {
      return(
         <View style = {styles.menuItem}>




                <View style = {styles.menuItem}>
                    <TouchableOpacity activeOpacity={1} style={styles.buttonContainer} onPress={() => 
					this.props.navigation.navigate('statusModal',{ Shipment : item.Shipment})} >
                        <Image source={require('../screens/image/shirt.jpg')}  style={styles.image}/>         
                        <Text style  = {{fontSize: 16, color: 'black'}}>
                {item.brand}
              </Text>
              <Text style  = {{fontSize: 12, color: 'black'}}>
                {item.name}
              </Text>
              <Text style  = {{fontSize: 10, color: 'red'}}>
                RM {item.Price}
              </Text>
                    </TouchableOpacity>
                </View>
           
            </View>
      )
    }
	
 render() {
       const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}> 
        <FlatList
           numColumns={2}
           data = {this.state.dataSource}
            renderItem = {this.renderItem}
          />
		
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




  menuContainer:{
    flexDirection:'row',
    flexWrap: 'wrap',
  },

  scroll:{
        backgroundColor:'#efefef',

  },

  menuItem: {

            backgroundColor:'#fff',
            borderColor:'#dddddd',
             borderWidth: 1,
             alignItems:'center',
             margin: 5,
             width: wp('46%'),
             height:hp('40%'), 



         },

         image: {
            width:wp('43%'),
            height:hp('30%'),

         },

           buttonContainer: {
             width:'90%',
             justifyContent: 'center',
             margin: 10,


           },

           text:{
            textAlign:'center',
           }



});