import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

const QuestionCount = props => {
  return (
    <View>
      <Text>
        Question {props.counter} of {props.total}
      </Text>
    </View>
  );
};
QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
