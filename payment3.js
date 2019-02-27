import React from 'react';
import {StyleSheet, Button, Text, View, Image,Switch} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import t from 'tcomb-form-native'; // 0.6.9
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";









export default class Payment3 extends React.Component {


  handleSubmit = () => {
  //  const value = this._form.getValue(); // use that ref to get the form value
    this.props.navigation.navigate('Third');
    //console.log('value: ', value);
  }

  render() {
    

    return (
      <View style={styles.container}>
      <View style={styles.top}>
             <Text style={styles.header}> Payment </Text>
        </View>

         <View style={styles.infoContainer}>

            <View style={styles.title}>

            	<View style={styles.payment}>
					<Text style={styles.mainTitle}> PAYMENT COMPLETED </Text>
				</View>

            		<Image source={require('./check.png')} 
                  	style={styles.image}
                      />

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

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width:'100%',
    height:'100%',

  },

  top: {
       backgroundColor: '#8E8E8E',
       width:'100%',
       alignItems: 'center',

  },
    header: {
      fontSize: 30,
      color: '#ffffff',

    },

     infoContainer: {
            

        width:'80%',
        height:'100%',


  },

  payment:{
  	margin:20,
  	width:'100%'
  },

  image: {
          margin:20,
          width:60,
          height:60,

         },

  title: {
    alignItems:'center',
    margin: 50,
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
    margin:100
    
  }


});