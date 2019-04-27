import React from 'react';
import { TouchableOpacity, Dimensions,Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import {createBottomTabNavigator,createAppContainer, createStackNavigator, StackActions, NavigationActions,createDrawerNavigator, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import Items from './components/items';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';
import ShoppingBag from './screens/ShoppingBag';
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


const RegisterNavigator = createSwitchNavigator({  
  Register: {
    screen: Register,
	},
	Login: {
		screen:Login,
	},
	AddressModal :{
  screen : AddressModal,},
	
  },);

 
const DashboardTabNavigator = createBottomTabNavigator({    
  HomeScreen,
  ShoppingBag,  
  Recommendation,
  TextSearch,
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
	headerRight: <TouchableOpacity onPress={()=> navigation.navigate('Login') }>
		<Image source={require('./image/homeicon.png')}
            style={{width:22,height:22,tintColor:'white',marginRight : 20}}>
            </Image></TouchableOpacity>

}

)


const navigateAction = NavigationActions.navigate({
  routeName: 'Login' });


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

  Dashboard:{
  	screen: DashboardTabNavigator,
	navigationOptions: ({ navigation }) => ({
	  headerRight: <TouchableOpacity onPress={()=> navigation.navigate('Login') }>
		<Image source={require('./screens/image/userIcon.png')}
            style={{width:22,height:22,tintColor:'white',marginRight : 20}}>
            </Image></TouchableOpacity>
    }),
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

  Payment1:{
    screen: Payment1,
  },
  Payment2:{
    screen: Payment2,
  },
  Payment3:{
    screen: Payment3,
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

  
  
}, 
{

    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

	  
    },
}
);




const StartNavigator = createSwitchNavigator({
Intro:{
    screen: Intro,
  },
AppNavigator:{
	screen: AppNavigator,
},
},
{
	initialRouteName : 'Intro',
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








export default createAppContainer(StartNavigator);    //call the class