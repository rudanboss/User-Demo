/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";
import { List, ListItem } from "react-native-elements";
import Splash from "./Component/Splash";
import UserProfile from "./Component/UserProfile";
import Receipt from "./Component/Receipt";
import Help from "./Component/Help";
import OrderHistory from "./Component/OrderHistory";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container2}>
        <Help />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  container2: {
    flex: 1,
    backgroundColor: "#000"
  }
});
