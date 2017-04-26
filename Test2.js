import React, { Component } from 'react';
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
      login: "N",
      password: "N",
      result: "",
      onPressFunction: props.onPressFunction
    }
  }



  render (props){
    return (
      <View>
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
          onPress={() => {
            fetch("https://hidden-savannah-19210.herokuapp.com/login", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: this.state.login,
                password: this.state.password,
              })
            })
              .then((response) => response.json())
              .then((responseData) => {
                //this.setState({result:JSON.stringify(responseData)});
                this.props.setId(JSON.stringify(responseData));
                this.props.navigator.pop();
                this.props.navigator.push({id:'mainApp'});


              })
              .catch((error) => {
                  Alert.alert("Error\n Check datas and Internet connection")

                  //console.error(error);
                }
              )

          }
          }
        />
      </View>



    )
  }
}

export default Login