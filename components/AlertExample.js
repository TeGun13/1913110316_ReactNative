import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";
import React from "react";

const AlertExample = () => {
  const simpleAlertHandle = () => {
    alert("Hello I'm simple Alert");
  };

  const twoOptionAlertHandle = () => {
    //to make two option alert
    Alert.alert(
      //title
      "hello",
      //body
      "I am two option alert",
      [
        {
          text: "yes",
          onPress: () => alert("Yes Press"),
        },
        {
          text: "no",
          onPress: () => alert("No Press"),
        },
      ],
      //clicking out side of Alert will not cancle
      {
        cancelable: false,
      }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button title="Simple Alert" onPress={simpleAlertHandle} />
        <Button title="Alert With Two Options" onPress={twoOptionAlertHandle} />
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ecf0f1",
  },
});
