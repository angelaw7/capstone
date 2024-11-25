import React from "react";
import HomePageButton from "../common/HomePageButton";
import { StyleSheet, View, Text } from "react-native";
import ReceiptIcon from "../../assets/icons/ReceiptIcon";
import IncomeIcon from "../../assets/icons/IncomeIcon";
import BudgetIcon from "../../assets/icons/BudgetIcon";

const HomePage = ({ navigation }) => {
  const incomePageHandler = () => {
    navigation.navigate("MyIncome");
  };

  return (
    <View style={styles.background}>
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
  );
};

const styles = StyleSheet.create({
  background: {
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
