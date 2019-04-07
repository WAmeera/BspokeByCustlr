import React, {Component} from 'react';
import {
	TouchableOpacity,
	Dimensions,
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
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
    title: 'Register     ',
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
	 	 <ImageBackground source={require('./image/background.jpg')} style={styles.main}>

		 	 <View style = {styles.container}>

			 <View style={styles.title}>
				<Text style = {{fontSize:30 , fontWeight:'bold', color:'#fff'}}>Register </Text>
				 

			</View>
			<View style={styles.user}>
        			<Image source={require('./image/regi.png')}  style={styles.btn2}/>
      		</View>

			<View style={styles.form}>
			 <Form>
				<Item floatingLabel>
					<Label style = {{color:'#fff', fontWeight:'bold'}}>Email</Label>
					 <Input
						autoCorrect = {false}
						autoCapitalize="none"
						style = {{color:'#fff'}}
						onChangeText= {(email) => this.setState ({email})}
					/>
				</Item>

				<Item floatingLabel>
					<Label style = {{color:'#fff',fontWeight:'bold'}}>Password</Label>
					 <Input
						secureTextEntry
						autoCorrect = {false}
						autoCapitalize="none"
						style = {{color:'#fff'}}
						onChangeText= {(password) => this.setState ({password})}
					/>
				</Item>

				



      <View style={styles.components}>

				  <View style={styles.button}>

     				<TouchableOpacity activeOpacity={1} onPress={()=> this.signUp(this.state.email,this.state.password)} >
               			<Image source={require('./image/register.png')}  style={styles.btn}/>
      				</TouchableOpacity>

   				  </View>
	  </View>
				
			</Form>
			</View>
		</View>
	 </ImageBackground>
			 );
		}
 }


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center', 
   padding: 10,

  },
    components:{
    margin:30,

  },

button:{
    justifyContent: 'center', 
    alignItems:'center',
    marginBottom:10,
  },

  btn:{
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').height*0.06,
   
     
  },
    main:{
    flex:1,
    width:'100%',
    height:'100%',
  },

  title:{
  	width:'100%',
  	height:'10%',
  	justifyContent: 'center', 
    alignItems:'center',
  	margin:10,
  	position:'absolute',
  	top:100,
  },

    btn2:{
    width: Dimensions.get('window').width*0.2,
    height: Dimensions.get('window').height*0.1,
   
     
  },

  user:{
    justifyContent: 'center', 
    alignItems:'center',
 

  },



});
