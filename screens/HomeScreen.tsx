import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>Home</Text>
      {/* <Button ></Button> */}
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center"
  },
  titleStyle: {
    fontFamily: "System",
    fontWeight: "900",
    fontSize: 40
  }
});

export default HomeScreen;
