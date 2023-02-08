import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";

const Count = ({ num, title }) => {
  //   const [count, setCount] = useState(props.num); //1
  // const {num,title} = props //2
  const [count, setCount] = useState(num); //2

  //   useEffect(() => {
  //     console.log("use effect 1");
  //   });

  //   useEffect(() => {
  //     console.log("use effect 2");
  //   }, [count]);

  //   useEffect(() => {
  //     console.log("use effect 3");
  //   }, []);

  return (
    <View>
      <Text>
        {title} : {count}
      </Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Count;
