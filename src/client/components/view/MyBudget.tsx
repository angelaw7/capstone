import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import BackArrow from "../../assets/icons/BackArrow";
import AddIcon from "../../assets/icons/AddIcon";
import { NavigationProps } from "../../types";
import { useUser } from "../../contexts/UserContext";
import BudgetService from "../../services/budgetService";
import IncomeService from "../../services/incomeService";
import { MONTHS } from "../../constants";
import BudgetBox from "../common/BudgetBox";
import ExpensesService from "../../services/expensesService";
import { ActivityIndicator } from "react-native-paper";
import IncomeBox from "../common/IncomeBox";
import NewIncomeModal from "../common/NewIncomeModal";
import MyBudgetsBox from "../common/MyBudgetsBox";
import NewBudgetModal from "../common/NewBudgetModal";

interface MyBudgetProps {
  navigation: NavigationProps;
}

interface Budget {
  id: number;
  amount: number;
  created_at: string;
  email: string;
  category: string;
}

interface Income {
  id: number;
  amount: number;
  created_at: string;
  email: string;
  frequency: string | null;
  recurring: boolean;
  title: string;
}

interface Expense {
  id: number;
  cost: number;
  name: string;
  category: string;
  email: string;
  created_at: string;
  transaction_date: string;
  raw_name: string;
}

const MyBudget = ({ navigation }: MyBudgetProps) => {
  const { user } = useUser();
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const [currentIncome, setCurrentIncome] = useState<Income>();
  const [openIncomeModal, setOpenIncomeModal] = useState(false);
  const [currentBudget, setCurrentBudget] = useState<Budget>();
  const [openBudgetModal, setOpenBudgetModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const returnHandler = () => {
    navigation.goBack();
  };

  const addNewBudgetHandler = () => {
    navigation.navigate("NewBudget");
  };

  const handleOpenIncomeModal = (income?: Income) => {
    if (income) {
      setCurrentIncome(income);
    } else {
      setCurrentIncome(undefined);
    }
    setOpenIncomeModal(true);
  };

  const handleCloseIncomeModal = () => {
    setOpenIncomeModal(false);
  };

  const handleOpenBudgetModal = (budget?: Budget) => {
    if (budget) {
      setCurrentBudget(budget);
    } else {
      setCurrentBudget(undefined);
    }
    setOpenBudgetModal(true);
  };

  const handleCloseBudgetModal = () => {
    setOpenBudgetModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.userid || !user?.email) return;

      try {
        setLoading(true);

        const [budgets, expenses, incomes] = await Promise.all([
          BudgetService.getUserBudgets(user.userid),
          ExpensesService.getUserExpenses(user.userid, true),
          IncomeService.getUserIncomes(user.email),
        ]);

        setBudgets(budgets);
        setExpenses(expenses);
        setIncomes(incomes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading)
    return (
      <View style={{ ...styles.background, alignContent: "center" }}>
        <ActivityIndicator />
      </View>
    );

  const date = new Date();
  return (
    <View style={styles.background}>
      <View style={styles.headerBox}>
        <Pressable style={styles.backIcon} onPress={returnHandler}>
          <BackArrow size={35} />
        </Pressable>
        <Text
          style={styles.title}
        >{`${MONTHS[date.getMonth()]} ${date.getFullYear()}`}</Text>
      </View>

      <ScrollView style={styles.infoContainer}>
        <BudgetBox incomes={incomes} expenses={expenses} budgets={budgets} />
        <IncomeBox
          incomes={incomes}
          addIncome={handleOpenIncomeModal}
          setIncomes={setIncomes}
        />
        <MyBudgetsBox
          budgets={budgets}
          addBudget={handleOpenBudgetModal}
          setBudgets={setBudgets}
        />
      </ScrollView>

      <NewIncomeModal
        setIncomes={setIncomes}
        visible={openIncomeModal}
        onClose={handleCloseIncomeModal}
        currentIncome={currentIncome}
      />

      <NewBudgetModal
        setBudgets={setBudgets}
        visible={openBudgetModal}
        onClose={handleCloseBudgetModal}
        currentBudget={currentBudget}
      />
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
  sectionTitle: {
    fontSize: 20,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    marginBottom: 30,
  },
});

export default MyBudget;
