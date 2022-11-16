import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Information = () => {
  return (
    <View style={styles.container}>
      <Text Style={styles.textstyle}>React Native with Thai-Nichi</Text>

      <Text Style={{ color: "Blue", fontSize: 20 }}>
        By Gunyanut Techaphalangrak
      </Text>

      <Text Style={[styles.warning, styles.textstyle]}>
        Student Id : 1913110316
      </Text>
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

  textstyle: {
    fontSize: 20,
  },

  warning: {
    fontWeight: "bold",
    color: "red",
  },
});
