import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
const { width } = Dimensions.get("window");
export default class splash extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../Image/Main.jpg")}
        style={styles.container}
      >
        <View style={styles.top}>
          <Text style={styles.welcome}>Q U I C K . R E A C H</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    resizeMode: "cover",
    width
  },
  top: {
    fontSize: 35,
    height: "50%",
    padding: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    height: "50%",
    padding: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  }
});
