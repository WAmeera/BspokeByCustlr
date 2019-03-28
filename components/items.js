import React from 'react';
import {TouchableOpacity,Button,Text,View, Image, StyleSheet,AsyncStorage} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Items extends React.Component{
	state :
	{
		
	}

	async getKey(key) {
    try {
      const value = await AsyncStorage.getItem(key);
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  };

  async saveKey(key,value) {
    try {
	  var valueInside = await AsyncStorage.getItem(key);
	  if (valueInside!=null){
	  valueInside = valueInside + "," + JSON.stringify(value);
      await AsyncStorage.setItem(key, valueInside);
	  }
	  else
	  await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error saving data" + error);
    }
  };

  async resetKey(key) {
    try {
      await AsyncStorage.removeItem(key);
      const value = await AsyncStorage.getItem(key);
      //this.setState({myKey: value});
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  };

PressedtoRecordView =()=>{
	this.saveKey('PreferCategory',this.props.category);

	this.props.navigation.navigate(
					'Details',
					{itemID:this.props.itemID,
					Price:this.props.Price,
					category:this.props.category,}
					)
}

render(){
        return(
            <View style = {styles.menuItem}>




                <View style = {styles.menuItem}>
                    <TouchableOpacity 
					activeOpacity={1} 
					style={styles.buttonContainer} 
					onPress={this.PressedtoRecordView}>
                        <Image source={this.props.itemImage}  style={styles.image}/>         
                        {this.props.children}
                    </TouchableOpacity>
                </View>
           
            </View>

        );
		}
    
}


const styles = StyleSheet.create({
       menuItem: {

            backgroundColor:'#fff',
            borderColor:'#dddddd',
             borderWidth: 1,
             alignItems:'center',
             margin: 5,
             width: wp('46%'),
             height:hp('40%'), 



         },

         image: {
            width:wp('43%'),
            height:hp('30%'),

         },

           buttonContainer: {
             width:'90%',
             justifyContent: 'center',
             margin: 10,


           },

           text:{
            textAlign:'center',
           }




});

