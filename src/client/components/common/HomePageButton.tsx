import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import RightArrow from "../../assets/icons/RightArrow";

interface HomePageButton {
  children: React.ReactNode;
  title: string;
  color: string;
  routingHandler: VoidFunction;
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
      <TouchableOpacity onPress={routingHandler}>
        <RightArrow />
      </TouchableOpacity>
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
