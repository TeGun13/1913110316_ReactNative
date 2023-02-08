import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

const TxtInput1 = () => {
  const [userName, setUserName] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Insert any Text</Text>

        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={"Input Username"}
          style={styles.input}
        />

        <Text style={{ color: "blue" }}>Thai-Nichi Institute of Technlogy</Text>
      </View>
    </SafeAreaView>
  );
};

export default TxtInput1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#ffffff",
  },

  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
  },
});
