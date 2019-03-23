import React, { Component } from 'react';
import {TouchableOpacity, Image, ScrollView,Button, Linking, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import TailorItem from './TailorItem';

export default class Tailor1 extends Component {

    static navigationOptions = {
      title: 'Tailors       ',

  };


  render() {



    return (
      <View style={styles.container}>
    
         <ScrollView style={styles.menuContainer}>

            <TailorItem itemImage={require('./p4.png')} numbers='0167385903' coordinate='https://www.google.com/maps/search/?api=1&query=12.8797,121.7740'/>
            



         </ScrollView>







      </View>
    );
  }
  

  

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',

  },




  menuContainer: {

        width:'100%',
        height:'100%',
  },



});