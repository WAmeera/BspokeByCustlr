import React from 'react';
import { Dimensions,Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import {createBottomTabNavigator,createAppContainer, createStackNavigator, StackActions, NavigationActions,createDrawerNavigator, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
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
import MuscleFit from './muscle';
import RegularFit from './normal';
import SlimFit from './slim';
import Tailor from './screens/TailorScreen';
import TailorOptions from './screens/TailorOptions';
import Tailor1 from './screens/Tailor1';
import Tailor2 from './screens/Tailor2';
import Tailor3 from './screens/Tailor3';
import Tailor4 from './screens/Tailor4';
import Login from './screens/login';
import Recommendation from './screens/Recom';
import Register from './screens/regis';
import MenuDrawer from './components/MenuDrawer';
import * as firebase from 'firebase';
import AddressModal from './screens/AddressModal';
import LoginForm from './src/components/LoginForm';
import TextSearch from './screens/TextSearch';
import Shipment from './screens/shipment';
import statusModal from './screens/statusModal';
import normaltopseller from './normal-topseller';  ///
import normalfeatured from './normal-featured'; 
import normallatest from './normal-latest'; 
import normal0to100 from './normal-0-100'; 
import normal100to200 from './normal-100-200'; 
import normal200above from './normal-above200'; 
import muscletopseller from './muscle-topseller';  ///
import musclefeatured from './muscle-featured'; 
import musclelatest from './muscle-latest'; 
import muscle0to100 from './muscle-0-100'; 
import muscle100to200 from './muscle-100-200'; 
import muscle200above from './muscle-above200'; 
import slimtopseller from './slim-topseller';  ///
import slimfeatured from './slim-featured'; 
import slimlatest from './slim-latest'; 
import slim0to100 from './slim-0-100'; 
import slim100to200 from './slim-100-200'; 
import slim200above from './slim-above200'; 
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
	Modalstack: {
    screen: Modalstack,
	},
  },);



const DashboardTabNavigator = createBottomTabNavigator({
  HomeScreen,
  ShoppingBag,  
  Recommendation,
  Search:{
    screen:TextSearch
  },
},
{ 
    tabBarOptions: {
      activeTintColor: '#a54c4c',
      inactiveTintColor: 'white',

        style: {
          backgroundColor: '#606060',
        },
        labelStyle: {
          fontSize: 12,
          paddingLeft:2
        },
    },
}

)

const AppNavigator = createStackNavigator({   //control everything
statusModal :{
	screen: statusModal,
},
Shipment :{
	screen: Shipment,
},
TextSearch :{
	screen: TextSearch,
},
LoginForm :{
	screen: LoginForm,
},
Recommendation:{
	screen: Recommendation,
},
 RegisterNavigator: {
    screen: RegisterNavigator,
  },
  DrawerNavigator: {
    screen: DrawerNavigator,
  },
  Dashboard:{
  	screen: DashboardTabNavigator,
  },
    Home:{
    screen: HomeScreen,
  },
  

  Details: {
    screen: DetailsScreen,
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
    Muscle:{
    screen: MuscleFit,
  },
    Regular:{
    screen: RegularFit,
  },
    Slim:{
    screen: SlimFit,
  },
      Tailor:{
    screen: Tailor,
  },
      TailorOptions:{
    screen: TailorOptions,
  },
        Tailor1:{
    screen: Tailor1,
  },
      Tailor2:{
    screen: Tailor2,
  },
        Tailor3:{
    screen: Tailor3,
  },
        Tailor4:{
    screen: Tailor4,
  },
   normaltopseller : {
    screen: normaltopseller,
  },

  normalfeatured : {
    screen: normalfeatured,
  },

  normallatest : {
    screen: normallatest,
  },

  normal0to100 : {
    screen: normal0to100,
  },

  normal100to200 : {
    screen: normal100to200,
  },

  normal200above : {
    screen: normal200above,
  },

  muscletopseller : {
    screen: muscletopseller,
  },

  musclefeatured : {
    screen: musclefeatured,
  },

  musclelatest : {
    screen: musclelatest,
  },

  muscle0to100 : {
    screen: muscle0to100,
  },

  muscle100to200 : {
    screen: muscle100to200,
  },

 muscle200above : {
    screen: muscle200above,
  },
  /////
  slimtopseller : {
    screen: slimtopseller,
  },

  slimfeatured : {
    screen: slimfeatured,
  },

  slimlatest : {
    screen: slimlatest,
  },

  slim0to100 : {
    screen: slim0to100,
  },

  slim100to200 : {
    screen: slim100to200,
  },

 slim200above : {
    screen: slim200above,
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












export default createAppContainer(AppNavigator);    //call the class