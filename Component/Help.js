import React, { Component } from "react";
import { List, ListItem, Icon } from "react-native-elements";
import {
  Animated,
  PanResponder,
  LayoutAnimation,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import HelpList from "./HelpList";
import HelpListData from "../Data/HelpList";

export default class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          title: "I haven't received this order",
          subtitle: "The path of the righteous man is beset on all sides",
          key: 1,
          nav: true,
          icon: "angle-down",
          reverse: "angle-up"
        },
        {
          title: "Items are missing from my order",
          subtitle: "The path of the righteous man is beset on all sides",
          key: 2,
          nav: true,
          icon: "angle-down",
          reverse: "angle-up"
        },
        {
          title: "I have received bad quality food",
          subtitle: "The path of the righteous man is beset on all sides",
          key: 3,
          nav: true,
          icon: "angle-down",
          reverse: "angle-up"
        },
        {
          title: "The quality of food is not adequate",
          subtitle: "The path of the righteous man is beset on all sides",
          key: 4,
          nav: true,
          icon: "angle-down",
          reverse: "angle-up"
        },
        {
          title: "Payment & refund related queries for this order",
          subtitle: "The path of the righteous man is beset on all sides",
          key: 5,
          nav: true,
          icon: "angle-down",
          reverse: "angle-up"
        },
        {
          title: "Cancellations and Refunds",
          subtitle: "The path of the righteous man is beset on all sides",
          key: 6,
          nav: true,
          icon: "angle-down",
          reverse: "angle-up"
        },
        {
          title: "Terms of Use",
          key: 7,
          nav: false,
          icon: "angle-right",
          reverse: "angle-right"
        },
        {
          title: "Privacy Policy",
          key: 8,
          nav: false,
          icon: "angle-right",
          reverse: "angle-right"
        }
      ],
      count: false
    };
  }

  onPress = () => {
    if (this.state.Data.key > 6) {
    } else {
      this.setState(prevState => ({
        count: !prevState.count
      }));
    }
  };

  render() {
    return (
      <View styles={{ backgroundColor: "#fff" }}>
        <Text style={styles.name}>HELP AND SUPPORT</Text>

        <List>
          {this.state.Data.map((item, i) => (
            <HelpList
              title={item.title}
              content={item.subtitle}
              key={i}
              nav={item.nav}
              icon={item.icon}
              reverse={item.reverse}
            />
          ))}
        </List>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  name: {
    marginLeft: 10,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  subtitleView: {
    flexDirection: "row",
    height: 0
  },
  subtitleView2: {
    flexDirection: "row",
    height: 100
  }
});
