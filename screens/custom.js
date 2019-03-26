import React from 'react';
import {Dimensions,TouchableOpacity,StyleSheet, Button, Text, View, Image} from 'react-native';
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

      <View style ={styles.buttonContainer}>

       <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('ShoppingBag')} >
            
            <Image source={require('./image/select4.png')}  style={styles.img}/>

       </TouchableOpacity>

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
    width:wp('40%'),   
    
  },

  buttonContainer:{

    alignItems:'center',
    margin:30,

    
  },


    img:{
    width: Dimensions.get('window').width*0.45,
      height:hp('10%'),
    },




});
