//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code.
import { View, Text } from 'react-native';
//import all the components we are going to use.
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import menu and menu item
 
export default class CustomMenu extends React.Component {
  _menu = null;
  setMenuRef = ref => {
    this._menu = ref;
  };
  showMenu = () => {
    this._menu.show();
  };
  hideMenu = () => {
    this._menu.hide();
  };
  option1Click = () => {
    this._menu.hide();
    this.props.option1Click();
  };
  option2Click = () => {
    this._menu.hide();
    this.props.option2Click();
  };
  option3Click = () => {
    this._menu.hide();
    this.props.option3Click();
  };
  option4Click = () => {
    this._menu.hide();
    this.props.option4Click();
  };
  option5Click = () => {
    this._menu.hide();
    this.props.option5Click();
  };
  option6Click = () => {
    this._menu.hide();
    this.props.option6Click();
  };
  option7Click = () => {
    this._menu.hide();
    this.props.option7Click();
  };
  render() {
    return (
      <View style={this.props.menustyle}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Text onPress={this.showMenu} style={this.props.textStyle}>
              {this.props.menutext}
            </Text>
          }>
          <MenuItem onPress={this.option1Click}> All </MenuItem>
          <MenuItem onPress={this.option2Click}> Top Seller </MenuItem>
          <MenuItem onPress={this.option3Click}> Featured </MenuItem>
          <MenuItem onPress={this.option4Click}> Latest </MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.option5Click}> RM0 - RM100 </MenuItem>
          <MenuItem onPress={this.option6Click}> RM100 - RM200 </MenuItem>
          <MenuItem onPress={this.option7Click}> Above RM200 </MenuItem>
        </Menu>
      </View>
    );
  }
}