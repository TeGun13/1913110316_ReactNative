import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "./components/Information";
import Welcome from "./components/Welcome";
import Txtinput from "./components/Txtinput";
import CustomComponent from "./components/CustomComponent";
import Logo from "./components/Logo";
import Lots from "./components/Lots";
import MyCustomTextWith from "./components/MyCustomTextWith";
import Count from "./components/Count";
import TxtInput1 from "./components/TxtInput1";
import UserNamePassword from "./components/UserNamePassword";

const App = () => {
  return (
    <View>
      {/* <Information /> */}

      {/* <Welcome></Welcome> */}

      {/* <Txtinput></Txtinput> */}
      {/* <CustomComponent></CustomComponent> */}

      {/* <Logo></Logo> */}
      {/* <Lots></Lots> */}
      {/* <MyCustomTextWith></MyCustomTextWith> */}
      {/* <Count num={2} title="Click"></Count> */}
      {/* <TxtInput1/> */}
      <UserNamePassword></UserNamePassword>
    </View>
  );
};
export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
