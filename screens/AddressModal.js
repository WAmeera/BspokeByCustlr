import React from 'react';
import { Button, Image, View, Text , TextInput} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import {Container,Content,Header,Form,Input,Item,Label} from 'native-base';

export default class AddressModal extends React.Component {
 constructor(props) {
    super(props);
    this.state = { text: 'Mailing Address' };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
		<Text> Enter your new mailing address </Text>
		 <TextInput
        style={{height: 40, borderColor: 'black', borderBottomWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
		/>
		<Button
          onPress={() => this.props.navigation.navigate('Home') }
          title="Change Address"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Dismiss"
        />
      </View>
    );
  }
}

