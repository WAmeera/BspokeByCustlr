import React, {Component} from 'react';
import {Dimensions,TouchableOpacity,Styles,AppRegistry,StyleSheet,Text,View,Button,FlatList,Image,ActivityIndicator,Divider, StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default class Wishlist extends React.Component {


  static navigationOptions = {
          title: 'Wishlist      ',
  };
    //default constructor for class wishlist
    constructor (){
      super()
      this.state = {
        dataSource : [],
        isLoading: true
      }
    } 
    //function renderItem - will show the informations fetched from the database to the user-end (the wishlist list)
	//function renderSeperator - will show a line, in this class it is used to seperate each items on the list
	//function componentDidMount - fetch data and information from the database - current url used is a dummydata created using an online json generator
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
              <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Wishlist')} >   
                    <Image source={require('./image/addcart.png')}  style={styles.img}/>
                </TouchableOpacity>
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
          dataSource: responseJson.dummy_data, //dummy data is the name of the data source
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
    

    //main function for the class Wishlist; function componentDidMount, renderItem, and renderSeperator is called in this function as well
    //ActivityIndicator animates the "loading" in the Wishlist page
    //keyExtractor is a variable that will be used once the real database is implemented (i forgot to put a unique index in the dummy data)
    //if you encounter a warning of "missing keys of items" that was because the keyExtractor stated above, ignore it for the time being
    //line 223 - 229 : buttons and its styling for the button used to navigate from this wishlist page to the ShoppingBag page
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
          <View style={{ backgroundColor: 'black'}}>
                <Text></Text>
                <Text></Text>
                <Button title="View Shopping Bag" color="black" onPress={() => this.props.navigation.navigate('ShoppingBag')}/>
                <Text></Text>
                <Text></Text>
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