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
import { Button, Input, Spinner, Header } from '../src/components/common';

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
    userName : ' ',
    userMail : ' ',
    userCard : ' '
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
   var items = [];
   items = snapshot.val();
   if (items !=null && items.fullName != null){
   this.setState({
  userName : items.fullName,
  });}
  if (items !=null && items.mailingAddress != null){
   this.setState({
  userMail : items.mailingAddress,
  });}
  if (items !=null && items.cardNo != null){
   this.setState({
  userCard : items.cardNo,
  });}
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
  };

signOutUser = () => {
     firebase
      .auth()
      .signOut()
      .then(() => this.setState({ loggedIn:false}))
}

renderFullName(){
	if (this.state.userName != ' ')
	return (
	<Text style = {styles.container}>
	Full name : {this.state.userName}{"\n"}
	</Text>
	);
	else
	return (
	<Text style = {styles.container}>
	Full name : PLEASE SET YOUR NAME{"\n"}
	</Text>
	);
}

renderMail(){
	if (this.state.userMail != ' ')
	return (
	<Text style = {styles.container}>
	Mailing Address : {this.state.userMail}{"\n"}
	</Text>
	);
	else
	return (
	<Text style = {styles.container}>
	Mailing Address : PLEASE SET YOUR ADDRESS{"\n"}
	</Text>
	);
}


renderUser(){
const {currentUser} = this.state;
if (currentUser != null){

return(
<View style = {styles.container}>
	<Text style = {styles.container}> 
      Hi {currentUser && currentUser.email} {"\n"}
	  </Text>
      {this.renderFullName()}
      {this.renderMail()}
 </View>      )
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



    <View>
    





      <View style={styles.user}>
        <Image source={require('./image/user.png')}  style={styles.btn2}/>
      </View>


<View style = {{height : 300}}>

    <View style={styles.info}>
     {this.renderUser()}
    </View>

      <View style={styles.components}>

        <View style={styles.button}>
          <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Dashboard')} >
            <Image source={require('./image/shop.png')}  style={styles.btn}/>
          </TouchableOpacity>
        </View>
      


        <View style={styles.button}>
          <TouchableOpacity activeOpacity={1} onPress={()=>this.signOutUser()} >
            <Image source={require('./image/logout.png')}  style={styles.btn}/>
          </TouchableOpacity>
   
        </View>


        <View style={styles.button}>
          <TouchableOpacity activeOpacity={1}  onPress={() => this.props.navigation.navigate('AddressModal',{
            name:this.state.userName,
            mail:this.state.userMail,
            card:this.state.userCard,
        })} >
            <Image source={require('./image/changeInfo.png')}  style={styles.btn}/>
          </TouchableOpacity>
   
  </View> 
  
		<View style={styles.button}>
          <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Shipment')} >
            <Text source={require('./image/changeInfo.png')}  style={styles.btn}/>
          </TouchableOpacity>
		
  </View>   

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
   fontSize : 16,
   textAlign: 'center',
   alignSelf: 'center',
   color:'#fff',
   fontWeight:'bold',
   width: Dimensions.get('window').width*0.8,
    alignItems:'center',


  },

  main:{
    flex:1,
    width:'100%',
    height:'100%',
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
    margin:35,
  },

  info:{

    height: Dimensions.get('window').height*0.15,


  }





});
