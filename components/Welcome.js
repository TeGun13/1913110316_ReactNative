import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To React Native</Text>
      <Text style={styles.warning}>With Mobile Application</Text>
    </View>
  );
};

export default Welcome;
