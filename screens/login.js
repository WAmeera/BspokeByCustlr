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
		currentUser : null
	})
}



componentWillMount() {
 const { currentUser } = firebase.auth();
    this.setState({ currentUser });
firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
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

  renderContent() {
  const { currentUser } = this.state
    switch (this.state.loggedIn) {
      case true:
        return (
		<View style = {{height : 300}}>
			<Header headerText="User Info" />
		  <Text style = {styles.container}> 
		  Hi {currentUser && currentUser.email}
		  </Text>
          <Button onPress={() => this.props.navigation.navigate('HomeScreen')}>
            Start shopping
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




