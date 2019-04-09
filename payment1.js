import React, { Component } from 'react';
import {
  Dimensions,
  TouchableOpacity,
  AppRegistry,
  Text,
  Image,
  View,
  Button,
  StyleSheet,
  TextInput,
  Linking,
  Alert,
  Navigator
} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import t from 'tcomb-form-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Form = t.form.Form;

// here we are: define your domain model


const LoginFields = t.struct({
  address: t.String,
 
});

const options = {
  fields: {

    address: {
      error: 'Insert address'
    }
  }
}; // optional rendering options (see documentation)


export default class Login extends Component {

  static navigationOptions = {
      title: 'Payment       ',
  };

  
  constructor(props) {
    super(props);
    this.state = {
      buttonState: true,
      value: {}
    }
  }

  _onSubmit() {
    const value = this.refs.form.getValue();
     if (value) { // if validation fails, value will be null
       console.log(value);
        // value here is an instance of LoginFields
     }

      this.props.navigation.navigate('Payment2');

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
      

         <View style={styles.infoContainer}>

            <View style={styles.title}>
              <Text style={styles.mainTitle}> SHIPPING INFO </Text>
               <Image 
              source={require('./image/shipping.png')}
              style={styles.image}
              />
            </View> 

           <View style={styles.form}>

             <Form
              ref="form"
              type={LoginFields}
              options={options}
              value={this.state.value}
              onChange={this.onChange}
            />

            </View>

            <View style={styles.button}>

                 <TouchableOpacity activeOpacity={0.8} onPress={this._onSubmit.bind(this)}
                  title="Login"
                  disabled={this.state.buttonState}
                  accessibilityLabel="Ok, Great!" >

                  <View style={styles.buttonContainer}>
            
                    <Image source={require('./image/select4.png')}  style={styles.img}/>

                  </View>
                </TouchableOpacity>

          </View>
        </View>

      </View>









 


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width:wp('100%'),
    height:hp('100%'),

  },


    header: {
      fontSize: 30,
      color: '#ffffff',

    },

     infoContainer: {
            

        width:wp('80%'),
        height:hp('100%'),


  },

  image: {
          width:wp('20%'),
          height:hp('8%'),
          
         },

  title: {
      alignItems:'center',
      paddingTop:60,
      paddingBottom:60,

        },

  mainTitle:{
     fontSize: 20,
     fontWeight: 'bold',
  },

  button:{
    width:'100%',
    alignItems:'center',

  },

  buttonContainer:{
    width: Dimensions.get('window').width*0.66,
    width:"58%",

    
  },
     img:{
    width: Dimensions.get('window').width*0.45,
    height:hp('10%'),

    },

    form:{
      margin:20,
    }


});
