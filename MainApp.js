import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid, TextInput, Button, Alert, ScrollView, Navigator
} from 'react-native';
import Test3 from "./Test3";

import AddRoute from "./AddRoute.js"
import ShowMatches from "./ShowMatches.js"
import AddWish from "./AddWish.js"
import ShowWishes from "./ShowWishes.js"
import ShowRoutes from "./ShowRoutes.js"


const SideMenu = require('react-native-side-menu');

class ContentView extends React.Component {
  render() {
    return (
      this.props.a

    );
  }
}

class Second extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Second screen
        </Text>
      </View>
    );
  }
};

class First extends React.Component{
  render() {
    return (
      <View  style={styles.container}>
        <Text>
          First screen
        </Text>
      </View>
    );
  }
};

const a = <View>
  <Text>
    First screen
  </Text>
</View>

const b = <View>
  <Text>
    First screen
  </Text>
</View>

class MainApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentView:<First/>
    }
  }

  render() {
    return (
      <SideMenu
        ref={(c) => this._slideMenu = c}
        menu={
          <View style={styles.menu}>
            <ScrollView
               //contentContainerStyle={styles.container}
               style={styles.scrollView}
            >

              <Button
                title="Add Wish"
                onPress={() => {
                  //  this.state
                  this.setState({currentView: <AddWish/>})
                }}/>
              <Button
                title="Add Route"
                onPress={() => {
                //  this.state
                 this.setState({currentView: <AddRoute/>})
                }}/>
              <Button
                title="Show Routes"
                onPress={() => {
                  //  this.state
                  this.setState({currentView: <ShowRoutes/>})
                }}/>
              <Button
                title="Show Wishes"
                onPress={() => {
                  //  this.state
                  this.setState({currentView: <ShowWishes connectionHandler={ this.props.connectionHandler}/>})
                }}/>
              <Button
                title="Show Matches"
                onPress={() => {
                  //  this.state
                  this.setState({currentView: <ShowMatches/>})
                }}/>
              <Button
                title="Close"
                onPress={()=>{BackAndroid.exitApp();}}/>

            </ScrollView>
          </View>
        }>


        <Navigator
          initialRoute={{id: 'welcome'}}
          renderScene={() =>{return this.state.currentView}}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}


        />



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
  scrollView: {
    backgroundColor: '#eeeeee',
    height: 300,
  },
  menu: {
    backgroundColor: '#F5FCFF',
   // justifyContent:'space-between'
  }
});


export default MainApp