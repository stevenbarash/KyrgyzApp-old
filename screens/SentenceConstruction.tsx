import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class SentenceConstruction extends Component {
  styles = StyleSheet.create({
    titleStyle: {
      fontFamily: "System",
      fontSize: 40
    }
  });

  render() {
    return (
      <View>
        <Text style={this.styles.titleStyle}> textInComponent </Text>
      </View>
    );
  }
}

export default SentenceConstruction;
