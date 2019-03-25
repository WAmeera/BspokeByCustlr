import React from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Items from './components/items';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Component} from 'react';
import {AppRegistr,FlatList,ListView, ActivityIndicator,Divider, StatusBar} from 'react-native';
import * as firebase from 'firebase';


export default class SlimFit extends React.Component {
    static navigationOptions = {
      title: 'Normal Fit       ',

  };

constructor (){
      super()
      this.state = {
        dataSource : [],
        isLoading: true
      }
    } 
    
renderItem = ({item}) => {
      return(
        <View style={styles.menuContainer}>
            <Items itemImage={require('./screens/image/shirt.jpg')} navigation={this.props.navigation}>
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

componentDidMount (){
      const url = 'https://next.json-generator.com/api/json/get/41BJLq-O8?indent=1'
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.items, 
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }



 render() {
       const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>     
        <FlatList
           data = {this.state.dataSource.filter(items => (items.category == "Regular Fit"))}
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
