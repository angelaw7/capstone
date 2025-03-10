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
      testID="home-page-button"
    >
      {children}
      <Text style={styles.buttonText} testID="button-text">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 130,
    width: "100%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default HomePageButton;
