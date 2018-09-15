import React, { Component } from "react";
import { List, ListItem } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
const { width } = Dimensions.get("window");
export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserData: [
        {
          Uname: "Rudramani Pandey",
          Mob: "+91-8743898976",
          key: 1,
          email: "rudramanipandey@outlook.com"
        }
      ]
    };
  }
  render() {
    return (
      <ImageBackground
        style={styles.headerBackground}
        source={require("../Image/Main.jpg")}
      >
        <View style={styles.headerBackground}>
          <View style={styles.header}>
            <View style={styles.profilepicWrap}>
              <Image
                style={styles.profilepic}
                source={require("../Image/Main.jpg")}
              />
            </View>
            <Text style={styles.name}>{this.state.UserData[0].Uname}</Text>
            <Text style={styles.pos}>{this.state.UserData[0].Mob}</Text>
            <Text style={styles.pos}>{this.state.UserData[0].Uname}</Text>
          </View>
          <List>
            <ListItem title="Order History" />
            <ListItem title="Change User Password" />
            <ListItem title="Contact Us" />
            <ListItem title="Log Out" hideChevron />
          </List>
        </View>
      </ImageBackground>
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
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 4
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  pos: {
    fontSize: 14,
    color: "#0394c0",
    fontWeight: "300",
    fontStyle: "italic"
  }
});
