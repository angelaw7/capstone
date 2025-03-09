import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import { wrapText } from "../../utils/util";
import { Swipeable } from "react-native-gesture-handler";
import BudgetService from "../../services/budgetService";
import { ICON_CATEGORY_MAPPING } from "../../constants";

interface Budget {
  id: number;
  amount: number;
  created_at: string;
  email: string;
  category: string;
}

interface MyBudgetBoxProps {
  budgets: Budget[];
  addBudget: (budget?: Budget) => void;
  setBudgets: Function;
}

const MyBudgetsBox = ({ budgets, addBudget, setBudgets }: MyBudgetBoxProps) => {
  const handleDeleteBudget = (budgetId: number) => {
    budgets = budgets.filter((budget) => budget.id != budgetId);
    setBudgets(budgets);
    BudgetService.deleteBudget(budgetId);
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
    id: number,
  ) => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteBudget(id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budgets</Text>

      {budgets.map((budget) => {
        const IconComponent =
          ICON_CATEGORY_MAPPING[budget.category] ??
          ICON_CATEGORY_MAPPING["misc"];
        return (
          <Swipeable
            key={budget.id}
            renderRightActions={(progress, dragX) =>
              renderRightActions(progress, dragX, budget.id)
            }
          >
            <View style={styles.row}>
              <View style={styles.leftContainer}>
                <View style={styles.iconContainer}>
                  <IconComponent size={16} />
                </View>
                <Text style={styles.categoryText}>
                  {wrapText(`Budget - ${budget.category}`, 25)}
                </Text>
              </View>
              <Pressable
                onPress={() => addBudget(budget)}
                style={styles.amountContainer}
              >
                <Text style={styles.amountText}>
                  ${budget?.amount?.toLocaleString()}
                </Text>
              </Pressable>
            </View>
          </Swipeable>
        );
      })}

      <TouchableOpacity style={styles.add} onPress={() => addBudget()}>
        <View style={styles.leftContainer}>
          <View style={styles.iconContainerDark}>
            <Text style={styles.plusText}>+</Text>
          </View>
          <Text style={styles.categoryText}>Add budget</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  add: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#D6B6D3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#FFF",
  },
  categoryText: {
    fontSize: 16,
    color: "#333",
  },
  amountContainer: {
    backgroundColor: "#888888",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  iconContainerDark: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  plusText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
    borderRadius: 12,
    marginLeft: 10,
  },
  deleteText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default MyBudgetsBox;
