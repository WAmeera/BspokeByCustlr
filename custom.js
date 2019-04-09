import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  Button,
  StyleSheet,
  TextInput,
  Linking,
  Alert,
  Navigator,
  Dimensions,TouchableOpacity
} from 'react-native';
import t from 'tcomb-form-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as firebase from 'firebase';
const Form = t.form.Form;

// here we are: define your domain model


const LoginFields = t.struct({
  Collar: t.Number,
  Shoulder: t.Number,
  Chest: t.Number,
  Sleeve: t.Number,
});

const options = {
  fields: {
    password: {
      type: 'password',
      placeholder: 'Password',
      error: 'Password cannot be empty'
    },
    username: {
      placeholder: 'e.g: abc@gmail.com',
      error: 'Insert a valid email'
    }
  }
}; // optional rendering options (see documentation)


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: true,
      value: {}
    }
  }

  _onSubmit() {
    const value = this.refs.form.getValue();
    this.props.navigation.navigate('ShoppingBag');
    console.log('value: ', value);
    //this.onButtonPress();
    const {navigate} = this.props.navigation;
      const itemID = this.props.navigation.getParam('itemID',0);
      const Price = this.props.navigation.getParam('Price',0);
      const category = this.props.navigation.getParam('category', 'x'); 
      const brand = this.props.navigation.getParam('brand','x');
      const name = this.props.navigation.getParam('name','x');
      const Photo1 = this.props.navigation.getParam('Photo1','x');
      const Quantity = 1;
      const size = "Customized";
      const collar = value.Collar;
      const shoulder = value.Shoulder;
      const chest = value.Chest;
      const sleeve = value.Sleeve;

          firebase.database().ref('ShoppingBag/').push({
              itemID,
              Price,
              category,
              brand,
              name, 
              Photo1, 
              Quantity,
              collar,
              shoulder,
              chest,
              sleeve,
              size
         });

  
  }

  onChange = () => {
    const value = this.refs.form.getValue();
    if(value) {
      this.setState({
        value,
        buttonState: false
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.title}>

          <View style={styles.maintitle}>
            <Text style={styles.main}> Enter Body{"\n"}Measurements </Text>
          </View>
          <View style={styles.subtitle}>
            <Text style={styles.sub}> *in cm </Text>
          </View>

        </View>


        <View style={styles.form}>
           <Form
              ref="form"
              type={LoginFields}
              value={this.state.value}
              onChange={this.onChange}
            />

        </View>

      <View style ={styles.buttonContainer}>

       <Button
                  onPress={this._onSubmit.bind(this)}
                  title="Login"
                  color="#008080"
                  disabled={this.state.buttonState}
                  accessibilityLabel="Ok, Great!"
                />

      </View>




        
      </View>









    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:wp('100%'),
    height:hp('100%'),


  },

  title:{
    alignItems:'center',

  },

  main:{
    fontSize:25,
    fontWeight:'bold',
    width:wp('100%'),
    alignItems:'center',
    textAlign: 'center',

},
    sub:{
    fontSize:15,
    width:wp('100%'),
    alignItems:'center',
    textAlign: 'center',
        color:'red',


  },

    form:{
    width:wp('70%'),
    marginLeft:50,
    marginRight:50,    
    marginTop:35,

  },

    button:{
    width:wp('70%'),   
    
  },

  buttonContainer:{

    alignItems:'center',
    margin:30,

    
  },


    img:{
    width: Dimensions.get('window').width*0.5,
      height:hp('10%'),
    },




});