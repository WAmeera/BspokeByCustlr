import React from 'react';
import {StyleSheet, Button, Text, View, Image,Switch} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";









export default class Payment2 extends React.Component {
      static navigationOptions = {
      title: 'Payment       ',
  };


  state = { useLiteCreditCardInput: false };

  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });


  handleSubmit = () => {
  //  const value = this._form.getValue(); // use that ref to get the form value
   this.props.navigation.navigate('Payment3');
    //console.log('value: ', value);
  }

  render() {
    

    return (
      <View style={s.container}>
   

      <View style={s.creditContainer}>

         

        { this.state.useLiteCreditCardInput ?
          (
            <LiteCreditCardInput
              autoFocus
              inputStyle={s.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
          ) : (
            <CreditCardInput
              autoFocus

              requiresName
              requiresCVC
              

              labelStyle={s.label}
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
          )
        }


        </View>

        <View style={s.infoContainer}>
          <View style={s.buttonContainer}>
              <View style={s.button}>
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



const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width:'100%',
    height:'100%',

  },
  creditContainer:{

    width: '100%',
    margin: 30,
    //height:'50%',
  },

  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
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





  title: {
    alignItems:'center',
   
    margin: 50
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
    
  },
       infoContainer: {
            

        width:'80%',
        height:'100%',


  },


});


