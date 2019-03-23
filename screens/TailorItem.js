import React, { Component } from 'react';
import {TouchableOpacity, Image, ScrollView,Button, Linking, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Communications from 'react-native-communications';







export default class TailorItem extends React.Component {


    render(){
        return(
            <View style = {styles.menuItem}>

                    <Image
                        source={this.props.itemImage}
                        style={styles.image} />
                    
                    <View style={styles.buttonContainer}>



                    <View style={styles.button}>

                        <Button
                              title="Get Location "
                              color="#6E9C8A"
                              onPress={this._handleOpenWithLinking}

                            />
                    </View>



                    <View style={styles.button}>
                        <Button
                              title="Call Tailor "
                              color="#6E9C8A"
                              onPress={() => Communications.phonecall(this.props.numbers, true)}

                            />           
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


         },


         button: {

            height: 45,
         },


         image: {
            width:180,
            height:300,

         },

           buttonContainer: {
             width:'90%',
             justifyContent: 'center',
             margin: 30,


           },




});