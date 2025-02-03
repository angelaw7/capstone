import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import BackArrow from "../../assets/icons/BackArrow";
import AddIcon from "../../assets/icons/AddIcon";
import ExpensesService from "../../services/expensesService";
import { NavigationProps } from "../../types";
import { useUser } from "../../contexts/UserContext";
import ExpensesList from "../common/ExpensesList";

interface MyExpensesProp {
  navigation: NavigationProps;
}

const MyExpenses = ({ navigation }: MyExpensesProp) => {
  const { user, loading } = useUser();
  const [expenses, setExpenses] = useState([]);

  const returnHandler = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const expenses = await ExpensesService.getUserExpenses(user?.email);
        setExpenses(expenses);
      } catch (error) {
        throw error;
      }
    };
    getExpenses();
  }, [user]);

  const addNewExpenseHandler = () => {
    navigation.navigate("NewExpense");
  };

  return (
    <View style={styles.background}>
      <View style={styles.headerBox}>
        <Pressable style={styles.backIcon} onPress={returnHandler}>
          <BackArrow size={35} />
        </Pressable>
        <Text style={styles.title}>My Expenses</Text>
        <Pressable style={styles.addIcon} onPress={addNewExpenseHandler}>
          <AddIcon size={35} />
        </Pressable>
      </View>

      <ExpensesList transactions={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: "white",
    padding: 24,
    rowGap: 20,
  },
  headerBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontWeight: "600",
    fontSize: 32,
  },
  backIcon: {
    position: "absolute",
    left: 0,
  },
  addIcon: {
    position: "absolute",
    right: 24,
  },
});

export default MyExpenses;
