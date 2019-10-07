import React from "react";
import { View, Text } from "react-native";
import Question from "../../Components/Question";
import QuestionCount from "../../Components/QuestionCount";
import PropTypes from "prop-types";
const Quiz = props => {
  return (
    <View>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} />
    </View>
  );
};
Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
