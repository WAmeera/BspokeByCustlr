import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import t from 'tcomb-form-native';

const RootStack = createStackNavigator({
  Home:{screen: App},
  // SizeList:{screen: Size},
});

const AppContainer = createAppContainer(RootStack);
//buttons to choose measurement type
class App extends React.Component {
  render() {
    return (
      <View style={ {flex:1, flexDirection:'column', justifyContent:'space-evenly' , alignItems:'center',} }>
        <Button onPress={() => {
          //put function here
        }}
          title="Choose Size">
        >
        </Button>

        <Button onPress={() => {
          //put function here
          }}
          title="Custom Measurement">
        >
        </Button> 
 
        <Button onPress={() => {
          //put function here
          }}
          title="Tailor Me">
        >
        </Button> 
      </View>
    );
  }
}

export default createAppContainer;
//export default App;

