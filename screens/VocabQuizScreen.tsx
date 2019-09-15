import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
const VocabQuizScreen = props => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleArea}>
        <Text style={styles.kyrgyzWord}>Ит</Text>
        <AwesomeButton height={50} width={50}>
          <FontAwesomeIcon icon={faVolumeUp} size={38} />
        </AwesomeButton>
      </View>
      <View style={styles.quizGrid}>
        <View style={styles.quizGridRow}>
          <View style={styles.quizOption}>
            <AwesomeButton
              onPress={() => alert("fuck")}
              height={150}
              width={150}
            >
              <Image
                style={styles.imgStyle}
                source={require("../assets/dog.jpg")}
              />
            </AwesomeButton>
            <Text style={styles.captionStyle}>Dog</Text>
          </View>
          <View style={styles.quizOption}>
            <AwesomeButton
              onPress={() => alert("fuck")}
              height={150}
              width={150}
            >
              <Image
                style={styles.imgStyle}
                source={require("../assets/dog.jpg")}
              />
            </AwesomeButton>
            <Text style={styles.captionStyle}>Dog</Text>
          </View>
        </View>
        <View style={styles.quizGridRow}>
          <View style={styles.quizOption}>
            <AwesomeButton
              onPress={() => alert("fuck")}
              height={150}
              width={150}
            >
              <Image
                style={styles.imgStyle}
                source={require("../assets/dog.jpg")}
              />
            </AwesomeButton>
            <Text style={styles.captionStyle}>Dog</Text>
          </View>
          <View style={styles.quizOption}>
            <AwesomeButton
              onPress={() => alert("fuck")}
              height={150}
              width={150}
            >
              <Image
                style={styles.imgStyle}
                source={require("../assets/dog.jpg")}
              />
            </AwesomeButton>
            <Text style={styles.captionStyle}>Dog</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quizGrid: {},
  quizGridRow: { flexDirection: "row" },
  imgStyle: { height: 150, width: 150 },
  captionStyle: { fontSize: 20, fontWeight: "600" },
  quizOption: { alignItems: "center", padding: 10 },
  kyrgyzWord: { fontSize: 50, fontWeight: "800" },
  screenContainer: { alignItems: "center" },
  titleArea: { flexDirection: "row" }
});

export default VocabQuizScreen;
