import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Expo, {Google} from "expo";
import { createStackNavigator, createAppContainer } from 'react-navigation';

//export default class App extends React.Component {
class LoginScreen extends React.Component{
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      //activeTab: this.tabs.key
    }
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "603116023368-8033ndlcb7ruh5snfnakd4ln5cvp8lfe.apps.googleusercontent.com",
        iosClientId: 
          "433591686426-kbsilqc93u3c9hgg7ta383l3v0ms9dnf.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} navigate={navigate} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <Button title="Continue" onPress={() => props.navigate('Settings', props)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
export default LoginScreen