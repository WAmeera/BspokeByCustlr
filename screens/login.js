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

export default class Login extends React.Component{

constructor (props){
	super (props)

	this.state = ({
		email : '',
		password : '',
		currentemail:'',
		errorMessage: null 
	})
}

componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'DrawerNavigator' :  'Login')
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
	.then(() =>this.handleLogin(email,password))
	}
	catch(error){
		alert (error.toString())
	}
}

handleLogin = () => {
    const { email, password } = this.state;
	if((this.state.password.length<6)){
		alert("Please enter at least 6 characters")
		return;	
		}
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('DrawerNavigator'))
      .catch(error => this.setState({ errorMessage: error.message }))
	  alert (this.state.errorMessage);
  }



  render(){
	 	 return (
		 	 <Container style = {styles.container}>
			 
			
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
				success
				onPress={this.handleLogin}
				
				>
					<Text> Login </Text>
				</Button>

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




