import { View, Text } from "react-native";
import React from "react";

const Cat = () => {
  return (
    <View>
      <Text>I LOVE CAT.</Text>
    </View>
  );
};

const CustomComponent = () => {
  return (
    <View>
      <Text>CustomComponent</Text>
      <Cat></Cat>
    </View>
  );
};

export default CustomComponent;
