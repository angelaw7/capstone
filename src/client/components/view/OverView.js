import React from "react";
import { View, Text } from "tamagui";
import { StyleSheet } from "react-native";
import HomePage from "./HomePage";

const OverView = ({ navigation, route }) => {
  const username = route.params.name;

  return (
    <View alignItems="center" paddingTop={10} style={styles.background}>
      <Text style={styles.welcome}>{`Welcome back ${username}!`}</Text>
      <HomePage />
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    color: "#9797E2",
    fontSize: 32,
    fontWeight: "400",
  },
  background: {
    backgroundColor: "white",
    height: "100%",
    padding: 24,
    display: "flex",
  },
});

export default OverView;
