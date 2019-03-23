import React, { Component } from 'react';
import {TouchableOpacity, Image, ScrollView,Button, Linking, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import TailorItem from './TailorItem';

export default class Tailor extends Component {

    static navigationOptions = {
      title: 'Custom Tailor       ',

  };


  render() {



    return (
      <View style={styles.container}>
    
         <ScrollView style={styles.menuContainer}>

            <TailorItem itemImage={require('./p1.png')} numbers='0167385903' coordinate='https://www.google.com/maps/search/?api=1&query=2.9451,101.8761'/>
            <TailorItem itemImage={require('./p1.png')} numbers='0166666666' coordinate='https://www.google.com/maps/search/?api=1&query=3.0465,101.6185'/>
            <TailorItem itemImage={require('./p1.png')} numbers='0167777777' coordinate='https://www.google.com/maps/search/?api=1&query=2.9451,101.8761'/>
            <TailorItem itemImage={require('./p1.png')} numbers='0168888888' coordinate='https://www.google.com/maps/search/?api=1&query=2.9451,101.8761'/>
            <TailorItem itemImage={require('./p1.png')} numbers='0169999999' coordinate='https://www.google.com/maps/search/?api=1&query=2.9451,101.8761'/>





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