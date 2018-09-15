import React, { Component } from "react";
import { List, ListItem } from "react-native-elements";
import { Modal } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
const { width } = Dimensions.get("window");
export default class Receipt extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.name2}>Scan the QR to get your receipt</Text>
        <View style={styles.profilepicWrap}>
          {/* <Modal visible={true} style={styles.profilepic} transparent={true}> */}
          <Image
            style={styles.profilepic}
            source={require("../Image/QR.jpg")}
          />
          {/* </Modal> */}
        </View>
        <Text style={styles.name}>
          Hey, your order is placed and waiting for the canteen to acknowledge,
          it will take 20 min to prepare the food, and you should take your
          order within 40 minutes for better taste.
        </Text>
        <List>
          <ListItem title="Item One X 3" rightTitle="575" hideChevron />
          <ListItem title="Item Two X 1 " rightTitle="75" hideChevron />
          <ListItem title="Item Three X 5" rightTitle="375" hideChevron />
          <ListItem rightTitle="Total: 945" hideChevron />
        </List>
        <Text style={styles.name2}>Current Status</Text>
        <View style={styles.status}>
          <Text style={styles.pos}>Order Placed > Order Acknowledged > </Text>
          <Text style={styles.pos2}>Order Being Prepared</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: "stretch"
  },
  header: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0, 0.5)"
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: "rgba(0,0,0, 0.4)",
    borderWidth: 16
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
    borderColor: "#fff",
    borderWidth: 4
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  name2: {
    marginTop: 20,
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold"
  },
  pos: {
    fontSize: 14,
    color: "#0394c0",
    fontWeight: "300",
    fontStyle: "italic"
  },
  pos2: {
    fontSize: 14,
    color: "rgb(255, 255, 255)",
    fontWeight: "300",
    fontStyle: "italic"
  },
  status: {
    flexDirection: "column"
  }
});
