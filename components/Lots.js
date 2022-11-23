import { View, Text } from "react-native";
import React from "react";

const Greeting = (props) => {
  //   const { name } = props;
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "blue" }}>Hello : {props.name}</Text>
    </View>
  );
};
const Lots = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", top: 50 }}>
      <Greeting name="Marry Christmas" />
      <Greeting name="Happy New Year" />
      <Greeting name="Songkran Festival" />
    </View>
  );
};

export default Lots;
