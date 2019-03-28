import React, { Component } from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Items from '../components/items';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {AppRegistr,FlatList,ListView, ActivityIndicator,Divider, StatusBar} from 'react-native';
import * as firebase from 'firebase';


export default class Recommendation extends React.Component {
    static navigationOptions = {
      title: 'Recommendation',

  };

constructor (props){
      super(props);
	  global.Category="";
      this.state = {
	dataSource : [],
	Result :[]
	}
}

async getKey(key) {
    try {
      const value = await AsyncStorage.getItem(key);
	  global.Category = value;
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  };

calculateRender (){
	var ForParse = global.Category;
	var Parsetis = "[" + ForParse + "]";
	var catArray = JSON.parse(Parsetis);
	var countMuscle =0;
	var countSlim = 0;
	var countRegular =0;
	var renderQueue = [];
	var renderQueueLength = 0;
	var data = this.state.dataSource;
	var random = 0;
	console.log(renderQueue);
	
	for (i = 0; i < catArray.length ; i++)
	{ 
		if (catArray[i] == "Muscle Fit")
		countMuscle++;

		if (catArray[i] == "Slim Fit")
		countSlim++;

		if (catArray[i] == "Regular Fit")
		countRegular++;
	}

	countMuscle = countMuscle / catArray.length;
	countSlim = countSlim / catArray.length;
	countSlim = countSlim / catArray.length;
	
	while (renderQueueLength < 10)
	{ 
		for (i = 0; i < data.length ; i++)
		{
			random = Math.random();
			console.log(random);
			if (data[i].category === "Muscle Fit")
			{
				if ( random < (countMuscle || 0.1) )
				{
					renderQueue.push(data[i]);
					data.splice(i,1);
					renderQueueLength ++;
				}
			}
			if (data[i].category === "Slim Fit")
			{
				if ( random < (countSlim || 0.1))
				{
					renderQueue.push(data[i]);
					data.splice(i,1);
					renderQueueLength ++;
				}
			}
			if (data[i].category === "Regular Fit")
			{
				if ( random < (countRegular || 0.1))
				{
					renderQueue.push(data[i]);
					data.splice(i,1);
					renderQueueLength ++;
				}
			}
		}
	
	}
	
this.setState({Result:renderQueue});
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
	this.calculateRender();	
	});
	
 };



renderItem = ({item}) => {
      return(
        <View style={styles.menuContainer}>
            <Items itemImage={
			require('../screens/image/shirt.jpg')} 
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

 render() {
       const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}> 
        <FlatList
           numColumns={2}
           data = {this.state.Result}
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

  }




});