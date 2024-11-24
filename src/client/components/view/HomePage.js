import React from "react";
import HomePageButton from "../common/HomePageButton";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>What would you like to do?</Text>
      <View style={styles.buttonsContainer}>
        <HomePageButton
          iconPath={require("../../assets/Receipt.png")}
          title="Expense"
          color={"#F9E6E1"}
        />
        <HomePageButton
          iconPath={require("../../assets/Income.png")}
          title="Income"
          color={"#C6FFC9"}
        />
        <HomePageButton
          iconPath={require("../../assets/Budget.png")}
          title="Budget"
          color={"#E1F7F9"}
        />
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    height: "100%",
    padding: 24,
    display: "flex",
    rowGap: 24,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    rowGap: 24,
  },
});

export default HomePage;
