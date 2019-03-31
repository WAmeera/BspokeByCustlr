import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	AsyncStorage
} from 'react-native';
import * as firebase from 'firebase';
import HomeScreen from '../screens/HomeScreen';
import LoginForm from '../src/components/LoginForm';
import { Button, Card, CardSection, Input, Spinner, Header } from '../src/components/common';

export default class Login extends React.Component{

constructor (props){
	super (props)

	this.state = ({
		email : '',
		password : '',
		currentemail:'',
		error :'',
		loading : false,
		loggedIn : null,
		currentUser : null,
		userName : '',
		userMail : '',
		userCard : ''
	})
}

componentWillMount() {
firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
		const { currentUser } = firebase.auth();
		this.setState ({currentUser});
		const currentUser2 = this.state.currentUser;
	firebase.database().ref(`/users/${currentUser2.uid}/info`)
     .once('value', snapshot =>{
	 var items = {};
	 items = snapshot.val();
	 this.setState({
	userName : items.fullName,
	userMail : items.mailingAddress,
	userCard : items.cardNo
	});
	 console.log(this.state.userName);
    });
      } else {
        this.setState({ loggedIn: false });
      }
    });
if (this.state.currentUser != null){

 }
   /* firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'DrawerNavigator' :  'Login')
    })*/


 
 }


static navigationOptions = {
    title: 'Login',
  };

signOutUser = () => {
     firebase
      .auth()
      .signOut()
      .then(() => this.setState({ loggedIn:false}))
}

renderUser(){
const {currentUser} = this.state;
if (currentUser != null){
return(
 <Text style = {styles.container}> 
		  Hi {currentUser && currentUser.email} {"\n"}
		  Full name : {this.state.userName}{"\n"}
		  Mailing address : {this.state.userMail}{"\n"}
		  Credit card : {this.state.userCard}
		  </Text> )
		  }
else
{
	return <Spinner size="large" />;
}
}

  renderContent() {
  const { currentUser } = this.state;
    switch (this.state.loggedIn) {
      case true:
        return (
		<View style = {{height : 300}}>
			<Header headerText="User Info" />
		 {this.renderUser()}
          <Button onPress={() => this.props.navigation.navigate('Home')}>
            Start shopping
          </Button>
		  <Button onPress={() => this.props.navigation.navigate('Modalstack',{
		  name:this.state.userName,
		  mail:this.state.userMail,
		  card:this.state.userCard,
		  })}>
			Change Info
		  </Button>
		  <Button onPress={()=>this.signOutUser()}>
			Log Out
		</Button>
		 </View>
        );
      case false:
        return <LoginForm navigation={this.props.navigation} />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center', 
   fontSize : 20,
   alignSelf: 'center',
   paddingTop: 10,
   height: 60
  },
});




