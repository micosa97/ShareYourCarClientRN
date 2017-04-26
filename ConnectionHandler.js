import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid, TextInput, Button, Alert
} from 'react-native';



class ConnectionHandler {
  //this.ID;
  constructor () {
    this.ID = -1;
  }
  setID (ID) {
    this.ID=ID;
    Alert.alert("Fajn");
  }
}

export default ConnectionHandler