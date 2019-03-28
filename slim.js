import React, { Component } from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Items from './components/items';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {AppRegistr,FlatList,ListView, ActivityIndicator,Divider, StatusBar} from 'react-native';
import * as firebase from 'firebase';


export default class SlimFit extends React.Component {
    static navigationOptions = {
      title: 'Slim Fit       ',

  };

constructor (props){
      super(props)
      this.state = {
        dataSource : [],
        isLoading: true,
		Array : ''
      }
    } 

async getKey(key) {
    try {
      const value = await AsyncStorage.getItem(key);
	  if (value != null)
	  this.setState({Array: value});
	  console.log(value);
	  await AsyncStorage.setItem(key, this.state.Array);
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  };

async saveKey(key) {
    try {
      
    } catch (error) {
      console.log("Error saving data" + error);
    }
  };

componentWillMount (){
	this.getKey('PreferCategory');

	firebase.database().ref('items').once('value', snapshot =>{
	 var items = [];
     snapshot.forEach((child) => {
       items.push({
          brand: child.val().brand,
          name: child.val().name,
          Price: child.val().Price,
		  ID : child.val().ID,
		  category : child.val().category,
       });
    });
	this.setState({
	dataSource : items
 });
 });
 };
    
renderItem = ({item}) => {
      return(
        <View style={styles.menuContainer}>
            <Items itemImage={
			require('./screens/image/shirt.jpg')} 
			navigation={this.props.navigation} 
			itemID={item.ID}
			category={item.category}
			Price ={item.Price}
			>
             <Text style  = {{fontSize: 16, color: 'black'}}>
                {item.brand}
              </Text>
              <Text style  = {{fontSize: 12, color: 'black'}}>
                {item.name}
              </Text>
              <Text style  = {{fontSize: 10, color: 'red'}}>
                RM {item.Price}
              </Text>
            </Items>
        </View>
		
        
      )
    }

Gotorecom = () =>{
this.props.navigation.navigate('Recommendation');
}

 render() {
       const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}> 
        <FlatList
           numColumns={2}
           data = {this.state.dataSource/*.filter(items => (items.category == "Slim Fit"))*/}
            renderItem = {this.renderItem}
          />
			<Button onPress={this.Gotorecom} title ="Recommendation"/>
		
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

  }




});
