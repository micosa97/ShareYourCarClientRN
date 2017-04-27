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

  ShowWishes () {
    fetch("https://hidden-savannah-19210.herokuapp.com/showrequired", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nonce: this.ID,
      })
    })
      .then((response) => response.json())
      .then((responseData) => {
        //this.setState({result:JSON.stringify(responseData)});

        //return true


      })
      .catch(() => {

        //return false
        Alert.alert("Error\n Well, it shouldn't be like");

        //console.error(error);
      })
    }



  login(username, password, navigator) {

    fetch("https://hidden-savannah-19210.herokuapp.com/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
      .then((response) => response.json())
      .then((responseData) => {
        //this.setState({result:JSON.stringify(responseData)});
        this.ID=(JSON.stringify(responseData));
        Alert.alert(this.ID);
        navigator.pop();
        navigator.push({id:'mainApp'});
        //return true


      })
      .catch(() => {

          //return false
        Alert.alert("Error\n Check datas and Internet connection");

          //console.error(error);
      })

    //return false;

  }
}

export default ConnectionHandler