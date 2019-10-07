import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
const styles = StyleSheet.create({
  question: {}
});
const Question = props => {
  return (
    <View>
      <Text>{props.content}</Text>
    </View>
  );
};
Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
