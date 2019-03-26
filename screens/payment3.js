import React from 'react';
import {TouchableOpacity,Dimensions,StyleSheet, Button, Text, View, Image,Switch} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import t from 'tcomb-form-native'; // 0.6.9
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';









export default class Payment3 extends React.Component {

    static navigationOptions = {
      title: 'Payment           ',
  };


  handleSubmit = () => {
  //  const value = this._form.getValue(); // use that ref to get the form value
    this.props.navigation.navigate('Home');
    //console.log('value: ', value);
  }

  render() {
    

    return (
      <View style={styles.container}>
    

         <View style={styles.infoContainer}>

            <View style={styles.title}>
              
              <View style={styles.payment}>

                <Text style={styles.mainTitle}> PAYMENT COMPLETED </Text>
                  <Image 
                    source={require('./image/check.png')}
                    style={styles.image}
                    />
                </View>


                

            </View>


         
            



              <View style={styles.button}>

                 <TouchableOpacity activeOpacity={0.8} onPress={this.handleSubmit} >

              <View style={styles.buttonContainer}>
            
                    <Image source={require('./image/home.png')}  style={styles.img}/>

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

  top: {
       backgroundColor: '#8E8E8E',
       width:wp('100%'),
       alignItems: 'center',

  },
    header: {
      fontSize: 30,
      color: '#ffffff',

    },

     infoContainer: {
            

        width:wp('80%'),
        height:hp('100%'),


  },

  payment:{
    margin:20,
    alignItems:'center',
    width:wp('100%'),
  },

  image: {
          margin:20,
          width:60,
          height:60,

         },

  title: {
    alignItems:'center',
    height: Dimensions.get('window').height*0.37,


  },

  mainTitle:{
     fontSize: 20,
     fontWeight: 'bold',
     paddingTop:35,
  },

  button:{
    alignItems:'center',
    
    

  },

  buttonContainer:{
    paddingLeft:5,
    width:"58%",

    
  },
   img:{
    width: Dimensions.get('window').width*0.45,
      height:hp('10%'),

    },
  


});