import React, {Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,ActivityIndicator,Divider, StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';





/***************************class ShoppingBag*************************************/
export default class ShoppingBag extends React.Component {
  static navigationOptions = {
      title: 'Cart   ',
  };
    //default constructor for class ShoppingBag
    constructor (){
      super()
      this.state = {
        dataSource : [],
        isLoading: true
      }
    }
  //function renderItem - will show the informations fetched from the database to the user-end (the shopping bag list)
  //function renderSeperator - will show a line, in this class it is used to seperate each items on the list
  //function componentDidMount - fetch data and information from the database - current url used is a dummy data created using an online json generator
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
          dataSource: responseJson.dummy_data, //dummy data is the name of the data source
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }

    //main function for the class ShoppingBag; function componentDidMount, renderItem, and renderSeperator is called in this function as well
    //ActivityIndicator animates the "loading" in the ShoppingBag page
    //keyExtractor is a variable that will be used once the real database is implemented (i forgot to put a unique index in the dummy data)
    //if you encounter a warning of "missing keys of items" that was because the keyExtractor stated above, ignore it for the time being
    //line 119 - 127 : buttons and its styling for the button used to navigate from this ShoppingBag page to the payment page
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
            <Text style  = {{fontSize: 14, color: '#FFFF'}}>  Sub-total (3 item) : </Text>
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
                <Button title="Checkout" color= "black" onPress={() => this.props.navigation.navigate('Payment1')}/>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
        </View>
    );
  }
} 