import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { RadioButton } from "react-native-paper";
import BackArrow from "../../assets/icons/BackArrow";

import { Dropdown } from "react-native-element-dropdown";
import { NavigationProps } from "../../types";
import IncomeService from "../../services/incomeService";
import { useUser } from "../../contexts/UserContext";

const dropdownData = [
  { label: "Daily", value: 1 },
  { label: "Weekly", value: 2 },
  { label: "Bi-Weekly", value: 3 },
  { label: "Monthly", value: 4 },
  { label: "Quarterly", value: 5 },
  { label: "Bi-annually", value: 6 },
  { label: "Annually", value: 7 },
];

interface NewIncomePageProps {
  navigation: NavigationProps;
}

type DropdownItem = {
  label: string;
  value: number;
};

const NewIncomePage = ({ navigation }: NewIncomePageProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [checked, setChecked] = React.useState<"once" | "periodically">("once");
  const [dropdownValue, setDropdownValue] = useState(1);
  const { user } = useUser();

  const dropdownChangeHandler = (item: DropdownItem) => {
    setDropdownValue(item.value);
  };

  const grabLabelFromDropdownValue = (num: number) => {
    const entry = dropdownData.find((entry) => entry.value === num);
    return entry ? entry.label.toLowerCase() : null;
  };

  const returnHandler = () => {
    navigation.goBack();
  };

  const validationCheck = () => {
    const validAmount = Number(amount) > 0;
    const validTitle = title.length > 0;
    return validAmount && validTitle;
  };

  const addIncomeHandler = async () => {
    // probably put like an html indicator or smth idk
    if (!validationCheck()) return;

    const incomeData = {
      title,
      amount: Number(amount),
      frequency:
        checked === "once" ? null : grabLabelFromDropdownValue(dropdownValue),
      recurring: checked === "once" ? false : true,
      email: user!.email,
    };

    try {
      await IncomeService.createIncome(incomeData);
      returnHandler();
    } catch (error) {
      console.error("Error updating income:", error);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Pressable style={styles.backArrow} onPress={returnHandler}>
          <BackArrow size={35} />
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
              status={checked === "periodically" ? "checked" : "unchecked"}
              onPress={() => setChecked("periodically")}
            />
            <Text onPress={() => setChecked("periodically")}>Periodically</Text>
          </View>
        </View>
        {checked == "periodically" && (
          <View style={styles.dropdownBox}>
            <Text style={styles.dropdownText}>How often?:</Text>
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
          <Text style={styles.submitText}>Add Income</Text>
        </Pressable>
      </View>
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
  header: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  backArrow: {
    position: "absolute",
    left: 0,
  },
  headerTitle: {
    fontWeight: "600",
    fontSize: 32,
  },
  textInput: {
    height: 50,
    borderBlockColor: "black",
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
    borderBlockColor: "black",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    fontWeight: "600",
    fontSize: 18,
  },
  radioButtonBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  radioButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownBox: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownText: {
    padding: 12,
    fontSize: 16,
  },
  dropdown: {
    padding: 12,
    width: "70%",
  },
});

export default NewIncomePage;
