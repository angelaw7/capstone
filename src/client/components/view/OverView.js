import React from "react";
import { View, Text } from "tamagui";

const OverView = ({ navigation, route }) => {
  const username = route.params.name;

  return (
    <View alignItems="center" paddingTop={10}>
      <Text>{`Welcome Back ${username}`}</Text>
    </View>
  );
};

export default OverView;
