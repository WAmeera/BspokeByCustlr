import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  handleLogin = () => {
    const { email, password } = this.state;
	this.setState({ error: '', loading: true });
	
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
	  .catch(error => this.setState({ error: 'Wrong email and password combination' }))
	  .then(() => this.setState({
      email: '',
      password: '',
      loading: false
    }))
      
  }

  componentWillMount() {
firebase.auth().onAuthStateChanged((user) => {
      if (user) 
        this.setState({ error: ''});
      
    });
   /* firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'DrawerNavigator' :  'Login')
    })*/

  }

  handleSignUp =() =>{
  this.props.navigation.navigate('Register')
  }

  onLoginFail() {
    this.setState({ error: 'Email or Password is invalid', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
	<View style ={{ height:100, width:360, alignItems: 'center'}}>

	<View style= {{ height:40, width:360,  alignItems :'center'}} >
      <Button onPress={this.handleLogin}>
        Log in
      </Button>
	</View>
	<View style= {{ height:40, width:360,  alignItems :'center'}} >
	  <Button onPress={this.handleSignUp}>
		Register
	  </Button>
	</View>
	</View>
    );
  }

  render() {
    return (
	<View>
		<Header headerText="Login" />
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <View style= {{ height:120, width:360,  alignItems :'center'}}>
          {this.renderButton()}
        </View>
      </Card>
	</View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
};

export default LoginForm;
