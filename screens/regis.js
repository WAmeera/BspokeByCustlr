import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	AsyncStorage
} from 'react-native';
import {Container,Content,Header,Form,Input,Item,Button,Label} from 'native-base';
import * as firebase from 'firebase';
import HomeScreen from '../screens/HomeScreen';

export default class Register extends React.Component{

constructor (props){
	super (props)

	this.state = ({
		email : '',
		password : '',
		currentemail:'',
		errorMessage: null 
	})
}

static navigationOptions = {
    title: 'Login',
  };

signUp = (email,password) => {
	try {

	if((this.state.password.length<6)){
		alert("Please enter at least 6 characters")
		return;	
		}
	
	firebase.auth().createUserWithEmailAndPassword(email,password)
	.then(() => this.props.navigation.navigate('Login'))
	.then(() =>alert (email + " Registered successfully"))
	
	}
	
	catch(error){
		alert (error.toString())
	}
}


  render(){
	 	 return (
		 	 <Container style = {styles.container}>
			 
			<Text style = {{fontSize:48 , fontWeight:'bold'}}>Register </Text>
			 <Form>
				<Item floatingLabel>
					<Label>Email</Label>
					 <Input
						autoCorrect = {false}
						autoCapitalize="none"
						onChangeText= {(email) => this.setState ({email})}
					/>
				</Item>

				<Item floatingLabel>
					<Label>Password</Label>
					 <Input
						secureTextEntry
						autoCorrect = {false}
						autoCapitalize="none"
						onChangeText= {(password) => this.setState ({password})}
					/>
				</Item>

				<Button style ={{ marginTop:10}}
				full
				rounded
				primary
				onPress={()=> this.signUp(this.state.email,this.state.password)}
				>
					<Text> Signup </Text>
				</Button>
				
			</Form>
			
		</Container>
			 );
		}
 }


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center', 
   padding: 10,
  },
});




