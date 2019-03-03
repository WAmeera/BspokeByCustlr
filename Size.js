import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';


//buttons to choose size option
export default class Size extends React.Compenent {
  render() {
    return (
      <View style={ {flex:1,flexDirection:'column', justifyContent:'space-evenly', alignItems:'center',} }>
        <Button onPress={() => {
          //put function here
          }}
          title="S">
        >
        </Button>

        <Button onPress={() => {
          //put function here
          }}
          title="M">
        >
        </Button> 
 
        <Button onPress={() => {
          //put function here
          }}
          title="L">
        >
        </Button> 

        </Button> 
 
        <Button onPress={() => {
          //put function here
          }}
          title="XL">
        >
        </Button> 
      </View>
    );
  }
}