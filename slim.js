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
import DropdownMenu from 'react-native-dropdown-menu';

export default class SlimFit extends React.Component {
   /* state = {
      rendervalue : 1,
      //text : 'All'
    }*/

    static navigationOptions = ({navigation}) => {
      /*global.rendervalue = 1;
      return{
      title: navigation.getParam('Title', 'Slim Fit'),
      headerRight: (
       <CustomMenu
          menutext="All"
          menustyle={{
            marginRight: 16,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
          textStyle={{
            color: 'white',
          }}
          option1Click={() => {
            rendervalue = 1;
            menutext="All"
            //navigation.navigate('Slim');
            this.handleClick();
          }}
          option2Click={() => {
            //navigation.navigate('slimtopseller');
            rendervalue = 2;
            menutext="Top Seller"
             this.handleClick();
            
          }}
          option3Click={() => {
            //navigation.navigate('slimfeatured');
             rendervalue = 3;
            menutext = "Featured"
             this.handleClick();
          }}
          option4Click={() => {
            //navigation.navigate('slimlatest');
            rendervalue = 4;
            menutext = "Latest"
            this.handleClick();
          }}
           option5Click={() => {
           //navigation.navigate('slim0to100');
            rendervalue = 5;
            menutext = "RM0-RM100"
            this.handleClick();
          }}
           option6Click={() => {
            //navigation.navigate('slim100to200');
             rendervalue = 6;
             menutext = "RM100-RM200" 
             this.handleClick();
          }}
           option7Click={() => {
            //navigation.navigate('slim200above');
             rendervalue = 7;
             menutext = "Above RM200"
             this.handleClick.bind(this);
             
          }}
        />),
     };
     title: navigation.getParam('Title', 'Slim Fit'),
     /*var data = ["All", "Top Seller","Featured", "Latest", "RM0 - RM100", "RM100 - RM200","Above RM200"];
      headerRight: (
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
        </DropdownMenu>*/

     // ), */
     return{
      title: navigation.getParam('Title', 'Slim Fit'),
    };

  };

   /*static handleClick() {
    //this.render();
    this.componentWillMount();
  }*/

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
       brand = {item.brand}
      name = {item.name}
      Photo1 = {item.Photo1}
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
       Status : child.val().Status,
       });
    });
  this.setState({
  dataSource : items
 });
 });
 };


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
          <FlatList
            numColumns={2}
            data = {
              this.state.value == "All"
              ? this.state.dataSource.filter(items => (items.category == "Slim Fit"))
              : this.state.value == "Top Seller"
              ? this.state.dataSource.filter(items => (items.category == "Slim Fit") && (items.Status == "Top Seller"))
              : this.state.value == "Featured"
              ? this.state.dataSource.filter(items => ((items.category == "Slim Fit") && (items.Status == "Featured")))
              : this.state.value == "Latest"
              ? this.state.dataSource.filter(items => ((items.category == "Slim Fit") && (items.Status == "New Arrival")))
              : this.state.value == "RM0 - RM100"
              ? this.state.dataSource.filter(items => ((items.category == "Slim Fit") && (items.Price <= 100)))
              : this.state.value == "RM100 - RM200"
              ? this.state.dataSource.filter(items => ((items.category == "Slim Fit") && ((items.Price >= 100) && (items.Price <= 200))))
              : this.state.dataSource.filter(items => ((items.category == "Slim Fit") && (items.Price >= 200)))
          }
          renderItem = {this.renderItem}
          />
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
 

