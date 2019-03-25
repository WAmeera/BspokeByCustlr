import React from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import t from 'tcomb-form-native'; // 0.6.9
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Form = t.form.Form;

const User = t.struct({
  address: t.String,
  
}); 

export default class Payment1 extends React.Component {

    static navigationOptions = {
      title: 'Payment       ',
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    this.props.navigation.navigate('Payment2');
    console.log('value: ', value);
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

           

            <Form type={User}
            ref={c => this._form = c}  />



            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Next"
                color="grey"
                onPress={this.handleSubmit}
              
                />
              </View>

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
   
    
  },

  buttonContainer:{

    alignItems:'center',
    margin:50
    
  }


});
