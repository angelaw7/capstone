import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { NavigationProps, RouteProps } from "../../types";
import { Divider } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import BackArrow from "../../assets/icons/BackArrow";

const screenWidth = Dimensions.get("window").width;

type BudgetBoxDetailsProps = {
  navigation: NavigationProps;
  route: RouteProps;
};

const BudgetBoxDetails = ({ navigation, route }: BudgetBoxDetailsProps) => {
  const [dropdownField, setDropdownField] = useState("Last week");

  // TODO: replace data and expenses with real expense data
  // TODO: filter data based on dropdownField time range
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [10, 20, 15, 25, 45, 35, 20],
        strokeWidth: 2,
      },
    ],
  };

  const expenses = [
    {
      date: "November 11, 2024",
      items: [
        { label: "Groceries", amount: -52.37 },
        { label: "Movie tickets", amount: -25.77 },
      ],
    },
    {
      date: "November 10, 2024",
      items: [
        { label: "Lunch", amount: -13.22 },
        { label: "Coffee", amount: -4.92 },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow size={25} style={{ marginLeft: 10, marginTop: 2 }} />
        </TouchableOpacity>
        <Dropdown
          data={[
            { label: "Last week", value: "Last week" },
            { label: "Last month", value: "Last month" },
            { label: "Last year", value: "Last year" },
          ]}
          search
          searchPlaceholder={"Last week"}
          labelField="label"
          valueField="value"
          value={dropdownField}
          onChange={(item) => setDropdownField(item.value)}
          style={{ minWidth: "35%", marginTop: 2 }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Expense Tracker</Text>
        <LineChart
          data={data}
          width={screenWidth * 0.75}
          height={200}
          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(128, 0, 128, ${opacity})`,
            labelColor: (opacity = 1) => `black`,
          }}
          bezier
        />
      </View>

      <Text style={styles.title}>Recent Expenses</Text>
      <Divider style={{ marginVertical: 10 }} />
      {expenses.map((expense, index) => (
        <View key={index} style={styles.expenseContainer}>
          <Text style={styles.expenseDate}>{expense.date}</Text>
          {expense.items.map((item, i) => (
            <View key={i} style={styles.expenseItem}>
              <Text>{item.label}</Text>
              <Text style={styles.amount}>{item.amount.toFixed(2)}</Text>
            </View>
          ))}
          {index != expenses.length - 1 ? (
            <Divider style={{ marginVertical: 10 }} />
          ) : (
            <></>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: "15%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    margin: 10,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#eee",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  expenseContainer: {
    marginBottom: 15,
  },
  expenseDate: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    paddingLeft: 20,
  },
  amount: {
    color: "red",
  },
});

export default BudgetBoxDetails;
