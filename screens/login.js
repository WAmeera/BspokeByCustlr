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
		loading : false
	})
}

componentWillMount() {
firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'DrawerNavigator' :  'Login')
    })

  }

static navigationOptions = {
    title: 'Login',
  };



  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
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
        <Header headerText="Login" />
        {this.renderContent()}
      </View>
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




