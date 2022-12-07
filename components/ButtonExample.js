import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";

const Separator = () => <View style={styles.separator} />;

const ButtonExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </Text>

        <Button title="Press me" onPress={() => alert("Simple Button Press")} />
      </View>
      <Separator />

      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button. All interaction for
          the component are disabled. This layout strategy lets the title define
          the width of the button.
        </Text>
        <Button
          title="Press me"
          color="#737373"
          onPress={() => alert("Button with adjust with color pressed")}
        />
      </View>
      <Separator />

      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button
          title="Press me"
          disabled //can't click
        />
      </View>
      <Separator />

      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Left Button"
            onPress={() => alert("Press Left Button")}
          />
          <Button
            title="Right Button"
            onPress={() => alert("Press Right Button")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
