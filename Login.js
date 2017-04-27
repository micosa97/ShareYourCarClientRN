import  React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid, TextInput, Button, Alert
} from 'react-native';



class Login extends Component {




constructor (props) {
    super(props);
    this.state = {
      login: "micosa97",
      password: "XDXDXDXD",
      result: "",
      onPressFunction: props.onPressFunction
    }
  }



  render (props){
    return (
      <View style={{margin:100}}>
        <Text>LOGIN</Text>
        <Text>Username</Text>
        <TextInput
          onChangeText={(login) => this.setState({login})}/>
        <Text>Password</Text>
        <TextInput
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}/>
        <Text>{this.state.login} {this.state.password} {this.state.result}</Text>
        <Button
        title="login"
        onPress={() => this.props.connectionHandler.login(this.state.login, this.state.password, this.props.navigator)}

        />
      </View>



    )
  }
}

var styles = StyleSheet.create({
  base: {
    margin: 100,
  },
  background: {
    backgroundColor: '#222222',
  },
  active: {
    borderWidth: 2,
    borderColor: '#00ff00',
  },
});

export default Login