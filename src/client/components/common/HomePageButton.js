import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const HomePageButton = ({ iconPath, title, color }) => {
  console.log("icon path", iconPath);
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
      <Image source={iconPath} />
      <Text style={styles.buttonText}>{title}</Text>
      <Image source={require("../../assets/RightArrow.png")} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: "100%",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 32,
    fontWeight: "600",
  },
});

export default HomePageButton;
