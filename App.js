
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
/*import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';*/
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
    render() {
        return ( <
            View style = {
                styles.container
            } >
            <
            Text > Welcome to Bspoke by Custlr! < /Text></View > );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
