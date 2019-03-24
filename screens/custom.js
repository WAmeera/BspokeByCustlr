import React from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import t from 'tcomb-form-native'; // 0.6.9
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Form = t.form.Form;

const User = t.struct({
  Neck: t.Number,
  Chest: t.Number,
  Sleeve: t.Number,
  Waist: t.Number,


  
}); 

export default class Custom extends React.Component {

    static navigationOptions = {
      title: 'Measurements       ',
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    this.props.navigation.navigate('ShoppingBag');
    console.log('value: ', value);
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
            <Form type={User}
                ref={c => this._form = c}  />

        </View>

        <View style={styles.buttonContainer}>

              <View style={styles.button}>
                <Button title="Next"
                color="grey"
                onPress={this.handleSubmit}
              
                />
              </View>

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
    width:wp('100%'),
    height:hp('20%'),
    alignItems:'center',
  },

  main:{
    fontSize:25,
    fontWeight:'bold',
    width:wp('100%'),
    alignItems:'center',
    textAlign: 'center',


  },

  maintitle:{
    alignItems:'center',
    textAlign: 'center',
    paddingTop:80,
  },

    sub:{
    fontSize:15,
    width:wp('100%'),
    alignItems:'center',
    textAlign: 'center',
        color:'red',


  },

  subtitle:{
    alignItems:'center',
    textAlign: 'center',
  },


  form:{
    width:wp('70%'),
    margin:20,
    marginLeft:70,
    marginTop:35,

  },
    button:{
    width:wp('60%'),
   
    
  },

  buttonContainer:{

    alignItems:'center',
    margin:60
    
  }




});
