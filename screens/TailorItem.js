import React, { Component } from 'react';
import {Dimensions,TouchableOpacity, Image, ScrollView,Button, Linking, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Communications from 'react-native-communications';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';







export default class TailorItem extends React.Component {


    render(){
        return(
            <View style = {styles.menuItem}>

                    <Image
                        source={this.props.itemImage}
                        style={styles.image} />
                    
                    <View style={styles.buttonContainer}>



                    <View style={styles.button}>
                        
                        <TouchableOpacity activeOpacity={0.8} onPress={this._handleOpenWithLinking}>
                           <Image source={require('./image/location.png')}  style={styles.img}/>
                        </TouchableOpacity>
                   
                     </View>


                    <View style={styles.button}>
                        
                        <TouchableOpacity activeOpacity={0.8} onPress={() => Communications.phonecall(this.props.numbers, true)}>
                           <Image source={require('./image/call.png')}  style={styles.img}/>
                        </TouchableOpacity>
                   
                     </View>
               



                        


                    </View>
            </View>


        );
    }

    _handleOpenWithLinking = () => {
        Linking.openURL(this.props.coordinate);
    }
}


const styles = StyleSheet.create({
       menuItem: {

            borderColor:'#E8E3E3',
            // borderColor: '#000',
             borderWidth: 1,
             alignItems:'center',
             margin: 20,
             height:hp('60%'),


         },


         button: {
            margin:4,
            width: Dimensions.get('window').width*0.7,


             },


         image: {
            width:wp('50%'),
            height:hp('40%'),
            
            
         },

           buttonContainer: {
             width:wp('90%'),
             flex:1,
             justifyContent: 'center',
             alignItems: 'center',
             margin: 30,
    


           },
               

        img:{
          paddingLeft:5,
          width: Dimensions.get('window').width*0.75,
          height: Dimensions.get('window').height*0.06,
         },





});