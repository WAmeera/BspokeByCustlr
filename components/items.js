import React from 'react';
import {TouchableOpacity,Button,Text,View, Image, StyleSheet,} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Items extends React.Component {

    render(){
        return(
            <View style = {styles.menuItem}>




                <View style = {styles.menuItem}>
                    <TouchableOpacity activeOpacity={1} style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Details')} >
                        <Image source={this.props.itemImage}  style={styles.image}/>         
                        <Text style={styles.text}>{this.props.item}</Text>  
                    </TouchableOpacity>
                </View>
           
            </View>

        );
    }
}


const styles = StyleSheet.create({
       menuItem: {

            backgroundColor:'#fff',
            borderColor:'#dddddd',
             borderWidth: 1,
             alignItems:'center',
             margin: 5,
             width: wp('46%'),
             height:hp('40%'),



         },

         image: {
            width:wp('43%'),
            height:hp('30%'),

         },

           buttonContainer: {
             width:'90%',
             justifyContent: 'center',
             margin: 10,


           },

           text:{
            textAlign:'center',
           }




});

