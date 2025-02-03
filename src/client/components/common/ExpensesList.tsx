import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import { capitalizeFirstLetter, formatDate } from "../../utils/util";

const groupExpenseData = (expenses: any[]) => {
  const grouped = expenses.reduce(
    (
      acc: Record<string, Record<string, { total: number; data: any[] }>>,
      expense,
    ) => {
      const { transaction_date, category, cost } = expense;

      if (!acc[transaction_date]) {
        acc[transaction_date] = {};
      }

      if (!acc[transaction_date][category]) {
        acc[transaction_date][category] = { total: 0, data: [] };
      }

      // Add expense to its category for the specific date
      acc[transaction_date][category].data.push(expense);

      // Add to total cost for that category on that date
      acc[transaction_date][category].total += cost;

      return acc;
    },
    {},
  );

  return Object.keys(grouped).map((date) => ({
    [date]: grouped[date],
  }));
};

const transformDataForSectionList = (data: any[]) => {
  return data.map((entry) => {
    const date = Object.keys(entry)[0]; // Extract the date
    const categories = entry[date]; // Get category data

    return {
      title: date,
      data: Object.keys(categories).map((category) => ({
        category,
        total: categories[category].total,
        expenses: categories[category].data,
      })),
    };
  });
};

type ExpensesListProps = {
  transactions: never[] | null;
};

const ExpensesList = ({ transactions }: ExpensesListProps) => {
  const groupedTransactions = groupExpenseData(transactions ?? []);
  const transFormedExpenses = transformDataForSectionList(groupedTransactions);

  return (
    <SectionList
      sections={transFormedExpenses}
      keyExtractor={(item) => item.category}
      renderSectionHeader={({ section: { title } }) => (
        <>
          <Text style={styles.header}>{formatDate(title)}</Text>
          <Divider style={{ marginVertical: 8 }} />
        </>
      )}
      renderItem={({ item }) => (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>
            {capitalizeFirstLetter(item.category)} - ${item.total.toFixed(2)}
          </Text>
          {item.expenses.map((expense: any) => (
            <View key={expense.id} style={styles.expenseItem}>
              <Text style={styles.expenseName}>{expense.name}</Text>
              <Text style={styles.expenseAmount}>
                -${expense.cost.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  categoryContainer: {
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  expenseName: {
    fontSize: 14,
  },
  expenseAmount: {
    fontSize: 14,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
});

export default ExpensesList;
