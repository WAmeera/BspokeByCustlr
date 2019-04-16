import React from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Items from './components/items';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Component} from 'react';
import {AppRegistr,FlatList,ListView, ActivityIndicator,Divider, StatusBar} from 'react-native';
import * as firebase from 'firebase';
import DropdownMenu from 'react-native-dropdown-menu';


export default class SlimFit extends React.Component {
    static navigationOptions = {
      title: 'Muscle Fit       ',

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
		  Photo1 : child.val().Photo1,
      Photo2 : child.val().Photo2,
      Photo3 : child.val().Photo3,
      Status : child.val().Status,
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
            <Items itemImage={{uri:item.Photo1}}
			navigation={this.props.navigation} 
			itemID={item.ID}
			category={item.category}
			Price ={item.Price}
			color = {item.color}
       brand = {item.brand}
      name = {item.name}
      Photo1 = {item.Photo1}
      Photo2 = {item.Photo2}
      Photo3 = {item.Photo3}
      Status = {item.Status}

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

renderContent (){
	if (
		(this.state.value == "All"
              ? this.state.dataSource.filter(items => (items.category == "Muscle Fit")).length
              : this.state.value == "Top Seller"
              ? this.state.dataSource.filter(items => (items.category == "Muscle Fit") && (items.Status == "Top Seller")).length
              : this.state.value == "Featured"
              ? this.state.dataSource.filter(items => ((items.category == "Muscle Fit") && (items.Status == "Featured"))).length
              : this.state.value == "Latest"
              ? this.state.dataSource.filter(items => ((items.category == "Muscle Fit") && (items.Status == "New Arrival"))).length
              : this.state.value == "RM0 - RM100"
              ? this.state.dataSource.filter(items => ((items.category == "Muscle Fit") && (items.Price <= 100))).length
              : this.state.value == "RM100 - RM200"
              ? this.state.dataSource.filter(items => ((items.category == "Muscle Fit") && ((items.Price >= 100) && (items.Price <= 200)))).length
              : this.state.value == "Above RM200"
              ? this.state.dataSource.filter(items => ((items.category == "Muscle Fit") && (items.Price >= 200))).length
              : this.state.dataSource.filter(items => (items.category == "Muscle Fit")).length)
			  != 0
	)
	return (
	<FlatList
            numColumns={2}
            data = {
              this.state.value == "All"
              ? this.state.dataSource.filter(items => (items.category == "Muscle Fit"))
              : this.state.value == "Top Seller"
              ? this.state.dataSource.filter(items => (items.category == "Muscle Fit") && (items.Status == "Top Seller"))
              : this.state.value == "Featured"
              ? this.state.dataSource.filter(items => ((items.category == "Muscle Fit") && (items.Status == "Featured")))
              : this.state.value == "Latest"
              ? this.state.dataSource.filter(items => ((items.category == "Muscle Fit") && (items.Status == "New Arrival")))
              : this.state.value == "RM0 - RM100"
              ? this.state.dataSource.filter(items => ((items.category == "Muscle Fit") && (items.Price <= 100)))
              : this.state.value == "RM100 - RM200"
              ? this.state.dataSource.filter(items => ((items.category == "Muscle Fit") && ((items.Price >= 100) && (items.Price <= 200))))
              : this.state.value == "Above RM200"
              ? this.state.dataSource.filter(items => ((items.category == "Muscle Fit") && (items.Price >= 200)))
              : this.state.dataSource.filter(items => (items.category == "Muscle Fit"))
          }
          renderItem = {this.renderItem}
          />
		  )
	else
	return (
	<Text> "No item available" </Text>
	)

}

render() {
       const {navigate} = this.props.navigation;
       var data = [["All", "Top Seller","Featured", "Latest", "RM0 - RM100", "RM100 - RM200","Above RM200"]];
       return (
      <View style={{flex: 1}}>
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'grey'}
          tintColor={'black'}
          activityTintColor={'green'}
          handler={(selection, row) => this.setState({value :data[selection][row]})}
          data={data}    
        >
        <View style={{flex: 1}}>
          {this.renderContent()}
        </View>
        </DropdownMenu>    
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
