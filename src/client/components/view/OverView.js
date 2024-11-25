import React from "react";
import { View, Text } from "tamagui";
import { StyleSheet } from "react-native";

import HomePageButton from "../common/HomePageButton";
import ReceiptIcon from "../../assets/icons/ReceiptIcon";
import IncomeIcon from "../../assets/icons/IncomeIcon";
import BudgetIcon from "../../assets/icons/BudgetIcon";

const OverView = ({ navigation, route }) => {
  const username = route.params.name;

  const incomePageHandler = () => {
    navigation.navigate("MyIncome");
  };

  return (
    <View alignItems="center" paddingTop={10} style={styles.background}>
      <Text style={styles.welcome}>{`Welcome back ${username}!`}</Text>
      <View style={styles.homepage}>
        <Text style={styles.title}>What would you like to do?</Text>
        <View style={styles.buttonsContainer}>
          <HomePageButton title="Expense" color={"#F9E6E1"}>
            <ReceiptIcon />
          </HomePageButton>

          <HomePageButton
            title="Income"
            color={"#C6FFC9"}
            routingHandler={incomePageHandler}
          >
            <IncomeIcon />
          </HomePageButton>

          <HomePageButton title="Budget" color={"#E1F7F9"}>
            <BudgetIcon />
          </HomePageButton>
        </View>
      </View>
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
  homepage: {
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

export default OverView;
