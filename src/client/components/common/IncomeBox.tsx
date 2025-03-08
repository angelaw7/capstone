import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import IncomeIcon from "../../assets/icons/IncomeIcon";
import { wrapText } from "../../utils/util";
import IncomeService from "../../services/incomeService";
import { Swipeable } from "react-native-gesture-handler";

interface Income {
  id: number;
  amount: number;
  created_at: string;
  email: string;
  frequency: string | null;
  recurring: boolean;
  title: string;
}

interface IncomeBoxProps {
  incomes: Income[];
  addIncome: () => void;
  setIncomes: Function;
}

const IncomeBox = ({ incomes, addIncome, setIncomes }: IncomeBoxProps) => {
  const handleDeleteIncome = (incomeId: number) => {
    incomes = incomes.filter((income) => income.id != incomeId);
    setIncomes(incomes);
    IncomeService.deleteIncome(incomeId);
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>,
    id: number,
  ) => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteIncome(id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Income</Text>

      {incomes.map((income) => {
        return (
          <Swipeable
            key={income.id}
            renderRightActions={(progress, dragX) =>
              renderRightActions(progress, dragX, income.id)
            }
          >
            <View style={styles.row}>
              <View style={styles.leftContainer}>
                <View style={styles.iconContainer}>
                  <IncomeIcon size={16} />
                </View>
                <Text style={styles.categoryText}>
                  {wrapText(`Income - ${income.title}`, 25)}
                </Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.amountText}>
                  ${income?.amount?.toLocaleString()}
                </Text>
              </View>
            </View>
          </Swipeable>
        );
      })}

      <TouchableOpacity style={styles.add} onPress={addIncome}>
        <View style={styles.leftContainer}>
          <View style={styles.iconContainerDark}>
            <Text style={styles.plusText}>+</Text>
          </View>
          <Text style={styles.categoryText}>Add income</Text>
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
    backgroundColor: "#A0D468",
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

export default IncomeBox;
