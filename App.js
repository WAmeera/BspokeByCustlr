import React from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import t from 'tcomb-form-native'; // 0.6.9
import Payment2 from './payment2';
import Payment3 from './payment3';



const Form = t.form.Form;

const User = t.struct({
  address: t.String,
  
}); 






class App extends React.Component {


  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    this.props.navigation.navigate('Second');
    console.log('value: ', value);
  }

  render() {
    

    return (
      <View style={styles.container}>
      <View style={styles.top}>
             <Text style={styles.header}> Payment </Text>
        </View>

         <View style={styles.infoContainer}>

            <View style={styles.title}>
              <Text style={styles.mainTitle}> SHIPPING INFO </Text>

            <Image source={require('./location.png')} 
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

const AppNavigator = createStackNavigator({   //control everything
  Home: {
    screen: App,
  },
  Second: {
    screen: Payment2,
  },
  Third: {
    screen: Payment3,
  }
 });


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

  image: {
          margin:20,
          width:32,
          height:50,

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
    
  }


});

export default createAppContainer(AppNavigator);  
