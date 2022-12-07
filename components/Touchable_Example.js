import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Touchable_Example = () => {
  const onPress = (msg) => {
    alert("alert for " + msg);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => onPress("Touchable Hightline")}
        >
          <Text>Touchable Hightline</Text>
        </TouchableHighlight>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onPress("Touchable Opacity")}
        >
          <Text>Touchable Opacity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Touchable_Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD", //color of button
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
