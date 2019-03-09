import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class MyButton extends React.Component {
  render() {
    return <Button title="Back" onPress={() => navigate({this.props.destination}) />;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);