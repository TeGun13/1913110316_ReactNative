import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "./components/Information";
import Welcome from "./components/Welcome";
import Txtinput from "./components/Txtinput";
import CustomComponent from "./components/CustomComponent";

const App = () => {
  return (
    <View>
      {/* <Information /> */}

      {/* <Welcome></Welcome> */}

      {/* <Txtinput></Txtinput> */}
      <CustomComponent></CustomComponent>
    </View>
  );
};

export default App;
