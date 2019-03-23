import React from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
//import items from './components/items';





export default class CatalogueScreen extends React.Component {
    static navigationOptions = {

  };

  render() {
       const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
        <View style={styles.top}>
             <Text style={styles.header}> Shirts </Text>
        </View>

        <ScrollView style={styles.menuContainer}>

           <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1"/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1"/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1"/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1"/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1"/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1"/>  


        </ScrollView>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',

  },

  top: {
       backgroundColor: '#8E8E8E',
       width:'100%',
       alignItems: 'center',

  },
    header: {
      fontSize: 30,
      color: '#ffffff',

    },



  menuContainer: {

        width:'100%',
        height:'100%',
  },



});
