import React from 'react';
import { Button, Image, View, Text} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { Card, CardSection, Input, Spinner, Header } from '../src/components/common';
import * as firebase from 'firebase';

export default class statusModal extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
	card: '',
	mail: '',
	name: '',
	loading: false
	};
  }
   
  componentWillMount(){
  this.setState({loading:false}); 
  }

render() {
const Shipment = this.props.navigation.getParam('Shipment','x');
    return (
      <View style = {{height : 700}}>
        <Text style = {{ textAlign:'center'}}> {Shipment} </Text>
      </View>
    );
  }
}

