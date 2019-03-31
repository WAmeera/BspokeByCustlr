import React from 'react';
import { Button, Image, View, Text} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { Card, CardSection, Input, Spinner, Header } from '../src/components/common';
import * as firebase from 'firebase';

export default class AddressModal extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
	text: 'Mailing Address',
	card: '',
	mail: '',
	name: '',
	loading: false
	};
  }

  componentWillMount(){
  this.setState({loading:false});
  }

  saveInfo = (fullName , mailingAddress,cardNo) =>{
  const { currentUser } = firebase.auth();
  this.setState({loading:true});
	firebase.database().ref(`/users/${currentUser.uid}/info`)
      .set({ fullName, mailingAddress, cardNo })
	  .then(() => {this.props.navigation.navigate('Login')})
  }

  renderContent() {
  const name = this.props.navigation.getParam('name', '');
  const card = this.props.navigation.getParam('card','');
  const mail = this.props.navigation.getParam('mail', '');

  if (this.state.loading == false){
    return (
      <View style={{ flex: 1 }}>
		<Header headerText="Change your info" />
		 <Card>
        <CardSection>
          <Input
            placeholder= {name}
            label="Full Name"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
        </CardSection>

		<CardSection>
          <Input
            placeholder= {mail}
            label="Mailing Add."
            value={this.state.mail}
            onChangeText={mail => this.setState({ mail })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder= {card}
            label="Credit Card"
            value={this.state.card}
            onChangeText={card => this.setState({ card })}
          />
        </CardSection>

		</Card>

		<Button
          onPress={() => this.saveInfo(this.state.name,this.state.mail,this.state.card) }
          title="Change Address"
        />

        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Dismiss"
        />
      </View>
    );
  }
  else
  {
  	  return 
	  (
	  	  <Spinner size="large" />
	  );
  }
}

render() {
    return (
      <View style = {{height : 700}}>
        {this.renderContent()}
      </View>
    );
  }
}

