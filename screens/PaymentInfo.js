import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	 AppRegistry, 
	 TextInput
} from 'react-native';

export default class PaymentInfo extends React.Component{

	constructor() {
		super()
		this.state = {
			CardNo : "",
			Expiry : "",
			CardHolder : "",
		}
		//this.buttonPressed = this.buttonPressed.bind(this)
	}

	//buttonPressed(){}
 	 render(){
	 	 return (
		 	 <View style={styles.container}>
			 <Text style={{fontSize:35,fontWeight:'bold'}}> Payment Information </Text> 
			 <Text style={{fontSize:25}}> Credit/Debit Card Number</Text>
			 <TextInput style={{fontSize:25,borderColor: 'black',borderWidth: 1}}
				onChangeText={(CardNo) => this.setState({CardNo})}
				value = {this.state.CardNo}
				/>

			<Text style={{fontSize:25}}> Card Expiry Date</Text>
			 <TextInput style={{fontSize:25,borderColor: 'black',borderWidth: 1}}
				onChangeText={(Expiry) => this.setState({Expiry	})}
				value = {this.state.Expiry}
				/>

			<Text style={{fontSize:25}}> Mailing Address</Text>
			 <TextInput style={{fontSize:25,borderColor: 'black',borderWidth: 1}}
				onChangeText={(CardHolder) => this.setState({MailAddress})}
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