import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid, TextInput, Button, Alert, ScrollView
} from 'react-native';


const SideMenu = require('react-native-side-menu');

class ContentView extends React.Component {
  render() {
    return (
      this.props.a

    );
  }
}

class MainApp extends React.Component {
  constructor () {
    super()
    this.state = {
      a:<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    }
  }

  render() {
    return (
      <SideMenu
        ref={(c) => this._slideMenu = c}
        menu={
          <View>
            <ScrollView
               //contentContainerStyle={styles.container}
               //style={styles.scrollView}
            >

              <Button
                title="Add Wish"/>
              <Button
                title="Add Route"/>
              <Button
                title="Show Routes"/>
              <Button
                title="Show Wishes"/>
              <Button
                title="Show Matches"/>
              <Button
                title="Close"/>

            </ScrollView>
          </View>
        }>


        <ContentView
          a={this.state.a}/>



      </SideMenu>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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


export default MainApp