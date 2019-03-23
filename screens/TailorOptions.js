import React, { Component } from 'react';
import {Text,TouchableOpacity, Image, ScrollView,Button, Linking, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

export default class TailorOptions extends React.Component {


    static navigationOptions = {
      title: 'Options       ',

  };

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }



  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }



  calculateDis(latitude, longitude){


    var arrayLat =['1.3521','6.2088','2.9935','12.8797'];
    var arrayLong=['103.8198','106.8456','101.7874','121.7740'];
      var shortest =100000;
      var shortLat=0.0;
      var shortLong=0.0;
      for (var i = 0; i <= arrayLat.length-1 ; i++) {
          distance = Math.sqrt(Math.pow((arrayLat[i]-latitude),2) + Math.pow((arrayLong[i]-longitude),2)  ) 

          if(distance<=shortest){
            shortest=distance;
            shortLat = arrayLat[i];
            shortLong= arrayLong[i];
          }

        }


      if(shortLat == arrayLat[0]){

          this.props.navigation.navigate('Tailor1');
      }
      if(shortLat == arrayLat[1]){

          this.props.navigation.navigate('Tailor2');
      }
      if(shortLat == arrayLat[2]){

          this.props.navigation.navigate('Tailor3');
      }
      if(shortLat == arrayLat[3]){

          this.props.navigation.navigate('Tailor4');
      }




        



    }




  render() {
     const {navigate} = this.props.navigation;

  


    return (
      <View style={styles.container}>
    

        <TouchableOpacity activeOpacity={1} onPress={()=>{this.calculateDis(this.state.latitude, this.state.longitude)}} style={styles.buttonContainer}>
            
            <Image source={require('./nearest.png')}  style={styles.img}/>

        </TouchableOpacity>


        <TouchableOpacity activeOpacity={1}  onPress={() => navigate('Tailor')} style={styles.buttonContainer}>

            <Image source={require('./tailorlist.png')}  style={styles.img}/>


        </TouchableOpacity>



      </View>
    );
  }
  

  

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',

  },




  buttonContainer: {
    width:'100%',
    height: '50%',
    justifyContent: 'center',



  },


});