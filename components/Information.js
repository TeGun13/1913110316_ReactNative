import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Information = () => {
  return (
    <View style={styles.container}>
      <Text>React Native with Thai-Nichi</Text>
      <Text>By Gunyanut Techaphalangrak</Text>
      <Text>Student Id : 1913110316</Text>
      <Text>Major : Information and Technology</Text>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B0C4DE",
    alignItems: "center",
    justifyContent: "center",
  },
});
