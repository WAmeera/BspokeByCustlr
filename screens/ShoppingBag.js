import React, {Component} from 'react';
import {Dimensions,TouchableOpacity,Styles,AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,ActivityIndicator,Divider, StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as firebase from 'firebase';


/***************************class ShoppingBag*************************************/
export default class ShoppingBag extends React.Component {
   static navigationOptions = {
          title: 'Cart     ',
          tabBarIcon:({tintColor}) =>(
        <View style={{paddingRight:5,paddingTop:2}}>
 
          <Image source={require('./image/cart.png')}
            style={{width:23,height:23,tintColor:'white'}}>
            </Image>
        </View>
        )
  };
    //default constructor for class ShoppingBag
    constructor (){
      super()
      this.state = {
        dataSource : [],
        isLoading: true,
		currentUser : null
      }
    }
  
  componentWillMount (){
   global.itemCount = 0;  
   global.totalPrice = 0; 
  firebase.auth().onAuthStateChanged((user) => {
   const { currentUser } = firebase.auth();
    this.setState ({currentUser});
    const currentUser2 = this.state.currentUser;
  
  firebase.database().ref(`ShoppingBag/${currentUser2.uid}/cart/`).once('value', snapshot =>{
   var ShoppingBag = [];
     snapshot.forEach((child) => {
       ShoppingBag.push({
          brand: child.val().brand,
          name: child.val().name,
          Price: child.val().Price,
          itemID : child.val().itemID,
          Size: child.val().size,
          Quantity: child.val().Quantity,
          Photo1: child.val().Photo1,
          category: child.val().category,
          collar: child.val().collar,
          shoulder: child.val().shoulder,
          chest: child.val().chest,
          sleeve: child.val().sleeve,
          uniqueKey: child.key,
		  
       });
        itemCount += 1; 
        totalPrice += child.val().Price; 
    });
  this.setState({
  dataSource : ShoppingBag
 });
 });
 })};

  //function renderItem - will show the informations fetched from the database to the user-end (the shopping bag list)
  //function renderSeperator - will show a line, in this class it is used to seperate each items on the list
    renderItem = ({item}) => {
      const size = this.props.navigation.getParam('size', '');
      var itemprice = item.Price;  
      var uniqueKey = item.uniqueKey;  
      return(
        <View style ={{flex: 1, flexDirection: 'row', marginBottom: 3}}>
         <Image  style = {{width: 140, height: 190, margin: 5}}
            source = {{uri : item.Photo1}} />
            <View style ={{flex:1, justifyContent: 'center', marginLeft :5}}>
              <Text style  = {{fontSize: 20, color: 'black', marginBottom: 2, marginTop : 0}}>
                {item.brand}
              </Text>
              <Text style  = {{fontSize: 16, color: 'black'}}>
                {item.name}
              </Text>
              <Text style  = {{fontSize: 14, color: 'red', marginBottom: 15}}>
                RM {item.Price}
              </Text>
              <Text style  = {{fontSize: 14, color: 'black'}}>
                Size : {item.Size} 
              </Text>
              <Text style  = {{fontSize: 14, color: 'black', marginBottom: 2}}>
                Measurement : {item.collar}cm (Collar) - {item.shoulder}cm (Shoulder) - {item.chest}cm (Chest) - {item.sleeve}cm (Sleeve)
              </Text>
              <Text style  = {{fontSize: 14, color: 'green'}}>
                Quantity : {item.Quantity} 
              </Text>
               <Button onPress={() => this.deleteData(uniqueKey, itemprice)} title="Remove Item" color="black"/> 
            </View>
        </View>
      )
    }

    deleteData  = (key, price)  => { 
	const currentUser2 = this.state.currentUser;
      totalPrice -= price;  
      itemCount -= 1;
      firebase.database().ref(`ShoppingBag/${currentUser2.uid}/cart/`).child(key).remove();
      this.onDelete();
    }

    onDelete = () => {
      this.componentWillMount ();
    }

    renderSeperator = () => {
      return(
        <View
          style={{height: 1, width: '100%', backgroundColour : 'black'}}>
        </View>
      )
    }
	
	submit(){
	console.log (this.state.dataSource);
	if (this.state.dataSource.length=== 0)
	alert ("Purchase something before you checkout!");
	else
	this.props.navigation.navigate('Payment1');
	}

    render () {
      return (
        <View style = {{flex: 1, alignContent: 'center'}}>
          <FlatList
            data = {this.state.dataSource}
            renderItem = {this.renderItem}
            /*keyExtractor = {name,index} => index]*/
            ItemSeperatorComponent = {this.renderSeperator}
          />
          <View style={{ backgroundColor: '#AAAAAA'}}>
            <Text></Text>
            <Text style  = {{fontSize: 14, color: '#FFFF'}}>  Sub-total ({itemCount} item(s)) : RM {totalPrice} </Text> 
            <Text></Text>
            <Text style  = {{fontSize: 14, color: '#FFFF'}}>  Est. Shipping : FREE </Text>
            <Text></Text>
            <Text></Text>
            <View style={{ borderBottomColor: '#FFFF', borderBottomWidth: 1, borderWidth: 0.5}}/>
            <Text></Text>
            <Text style  = {{fontSize: 14, color: '#FFFF'}}>  Grand total : RM {totalPrice} </Text>
            <Text></Text>
            <Text></Text>
            <View style={{ borderBottomColor: '#FFFF', borderBottomWidth: 1, borderWidth: 0.5}}/>
              <View style={{ backgroundColor: 'black'}}>
                <Text></Text>
                <Text></Text>
                <Button title="Checkout" color= "black" onPress={() => this.submit()}/>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
        </View>
    );
  }
} 


const styles = StyleSheet.create({

   img:{
    width: Dimensions.get('window').width*0.66,
      height:hp('10%'),

    },
  


});