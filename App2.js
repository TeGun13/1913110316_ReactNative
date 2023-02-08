import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./screens/HomeScreen";
// import AboutScreen from "./screens/AboutScreen";

// import HomePost from "./screens/HomePost";
// import CreatePost from "./screens/CreatePost";

import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="เกี่ยวกับเรา"
//         onPress={() => navigation.navigate("About")}
//       />
//     </View>
//   );
// }

// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
//       <Text>About Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#db7093",
          },
          headerTintColor: "#ffff",

          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="About" component={AboutScreen}></Stack.Screen> */}
        {/* <Stack.Screen name="HomePost" component={HomePost}></Stack.Screen>
        <Stack.Screen name="CreatePost" component={CreatePost}></Stack.Screen> */}

        <Stack.Screen name="FirstPage" component={FirstPage}></Stack.Screen>
        <Stack.Screen name="SecondPage" component={SecondPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
