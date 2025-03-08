import React from "react";
import { View, Text } from "tamagui";
import { StyleSheet } from "react-native";

import HomePageButton from "../common/HomePageButton";
import ReceiptIcon from "../../assets/icons/ReceiptIcon";
import IncomeIcon from "../../assets/icons/IncomeIcon";
import BudgetIcon from "../../assets/icons/BudgetIcon";
import { NavigationProps, RouteProps } from "../../types";
import { FlatList } from "react-native-gesture-handler";

interface ManagePageProps {
  navigation: NavigationProps;
  route: RouteProps;
}

const ManagePage = ({ navigation, route }: ManagePageProps) => {
  const incomePageHandler = () => {
    navigation.navigate("MyIncome");
  };

  const expensePageHandler = () => {
    navigation.navigate("MyExpenses");
  };

  const budgetPageHandler = () => {
    navigation.navigate("MyBudget");
  };

  const buttonData = (type: string) => {
    const buttons: { [key: string]: any } = {
      expense: {
        title: "Expenses",
        color: "#6A90C1",
        routingHandler: expensePageHandler,
        icon: <ReceiptIcon size={60} />,
      },
      budget: {
        title: "Budget",
        color: "#70B278",
        routingHandler: budgetPageHandler,
        icon: <BudgetIcon size={55} />,
      },
    };
    return buttons[type];
  };

  type ButtonComponentProps = {
    type: string;
  };
  const ButtonComponent = ({ type }: ButtonComponentProps) => {
    const button = buttonData(type);
    return (
      <HomePageButton
        title={button.title}
        color={button.color}
        routingHandler={button.routingHandler}
      >
        {button.icon}
      </HomePageButton>
    );
  };

  const buttons = ["expense", "budget"];

  return (
    <View alignItems="center" style={styles.background}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>What would you like to do?</Text>
      </View>
      <View style={styles.homepage}>
        <FlatList
          style={styles.buttonsContainer}
          data={buttons}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          renderItem={({ item }) => <ButtonComponent type={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#9E599A",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "25%",
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  welcome: {
    color: "#9797E2",
    fontSize: 32,
    fontWeight: "400",
  },
  background: {
    backgroundColor: "white",
    height: "100%",
    display: "flex",
  },
  homepage: {
    width: "100%",
    height: "100%",
    padding: 24,
    display: "flex",
    rowGap: 24,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  buttonsContainer: {
    alignContent: "center",
    alignSelf: "center",
    width: "80%",
    top: "10%",
  },
});

export default ManagePage;
