import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Measurement = t.struct({
  shirtlength: t.Number,
  shirtwidth: t.Number,
  sleevelength: t.Number,
});

export default class Measurement extends Component {
  render(){
    return(
      <View style={styles.container}>
      <Form type={Measurement} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});