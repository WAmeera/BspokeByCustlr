import React from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import t from 'tcomb-form-native'; // 0.6.9

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
      

         <View style={styles.infoContainer}>

            <View style={styles.title}>
             <Text style={styles.mainTitle}> Enter Body Measurements</Text>
             <Text style={styles.subTitle}> *In cm</Text>

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

  subTitle:{
      fontSize:15,
      color:'red',
      position:'absolute',
      top:57,
  },

  image: {
          margin:20,
          width:32,
          height:50,

         },

  title: {
    alignItems:'center',
    height:'10%',
    width:'70%',
    margin: 50,
  },

  mainTitle:{
     fontSize: 23,
     fontWeight: 'bold',
     position:'absolute',
     left: 40,
  },

  button:{
    width:'100%',
   
    
  },

  buttonContainer:{

    alignItems:'center',
    margin:100
    
  }


});
