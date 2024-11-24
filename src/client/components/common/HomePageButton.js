import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import RightArrow from "../../assets/icons/RightArrow";

const HomePageButton = ({ children, title, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
      {children}
      <Text style={styles.buttonText}>{title}</Text>
      <RightArrow />
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
