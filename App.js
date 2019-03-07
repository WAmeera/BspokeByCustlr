import React from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
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
import Register from './screens/register';



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

const AppNavigator = createStackNavigator({   //control everything
  Home: {
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