import { View, Text, Button } from "react-native";
import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home" size={24} color="#008b8b" />
      <Text>Home Screen</Text>
      <Button
        title="เกี่ยวกับเรา"
        onPress={() =>
          navigation.navigate("About", { email: "Reactnative@tni.ac.th" })
        }
      />
    </View>
  );
};

export default HomeScreen;
