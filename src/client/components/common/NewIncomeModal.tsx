import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { ActivityIndicator, RadioButton } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import IncomeService from "../../services/incomeService";
import { useUser } from "../../contexts/UserContext";
import CancelIcon from "../../assets/icons/CancelIcon";

const dropdownData = [
  { label: "Daily", value: 1 },
  { label: "Weekly", value: 2 },
  { label: "Bi-Weekly", value: 3 },
  { label: "Monthly", value: 4 },
  { label: "Quarterly", value: 5 },
  { label: "Bi-annually", value: 6 },
  { label: "Annually", value: 7 },
];

interface Income {
  id: number;
  amount: number;
  created_at: string;
  email: string;
  frequency: string | null;
  recurring: boolean;
  title: string;
}

interface NewIncomeModalProps {
  visible: boolean;
  onClose: () => void;
  setIncomes: Function;
  currentIncome?: Income;
}

type DropdownItem = {
  label: string;
  value: number;
};

const NewIncomeModal = ({
  visible,
  onClose,
  setIncomes,
  currentIncome,
}: NewIncomeModalProps) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [checked, setChecked] = useState<"once" | "periodically">(
    currentIncome?.frequency ? "periodically" : "once",
  );
  const [dropdownValue, setDropdownValue] = useState(1);
  const { user } = useUser();

  useEffect(() => {
    if (currentIncome) {
      setTitle(currentIncome.title);
      setAmount(currentIncome.amount.toString());
      setDropdownValue(
        dropdownData.find(
          (data) =>
            data.label.toLowerCase() == currentIncome?.frequency?.toLowerCase(),
        )?.value ?? 1,
      );
      setChecked(currentIncome.frequency ? "periodically" : "once");
    }
  }, [currentIncome]);

  const handleClose = () => {
    setAmount("");
    setTitle("");
    setChecked("once");
    setDropdownValue(1);
    onClose();
  };

  const dropdownChangeHandler = (item: DropdownItem) => {
    setDropdownValue(item.value);
  };

  const grabLabelFromDropdownValue = (num: number) => {
    const entry = dropdownData.find((entry) => entry.value === num);
    return entry ? entry.label.toLowerCase() : null;
  };

  const validationCheck = () => {
    return Number(amount) > 0 && title.length > 0;
  };

  const addIncomeHandler = async () => {
    if (!validationCheck()) return;

    setLoading(true);
    const incomeData = {
      title,
      amount: Number(amount),
      frequency:
        checked === "once" ? null : grabLabelFromDropdownValue(dropdownValue),
      recurring: checked === "once" ? false : true,
      email: user!.email,
    };

    try {
      let newIncome: Income[] = [];
      if (currentIncome) {
        newIncome = await IncomeService.updateIncome(
          currentIncome.id,
          incomeData,
        );
        setIncomes((prevIncomes: Income[]) => {
          const updatedIncomes = prevIncomes.filter(
            (income) => income.id != currentIncome.id,
          );
          updatedIncomes.push(newIncome[0]);
          return updatedIncomes;
        });
      } else {
        newIncome = await IncomeService.createIncome(incomeData);
        setIncomes((prevIncomes: Income[]) => [...prevIncomes, newIncome[0]]);
      }
      setLoading(false);

      setAmount("");
      setTitle("");
      onClose();
    } catch (error) {
      console.error("Error updating income:", error);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <Pressable style={styles.backArrow} onPress={handleClose}>
                <CancelIcon size={30} />
              </Pressable>
              <Text style={styles.headerTitle}>New Income</Text>
            </View>

            <View style={styles.fieldBox}>
              <TextInput
                style={styles.textInput}
                value={title}
                onChangeText={setTitle}
                placeholder="Title: Add a Title"
              />
              <TextInput
                style={styles.textInput}
                onChangeText={setAmount}
                value={amount}
                placeholder="Amount ($):"
                keyboardType="numeric"
              />
              <View style={styles.radioButtonBox}>
                <View style={styles.radioButton}>
                  <RadioButton
                    value="once"
                    status={checked === "once" ? "checked" : "unchecked"}
                    onPress={() => setChecked("once")}
                  />
                  <Text onPress={() => setChecked("once")}>Once</Text>
                </View>
                <View style={styles.radioButton}>
                  <RadioButton
                    value="periodically"
                    status={
                      checked === "periodically" ? "checked" : "unchecked"
                    }
                    onPress={() => setChecked("periodically")}
                  />
                  <Text onPress={() => setChecked("periodically")}>
                    Periodically
                  </Text>
                </View>
              </View>

              {checked === "periodically" && (
                <View style={styles.dropdownBox}>
                  <Text style={styles.dropdownText}>Period:</Text>
                  <Dropdown
                    data={dropdownData}
                    labelField="label"
                    valueField="value"
                    style={styles.dropdown}
                    search
                    searchPlaceholder="Search..."
                    value={dropdownValue}
                    onChange={(item) => dropdownChangeHandler(item)}
                  />
                </View>
              )}

              <Pressable style={styles.submit} onPress={addIncomeHandler}>
                <Text style={styles.submitText}>
                  {loading ? (
                    <ActivityIndicator />
                  ) : currentIncome ? (
                    `Update Income`
                  ) : (
                    `Add Income`
                  )}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  backArrow: {
    position: "absolute",
    left: 0,
  },
  headerTitle: {
    fontWeight: "600",
    fontSize: 24,
  },
  textInput: {
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    fontSize: 16,
  },
  fieldBox: {
    gap: 20,
  },
  submit: {
    height: 50,
    backgroundColor: "#C6FFC9",
    borderRadius: 16,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    fontWeight: "600",
    fontSize: 18,
  },
  radioButtonBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownBox: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownText: {
    padding: 12,
    fontSize: 16,
  },
  dropdown: {
    padding: 12,
    width: "75%",
  },
});

export default NewIncomeModal;
