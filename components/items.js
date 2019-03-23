import React from 'react';
import {Button,Text,View, Image, StyleSheet,} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

export default class Items extends React.Component {

    render(){
        return(
            <View style = {styles.menuItem}>
                <Image
                    source={this.props.itemImage}
                    style={styles.image} />
                    <Text> {this.props.item}</Text>
                    <View style={styles.buttonContainer}>
                    <Button
                              title="More Details "
                              color="#6E9C8A"
                              onPress={() => this.props.navigation.navigate('Details')}

                            />
                     </View>
            </View>


        );
    }
}


const styles = StyleSheet.create({
       menuItem: {

          
             borderWidth: 1,
             alignItems:'center',
             margin: 10,
             width: '45%',
             height:350,



         },

         image: {
            width:100,
            height:250,

         },

           buttonContainer: {
             width:'90%',
             justifyContent: 'center',
             margin: 10,


           },




});

