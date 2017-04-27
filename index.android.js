/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, Button, Navigator,
  StyleSheet,
  Text, TouchableHighlight,
  View
} from 'react-native';

import Login from './Login.js'
import ConnectionHandler from './ConnectionHandler'
import MainApp from './MainApp.js'
import Test3 from './Test3'

export default class ShareYourCar extends Component {


  constructor() {
    super();
    this.state={id:'none',
      connectionHandler: new ConnectionHandler()};
  }


  /*setLogin = {
    this.setState({login:'OK'})
  }*/

  setId = (id) => {
    this.setState({id});
    this.state.connectionHandler.setID(id);

  }
  render() {





      return (

        <Navigator
          initialRoute={{id: 'login'}}
          renderScene={(route, navigator) =>
          {
            switch (route.id) {
              case 'login':
                return <Login navigator={navigator} connectionHandler={ this.state.connectionHandler}/>
              case 'mainApp':
                return <MainApp connectionHandler={ this.state.connectionHandler}/>
            }

          }}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromLeft}


        />



      );
    }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ShareYourCar', () => ShareYourCar);
