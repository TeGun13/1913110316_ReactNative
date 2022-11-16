import { View, Text, TextInput, Button } from "react-native";
import React from "react";

const Txtinput = () => {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Course Goal"
          style={{
            width: "80%",
            borderColor: "black",
            borderwidth: 1,
            padding: 10,
          }}
        />

        <Button title="ADD" />
      </View>
    </View>
  );
};

export default Txtinput;
