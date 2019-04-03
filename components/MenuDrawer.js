import React from 'react';
import {
	Platform,
	Dimensions,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';
import * as firebase from 'firebase';


//const WIDTH = Dimensions.get('window').width
//const HEIGHT = Dimensions.get('window').height



export default class MenuDrawer extends React.Component {

state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}

signOutUser = () => {
     firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'))
}

Signoutbutton (text){
		return(
			<TouchableOpacity style={{flex:1}} onPress={()=>this.signOutUser()}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}	

	navLink (nav,text){
		return(
			<TouchableOpacity style={{flex:1}} onPress={()=>this.props.navigation.navigate(nav)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}	

	render() {
	const { currentUser } = this.state
		return (
			<View style={styles.container}>
				<View style={styles.topLinks}>
					<Text style={{paddingTop:40, color:'white'}}>Hi {currentUser && currentUser.email}</Text>
				</View>
				<View style={styles.bottomLinks}>
					{this.navLink('Modalstack','Change Address')}
					{this.Signoutbutton('Sign out')}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container :{
		flex:1,
		backgroundColor:'black', 
	},
	topLinks:{
		height:160,
		backgroundColor:'black',
	},
	bottomLinks:{
		flex:1,
		backgroundColor:'white',
		paddingTop:10,
		paddingBottom:450,
	},
	link:{
		flex:1,
		fontSize:20,
		padding:6,
		paddingLeft:14,
		margin:5,
		textAlign:'left',
	}
})