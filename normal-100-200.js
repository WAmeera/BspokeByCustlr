import React from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Items from './components/items';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Component} from 'react';
import {AppRegistr,FlatList,ListView, ActivityIndicator,Divider, StatusBar} from 'react-native';
import * as firebase from 'firebase';
import CustomMenu from './components/normal-custommenu';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class normal100to200 extends React.Component {
    static navigationOptions = ({navigation}) => {
      return{
      title: navigation.getParam('Title', 'Normal Fit'),
      headerRight: (
       <CustomMenu
          //Menu Text
          menutext="RM100-RM200"
          //Menu View Style
          menustyle={{
            marginRight: 16,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
          //Menu Text Style
          textStyle={{
            color: 'white',
          }}
          //Click functions for the menu items
          option1Click={() => {
            navigation.navigate('Regular');
          }}
          option2Click={() => {
            navigation.navigate('normaltopseller');
          }}
          option3Click={() => {
            navigation.navigate('normalfeatured');
          }}
          option4Click={() => {
            //alert('Option 4');
            navigation.navigate('normallatest');
          }}
           option5Click={() => {
            navigation.navigate('normal0to100');
          }}
           option6Click={() => {
            navigation.navigate('normal100to200');
          }}
           option7Click={() => {
            navigation.navigate('normal200above');
          }}
        />),
      };
  };

constructor (){
      super()
      this.state = {
        dataSource : [],
        isLoading: true,
		categoryArray : '',
		colorArray : ''
      }
    } 

async getCategoryKey(key) {
    try {
      const value = await AsyncStorage.getItem(key);
	  if (value != null)
	  this.setState({categoryArray: value});
	  console.log(value);
	  await AsyncStorage.setItem(key, this.state.categoryArray);
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  };

async getColorKey(key) {
    try {
      const value = await AsyncStorage.getItem(key);
	  if (value != null)
	  this.setState({colorArray: value});
	  console.log(value);
	  await AsyncStorage.setItem(key, this.state.colorArray);
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
    
renderItem = ({item}) => {
      return(
        <View style={styles.menuContainer}>
            <Items itemImage={
			require('./screens/image/shirt.jpg')} 
			navigation={this.props.navigation} 
			itemID={item.ID}
			category={item.category}
			Price ={item.Price}
			color = {item.color}
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

componentWillMount (){
	this.getCategoryKey('PreferCategory');
	this.getColorKey('PreferColor');

	firebase.database().ref('items').once('value', snapshot =>{
	 var items = [];
     snapshot.forEach((child) => {
       items.push({
          brand: child.val().brand,
          name: child.val().name,
          Price: child.val().Price,
		  ID : child.val().ID,
		  category : child.val().category,
		  color : child.val().color,
       });
    });
	this.setState({
	dataSource : items
 });
 });
 };



 render() {
       const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>     
        <FlatList
            numColumns={2}
           data = {this.state.dataSource.filter(items => ((items.category == "Regular Fit") && ((items.Price >= 100) && (items.Price <= 200))))}
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
