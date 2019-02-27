import React from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
//import Slideshow from 'react-native-slideshow';



export default class DetailsScreen extends React.Component{


  render(){
       const {navigate} = this.props.navigation;

    return(
      <View style={styles.container}>
        <View style={styles.top}>
             <Text style={styles.header}> Oxford Long Sleeve(White) </Text>
        </View>

        <View style={styles.menuContainer}>






            <View style = {styles.menuItem}>
 

                    
                    <Image 
                        source={require('./shirt.jpg')} //need to look into it, wont work in other path
                        style={styles.image}
                      />

                      <View style={styles.infoContainer}>

                        <Text style={styles.info}> RM99 {"\n"}
                              Pure Cotton
                        </Text>

                          <Button
                              title="Select "
                              color="#6E9C8A"
                             onPress={() => this.props.navigation.navigate('Details')}
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



  menuContainer: {

        width:'100%',
        height:'100%',
        borderColor:'yellow',
        borderWidth: 2,
  },

   menuItem: {  
            height:"90%",
             alignItems:'center',
             margin: 20,




         },

    image: {
            margin:10,
            width:260,
            height:400,

         },

    info:{
      fontSize: 20,
      //justifyContent:'center',

    },

    infoContainer:{
       justifyContent: 'flex-end',


    }



});
