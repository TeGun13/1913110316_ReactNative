import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import axiosF from "axios";
import axios from "axios";

const App = () => {
  const getData = async () => {
    try {
      const respone = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      alert(JSON.stringify(respone.data));
    } catch (error) {
      alert(error.massege);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        Example of Axios in React Native
      </Text>
      <Button
        title="Get data Using Async Await GET"
        style={styles.buttonStyle}
        onPress={getData}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",

    flex: 1,

    padding: 16,
  },

  buttonStyle: {
    alignItems: "center",

    backgroundColor: "#DDDDDD",

    padding: 10,

    width: "100%",

    marginTop: 16,
  },
});
