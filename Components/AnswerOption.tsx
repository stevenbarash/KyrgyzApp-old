import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left
} from "native-base";

const AnswerOption = props => {
  return (
    <ListItem>
      <Left>
        <Text>{props.answerContent}</Text>
      </Left>
      <Right>
        <Radio
          selected={props.answerType === props.answer}
          onPress={props.onAnswerSeleted}
        />
      </Right>
    </ListItem>
  );
};
AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOptions;
