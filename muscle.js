import React from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Items from './components/items';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Grid from 'react-native-grid-component';



export default class MuscleFit extends React.Component {
    static navigationOptions = {
      title: 'MuscleFit       ',

  };
  render() {
       const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
       
      <ScrollView style={styles.scroll}>
        <View style={styles.menuContainer}>
            <Items itemImage={require('./screens/image/shirt.jpg')} text1="test1" text2="test2" navigation={this.props.navigation}/>
            <Items itemImage={require('./screens/image/shirt.jpg')} text1="test1" text2="test2" navigation={this.props.navigation}/>
            <Items itemImage={require('./screens/image/shirt.jpg')} text1="test1" text2="test2" navigation={this.props.navigation}/>
            <Items itemImage={require('./screens/image/shirt.jpg')} text1="test1" text2="test2" navigation={this.props.navigation}/>
            <Items itemImage={require('./screens/image/shirt.jpg')} text1="test1" text2="test2" navigation={this.props.navigation}/>
            <Items itemImage={require('./screens/image/shirt.jpg')} text1="test1" text2="test2" navigation={this.props.navigation}/>
            <Items itemImage={require('./screens/image/shirt.jpg')} text1="test1" text2="test2" navigation={this.props.navigation}/>

        </View>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:wp('100%'),
    height:hp('100%'),

  },




  menuContainer:{
    flexDirection:'row',
    flexWrap: 'wrap',
  },

  scroll:{
        backgroundColor:'#efefef',

  }




});
