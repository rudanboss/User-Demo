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

export default class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: false };
  }

  onPress = () => {
    if (this.props.nav === false) {
    } else {
      this.setState(prevState => ({
        count: !prevState.count
      }));
    }
  };

  render() {
    return (
      <ListItem
        title={
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", justifyContent: "space-between" }}
              onPress={this.onPress}
            >
              <Text>Order Id : 123456</Text>
              <Icon
                name={
                  this.state.count === false
                    ? this.props.nav === true
                      ? "angle-down"
                      : "angle-right"
                    : "angle-up"
                }
                size={20}
                type="font-awesome"
              />
            </TouchableOpacity>
          </View>
        }
        subtitle={
          <View
            style={[
              styles.subHeader,
              this.state.count === true ? styles.active : styles.inactive
            ]}
          >
            <Text>{this.props.content}</Text>
          </View>
        }
        hideChevron
      />
    );
  }
}
const styles = StyleSheet.create({
  name: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  active: {
    display: "flex"
  },
  subHeader: {
    paddingTop: 10,
    paddingBottom: 10
  },
  inactive: {
    display: "none"
  }
});
