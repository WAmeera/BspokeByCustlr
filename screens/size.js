import React from 'react';
import { TouchableOpacity,Image,ScrollView,View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json




export default class Size extends React.Component {

  static navigationOptions = {
          title: 'Home     ',
  };
  render() {
     const {navigate} = this.props.navigation;



    return (


      <View style={styles.container1}>



      <View style={styles.buttonContainer}>
             <TouchableOpacity activeOpacity={1} onPress={() => navigate('ShoppingBag')} style={styles.btn}>
               <View style={styles.absoluteView}>
            
               </View>
              <Image source={require('./s.png')}  style={styles.img}/>
            </TouchableOpacity>

      </View>




      <View style={styles.buttonContainer}>
             <TouchableOpacity activeOpacity={1} onPress={() => navigate('ShoppingBag')} style={styles.btn}>
               <View style={styles.absoluteView}>
            
               </View>
              <Image source={require('./m.png')}  style={styles.img}/>
            </TouchableOpacity>

      </View>






       <View style ={styles.buttonContainer}>
      
   
      <TouchableOpacity activeOpacity={1} onPress={() => navigate('ShoppingBag')} style={styles.btn}>
        <View style={styles.absoluteView}>
            
        </View>
        <Image source={require('./l.png')}  style={styles.img}/>
      </TouchableOpacity>



       </View>

       <View style ={styles.buttonContainer}>
                 
      <TouchableOpacity  activeOpacity={1}  onPress={() => navigate('ShoppingBag')} style={styles.btn}>
        
        <Image source={require('./xl.png')}  style={styles.img}/>
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
    height: '25%',
    justifyContent: 'center',



  },


  header: {
    fontSize: 30,
  },






});


