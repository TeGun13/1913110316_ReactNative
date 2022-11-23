import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Fname = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>
        Your First Name is {props.fname} and Last name is {props.lname}
      </Text>
    </View>
  );
};

const MyCustomTextWith = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Fname fname="Gunyanut" lname="Techapha" />
      <Fname fname="Chwanpa" lname="Kochavon" />
    </SafeAreaView>
  );
};

export default MyCustomTextWith;
