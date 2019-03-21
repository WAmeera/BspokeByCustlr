import React from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions,createDrawerNavigator, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import Items from './components/items';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';
import ShoppingBag from './screens/ShoppingBag';
import Wishlist from './screens/wishlist';
import Payment1 from './screens/payment1';
import Payment2 from './screens/payment2';
import Payment3 from './screens/payment3';
import Intro from './screens/intro';
import Options from './screens/options';
import Size from './screens/size';
import Custom from './screens/custom';
import Login from './screens/login';
import Register from './screens/regis';
import MenuDrawer from './components/MenuDrawer';
import * as firebase from 'firebase';
import AddressModal from './screens/AddressModal'
//connect to database
var config = {
    apiKey: "AIzaSyB5abld-pkUYqwM8SCSzzqjRO171JPsLDU",
    authDomain: "bespoke-efeb7.firebaseapp.com",
    databaseURL: "https://bespoke-efeb7.firebaseio.com",
    projectId: "bespoke-efeb7",
    storageBucket: "bespoke-efeb7.appspot.com",
    messagingSenderId: "1066250665615"
  };

  firebase.initializeApp(config);
  
  console.log(firebase); //to check whether u've successfully connected to database or not (comment this code out if unused)
  
  //insert catalogue items into database (comment this part out if unused)
  /*firebase.database().ref('items/0016').set(
    {
      name: 'Pin-Point Oxford T-shirt',
      brand: 'Custlr',
      category: 'Regular Fit',
      Details: 'A distinctive fine look and feel for your everyday outdoor wear.',
      Materials: '85% Cotton - 15% Polyester',
      Availability: 'Currently Available',
      QuantityAvailable: 7,
      Price: 79.90,
      Size: 'M',
      Status: 'New Arrival',
      Photo1: '',   
      Photo2: '',
      Photo3: '',
    }
  ).then(() => {
    console.log('INSERTED !');
  }).catch((error) => {
    console.log(error);
  });*/

class CatalogueScreen extends React.Component {
    static navigationOptions = {
      title: 'Catalogue       ',

  };

  render() {
       const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
       

        <ScrollView style={styles.menuContainer}>

            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>


        </ScrollView>
    </View>
    );
  }
}

const DrawerConfig = {

	contentComponent:({navigation})=>{
		return(<MenuDrawer navigation ={navigation}/>)
	}
}
const Modalstack = createStackNavigator(
{
	AddressModal :{
		screen : AddressModal,
	}
},
{mode : 'modal',
});

const DrawerNavigator = createDrawerNavigator(
{
	Home:{
	screen:HomeScreen,},
	Modalstack: {
    screen: Modalstack,},
	AddressModal :{
	screen : AddressModal,},
},
DrawerConfig,
);

const RegisterNavigator = createSwitchNavigator({  
  Register: {
    screen: Register,
	},
	Login: {
		screen:Login,
	},
  },);

const AppNavigator = createStackNavigator({   //control everything
Register: {
    screen: Register,
	},
 RegisterNavigator: {
    screen: RegisterNavigator,
  },
  DrawerNavigator: {
    screen: DrawerNavigator,
  },
  Home:{
  	screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  }, 
  Catalogue:{
    screen: CatalogueScreen,
  },
  ShoppingBag:{
    screen: ShoppingBag,
  },
  Wishlist:{
    screen: Wishlist,
  },
  Payment1:{
    screen: Payment1,
  },
  Payment2:{
    screen: Payment2,
  },
  Payment3:{
    screen: Payment3,
  },
    Intro:{
    screen: Intro,
  },
    Options:{
    screen: Options,
  },
    Size:{
    screen: Size,
  },
    Custom:{
    screen: Custom,
  },
    Login:{
    screen: Login,
  },
    Register:{
    screen: Register,
  },
}, 
{
    initialRouteName: 'Intro',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#003061',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
}
);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',

  },




  menuContainer: {

        width:'100%',
        height:'100%',
  },



});

export default createAppContainer(AppNavigator);    //call the class