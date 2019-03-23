import React from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Items from './components/items';



export default class RegulareFit extends React.Component {
    static navigationOptions = {
      title: 'RegularFit       ',

  };

  render() {
       const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
       
      <ScrollView>
        <View style={styles.menuContainer}>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
            <Items itemImage={require('./images/shirt.jpg')} item="test1" navigation={this.props.navigation}/>
    
            
        </View>
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




  menuContainer:{
    height: '40%',
    flexDirection:'row',
    flexWrap: 'wrap',
  }




});
