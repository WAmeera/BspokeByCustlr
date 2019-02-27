import React from 'react';
import { Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json




export default class HomeScreen extends React.Component {

  static navigationOptions = {

  };
  render() {
     const {navigate} = this.props.navigation;



    return (


      <View style={styles.container1}>
      <View style={styles.buttonContainer}>
        <Button
          title="Slim Fit "
          color="#6E9C8A"
           onPress={() => navigate('Catalogue')}
        />
       </View>

       <View style ={styles.buttonContainer}>
       <Button
          title="Muscle Fit "
          color="#A27673"
           onPress={() => navigate('Catalogue')}
               />
       </View>

       <View style ={styles.buttonContainer}>
              <Button
                 title="Regular Fit "
                 color="#7393A2"
                  onPress={() => navigate('Catalogue')}
                      />
              </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    width:'100%',
    height:'100%',
    alignItems: 'center',
    backgroundColor: '#155F72',
    justifyContent: 'center'
  },

  top: {
    height:'20%',
    width:'100%',
    alignItems: 'center',
    justifyContent:'center',
    flex: 1,
    borderWidth: 2,
    borderColor: '#000000'
  },

  buttonContainer: {
    width:'90%',
    height: '33.333%',
    justifyContent: 'center',


  },

  menuContainer: {

    height: '50%',
    flexDirection: 'row',
    flexWrap :'wrap',

  },

  header: {
    fontSize: 30,
  },






});


