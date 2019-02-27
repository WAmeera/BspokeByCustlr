import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	 AppRegistry, 
	 TextInput
} from 'react-native';

export default class PersonalInfo extends React.Component{

	constructor() {
		super()
		this.state = {
			FullName : "",
			PhoneNO : "",
			MailAddress : "",
		}
		//this.buttonPressed = this.buttonPressed.bind(this)
	}

	//buttonPressed(){}
 	 render(){
	 	 return (
		 	 <View style={styles.container}>
			 <Text style={{fontSize:35,fontWeight:'bold'}}> Personal Information </Text> 
			 <Text style={{fontSize:25}}> Full Name</Text>
			 <TextInput style={{fontSize:25,borderColor: 'black',borderWidth: 1}}
				onChangeText={(FullName) => this.setState({FullName})}
				value = {this.state.FullName}
				/>

			<Text style={{fontSize:25}}> Phone Number</Text>
			 <TextInput style={{fontSize:25,borderColor: 'black',borderWidth: 1}}
				onChangeText={(PhoneNO) => this.setState({PhoneNO})}
				value = {this.state.PhoneNO}
				/>

			<Text style={{fontSize:25}}> Mailing Address</Text>
			 <TextInput style={{fontSize:25,borderColor: 'black',borderWidth: 1}}
				onChangeText={(MailAddress) => this.setState({MailAddress})}
				value = {this.state.MailAddress}
				/>

			<Text> Full Name is {this.state.FullName} </Text>
			 </View>
			 );
		}
 }

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'flex-start', 
   padding: 20,
   fontSize: 40
  },
});