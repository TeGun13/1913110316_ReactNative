import { View, Text } from "react-native";
import React from "react";

const Users = () => {
  const users = [
    { id: 1, name: "Jhone" },
    { id: 2, name: "Bee" },
  ];

  return (
    <View>
      {users.map((user, index) => {
        return (
          <Text Key={user.id}>
            {index + 1}.{user.name}
          </Text>
        );
      })}
    </View>
  );
};

export default Users;
