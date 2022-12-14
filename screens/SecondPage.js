import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const SecondPage = ({ route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
        <Text style={styles.textStyle}>
          Values passed from First page: {route.params?.post}
        </Text>
      </View>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontSize: 10, color: "gray" }}>www.tni.ac.th</Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    padding: 20,
  },

  heading: {
    fontSize: 25,

    textAlign: "center",

    marginVertical: 10,
  },

  textStyle: {
    textAlign: "center",

    fontSize: 16,

    marginVertical: 10,
  },
});
