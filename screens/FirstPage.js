import { StyleSheet, Text, View, Button, TextInput , SafeAreaView} from "react-native";
import React, { useState } from "react";

const FirstPage = ({ navigation }) => {
  const [postText, setPostText] = useState("");
  return (
    < SafeAreaView style={{flex:1}}>

      <View style={styles.container}>
        <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
        <Text style={styles.textStyle}>
          Please insert your name to pass it to second screen
        </Text>

        <TextInput
          placeholder="Please text here"
          style={{ width: 300, padding: 10, backgroundColor: "lightgray" }}
          value={postText}
          onChangeText={setPostText}
        ></TextInput>
        <Text style={{ padding: 5 }} />
        <Button
          title="Go next"
          onPress={() => navigation.navigate("SecondPage", { post: postText })}
        />
      </View>

      <View style={{ justifyContent: "flex-end",alignItems:'center' }}>
        <Text style={{ fontSize: 10, color: "gray" }}>www.tni.ac.th</Text>
      </View>
    </ SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    padding: 20,
  },

  heading: {
    fontSize: 25,

    textAlign: "center",

    marginVertical: 10,
  },

  textStyle: {
    textAlign: "center",

    fontSize: 16,

    marginVertical: 10,
  },
});
