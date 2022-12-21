import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import styles1 from "../components/styles";

const ThirdPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles1.container}>
        <View>
          <Text style={styles1.textTopStyle}>This is Third Page</Text>
        </View>

        <Button
          title="Go to First page"
          onPress={() => navigation.navigate("FirstPage")}
        />

        <Button
          title="Go to Second page"
          onPress={() => navigation.navigate("SecondPage")}
        />
      </View>

      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={styles1.textBottomSytel}>
          Thai-Nichi institute of Technology
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
