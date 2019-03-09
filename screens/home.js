import React from 'react';
import { TouchableOpacity,Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import MenuButton from '../components/MenuButton.js';



export default class HomeScreen extends React.Component {

  static navigationOptions = {
          title: 'Home     ',
  };
  render() {
     const {navigate} = this.props.navigation;



    return (

	
      <View style={styles.container1}>
	 
      <View style={styles.buttonContainer}>
        <MenuButton navigation={this.props.navigation}/>

        
      <TouchableOpacity activeOpacity={1} onPress={() => navigate('Catalogue')} style={styles.btn}>
        <View style={styles.absoluteView}>
            
        </View>
        <Image source={require('./muscle.jpg')}  style={styles.img}/>
      </TouchableOpacity>




       </View>

       <View style ={styles.buttonContainer}>
      
   
      <TouchableOpacity activeOpacity={1} onPress={() => navigate('Catalogue')} style={styles.btn}>
        <View style={styles.absoluteView}>
            
        </View>
        <Image source={require('./slim.jpg')}  style={styles.img}/>
      </TouchableOpacity>



       </View>

       <View style ={styles.buttonContainer}>
                 
      <TouchableOpacity  activeOpacity={1}  onPress={() => navigate('Catalogue')} style={styles.btn}>
        
        <Image source={require('./regular.jpg')}  style={styles.img}/>
      </TouchableOpacity>

              </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({

  absoluteView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },


  container1: {
    flex: 1,
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center'
  },


  buttonContainer: {
    width:'100%',
    height: '33.333%',
    justifyContent: 'center',



  },


  header: {
    fontSize: 30,
  },






});


