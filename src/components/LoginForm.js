import React, { Component } from 'react';
import { TouchableOpacity,Dimensions,Image,Text, View } from 'react-native';
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

  <View style ={{height:Dimensions.get('window').height*0.2, width: Dimensions.get('window').width8, alignItems:'center'}}>

<View style={styles.button}>

     <TouchableOpacity activeOpacity={1} onPress={this.handleLogin} >
       
        <Image source={require('./login.png')}  style={styles.btn}/>
      </TouchableOpacity>

   </View>

  <View style={styles.button}>



     <TouchableOpacity activeOpacity={1} onPress={this.handleSignUp} >
       
        <Image source={require('./register.png')}  style={styles.btn}/>
      </TouchableOpacity>

     </View>




  </View>
    );
  }

  render() {
    return (
	<View>
     <View style={styles.image}>

      <Image source={require('./logo.png')}  style={styles.img}/>



    </View>
    <View style={styles.card}>
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

          {this.renderButton()}
        

      </Card>
    </View>
	</View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red',
  },



  button:{
    margin:5,
  },

  img:{
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').height*0.2,

  },
  image:{
    
    alignItems:'center',
    justifyContent:'center',
  
  },

  header:{
    fontWeight:'bold',
  },

  card:{
    margin:30,
  },

  btn:{
    width: Dimensions.get('window').width*0.4,
    height: Dimensions.get('window').height*0.06,
     
  }
};

export default LoginForm;
