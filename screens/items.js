import React from 'react';
import {Button,Text,View, Image, StyleSheet,} from 'react-native';

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

            borderColor:'#E8E3E3',
            // borderColor: '#000',
             borderWidth: 1,
             alignItems:'center',
             margin: 20,




         },

         image: {
            width:180,
            height:300,

         },

           buttonContainer: {
             width:'90%',
             justifyContent: 'center',
             margin: 10,


           },




});

