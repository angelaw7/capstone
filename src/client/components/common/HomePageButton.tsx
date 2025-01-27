import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import RightArrow from "../../assets/icons/RightArrow";

interface HomePageButton {
  children: React.ReactNode;
  title: string;
  color: string;
  routingHandler: (...args: any[]) => void;
}

const HomePageButton = ({
  children,
  title,
  color,
  routingHandler,
}: HomePageButton) => {
  return (
    <TouchableOpacity
      onPress={routingHandler}
      style={[styles.button, { backgroundColor: color }]}
    >
      {children}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 130,
    width: 150,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default HomePageButton;
