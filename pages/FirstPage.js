import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React from "react";
import styles from "../components/styles";

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textTopStyle}>This is the First Page</Text>
        </View>

        <Button
          title="Go to Second page"
          onPress={() => navigation.navigate("SecondPage")}
        />
        <Button
          title="Go to Third page"
          onPress={() => navigation.navigate("ThirdPage")}
        />
      </View>

      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={styles.textBottomSytel}>
          Thai-Nichi institute of Technology
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
