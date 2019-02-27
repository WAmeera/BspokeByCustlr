import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

//import {Icon , Button, Container, Header, Content, Left} from 'native-base';

class LoginScreen extends React.Component{
 	 render(){
	 	 return (
		 	 <View style={styles.container}>
			 <Text> Loginss</Text>
			 </View>
			 );
		}
 }
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center', 
   justifyContent: 'center', 
   padding: 10,
  },
});