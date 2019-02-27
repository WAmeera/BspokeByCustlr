import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import {createStackNavigator , createAppContainer, createDrawerNavigator} from 'react-navigation';

import PersonalInfo from './screens/PersonalInfo';
import PaymentInfo from './screens/PaymentInfo';

export default class App extends React.Component {
 
  render() {
   
      return (
		<AppContainer/>
		
      );
    }
  }

 
 const AppDrawerNavigator = createDrawerNavigator(
	 {
		PersonalInformation : PersonalInfo,
		PaymentInformation : PaymentInfo
	 },
	 {
		unmountInactiveRoutes: true,
	 	 defaultNavigationOptions:{
		 headerStyle: {
		 backgroundColor: 'orange'
		 }
	 }
 }
 );

const AppContainer= createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
  },
});
