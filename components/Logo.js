import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-web";
import Users from "./Users";

const Logo = () => {
  const textLogo = "React Native by Gunyanut";
  const isth = false;

  const showData = () => {
    alert("Hello Button");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{textLogo}</Text>
      {
        /* {isth && <Text>ภาษาไทย</Text>} */
        isth ? <Text>ภาษาไทย</Text> : <Text>ภาษาอังกฤษ</Text>
      }

      <Button title="Click Me" onPress={showData} />

      <Users />
    </View>
  );
};

export default Logo;
