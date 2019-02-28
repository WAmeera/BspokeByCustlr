import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    Image,
    ActivityIndicator,
    Divider,
    StatusBar
} from 'react-native';
/*import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';*/
/*import AppNavigator from './navigation/AppNavigator';*/
import {createStackNavigator, createAppContainer} from 'react-navigation';

/***************************class shoppingbag*************************************/
class ShoppingBag extends React.Component {
    constructor (){
      super()
      this.state = {
        dataSource : [],
        isLoading: true
      }
    }

    renderItem = ({item}) => {
      return(
        <View style ={{flex: 1, flexDirection: 'row', marginBottom: 3}}>
         <Image  style = {{width: 140, height: 190, margin: 5}}
            source = {{url : item.picture}} />
            <View style ={{flex:1, justifyContent: 'center', marginLeft :5}}>
              <Text style = {{fontSize: 10, color: 'grey', marginLeft: 200}}>
                  X
              </Text>
              <Text style  = {{fontSize: 20, color: 'black', marginBottom: 2, marginTop : 0}}>
                {item.brand}
              </Text>
              <Text style  = {{fontSize: 16, color: 'black'}}>
                {item.name}
              </Text>
              <Text style  = {{fontSize: 14, color: 'red', marginBottom: 15}}>
                RM {item.price}
              </Text>
              <Text style  = {{fontSize: 14, color: 'black'}}>
                Size: {item.size}
              </Text>
              <Text style  = {{fontSize: 14, color: 'black'}}>
                Quantity : 1
              </Text>
              <Button 
                title="Move to Wishlist" 
                onPress={() => this.props.navigation.navigate('Wishlist')}/>
              <Text style  = {{fontSize: 14, color: 'green'}}>
                Currently Available
              </Text>
            </View>
        </View>
      )
    }

    renderSeperator = () => {
      return(
        <View
          style={{height: 1, width: '100%', backgroundColour : 'black'}}>
        </View>
      )
    }

    componentDidMount (){
      const url = 'https://next.json-generator.com/api/json/get/VkrE55J8L?indent=1'
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.dummy_data,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
    render () {
      return (
        this.state.isLoading
        ?
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#330066" animating/>
        </View>
        :
        <View style = {{flex: 1, alignContent: 'center'}}>
          <FlatList
            data = {this.state.dataSource}
            renderItem = {this.renderItem}
            /*keyExtractor = {name,index} => index]*/
            ItemSeperatorComponent = {this.renderSeperator}
          />
          <View style={{ backgroundColor: '#AAAAAA'}}>
            <Text></Text>
            <Text style  = {{fontSize: 14, color: '#FFFF'}}>  Sub-total (1 item) : </Text>
            <Text></Text>
            <Text style  = {{fontSize: 14, color: '#FFFF'}}>  Est. Shipping </Text>
            <Text></Text>
            <Text></Text>
            <View style={{ borderBottomColor: '#FFFF', borderBottomWidth: 1, borderWidth: 0.5}}/>
            <Text></Text>
            <Text style  = {{fontSize: 14, color: '#FFFF'}}>  Grand total : </Text>
            <Text></Text>
            <Text></Text>
            <View style={{ borderBottomColor: '#FFFF', borderBottomWidth: 1, borderWidth: 0.5}}/>
              <View style={{ backgroundColor: 'black'}}>
                <Text></Text>
                <Text></Text>
                <Button title="Checkout" color= "black" onPress={() => this.props.navigation.navigate('Wishlist')}/>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
        </View>
    );
  }
}      

/*****************************end of class shoppingbag********************************/

/*********************************class wishlist*************************************/
class Wishlist extends React.Component {
    constructor (){
      super()
      this.state = {
        dataSource : [],
        isLoading: true
      }
    }

    renderItem = ({item}) => {
      return(
        <View style ={{flex: 1, flexDirection: 'row', marginBottom: 3}}>
         <Image  style = {{width: 140, height: 190, margin: 5}}
            source = {{url : item.picture}} />
            <View style ={{flex:1, justifyContent: 'center', marginLeft :5}}>
                <Text style = {{fontSize: 10, color: 'grey', marginLeft: 200}}>
                  X
                </Text>
              <Text style  = {{fontSize: 20, color: 'black', marginBottom: 2, marginTop : 0}}>
                {item.brand}
              </Text>
              <Text style  = {{fontSize: 16, color: 'black'}}>
                {item.name}
              </Text>
              <Text style  = {{fontSize: 14, color: 'red', marginBottom: 50}}>
                RM {item.price}
              </Text>
              <Text style  = {{fontSize: 14, color: 'black'}}>
                Size: {item.size}
              </Text>
              <Button 
              title="Add to Bag" 
              onPress={() => this.props.navigation.navigate('Cart')}/>
              <Text style  = {{fontSize: 14, color: 'green'}}>
                Available
              </Text>
            </View>
        </View>
      )
    }

    renderSeperator = () => {
      return(
        <View
          style={{height: 1, width: '100%', backgroundColour : 'black',color : 'black'}}>
        </View>
      )
    }

     componentDidMount (){
      const url = 'https://next.json-generator.com/api/json/get/Vkdkg8RBL?indent=1'
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.dummy_data,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
    render () {
      return (
        this.state.isLoading
        ?
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#330066" animating/>
        </View>
        :
        <View style = {{flex: 1, alignContent: 'center'}}>
          <FlatList
            data = {this.state.dataSource}
            renderItem = {this.renderItem}
            /*keyExtractor = {name,index} => index]*/
            /*ItemSeperatorComponent = {this.renderSeperator}*/
          />
          <View style={{ backgroundColor: 'black'}}>
                <Text></Text>
                <Text></Text>
                <Button title="View Shopping Bag" color="black" onPress={() => this.props.navigation.navigate('Cart')}/>
                <Text></Text>
                <Text></Text>
              </View>
        </View>
    );
  }
}      

/**************************end of class wishlist*****************************/

const RootStack = createStackNavigator(
  {
    Wishlist : Wishlist,
    Cart : ShoppingBag,
  },
  {
    initialRouteName: 'Wishlist',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}