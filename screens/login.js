import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ImageBackground,
  TouchableOpacity ,
  Image,
  Dimensions
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

    <View>
    <View style={styles.title}>
      <Text style = {styles.container}> 
      Hi 
      </Text>
      <Text style = {styles.container}> 
        {currentUser && currentUser.email}
      </Text>
    </View>


    <View style={styles.user}>
       <Image source={require('./image/user.png')}  style={styles.btn2}/>


    </View>





     <View style={styles.components}>

      <View style={styles.button}>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Home')} >
          <Image source={require('./image/shop.png')}  style={styles.btn}/>
        </TouchableOpacity>
      </View>
      


      <View style={styles.button}>
        <TouchableOpacity activeOpacity={1} onPress={()=>this.signOutUser()} >
          <Image source={require('./image/logout.png')}  style={styles.btn}/>
        </TouchableOpacity>
   
      </View>

    </View>






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
    <ImageBackground source={require('./image/background.jpg')} style={styles.main}>
      <View>
        {this.renderContent()}
      </View>
    </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center', 
   fontSize : 20,
   alignSelf: 'center',
   color:'#fff',

  },

  main:{
    flex:1,
    width:'100%',
    height:'100%',
  },

  components:{
    margin:55,
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

  title:{
  
    height:'15%',
    margin:30,
  },

  btn2:{
    width: Dimensions.get('window').width*0.3,
    height: Dimensions.get('window').height*0.14,
   
     
  },

  user:{
        justifyContent: 'center', 
    alignItems:'center',
  }





});
