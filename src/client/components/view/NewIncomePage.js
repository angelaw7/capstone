import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { RadioButton } from "react-native-paper";
import BackArrow from "../../assets/icons/BackArrow";

import { Dropdown } from "react-native-element-dropdown";

const dropdownData = [
  { label: "Daily", value: 1 },
  { label: "Weekly", value: 2 },
  { label: "Bi-Weekly", value: 3 },
  { label: "Monthly", value: 4 },
  { label: "Quarterly", value: 5 },
  { label: "Bi-annually", value: 6 },
  { label: "Annually", value: 7 },
];

const NewIncomePage = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [checked, setChecked] = React.useState("once");
  const [dropdownValue, setDropdownValue] = useState(1);

  const dropdownChangeHandler = (item) => {
    setDropdownValue(item.value);
  };

  const returnHandler = () => {
    navigation.goBack();
  };

  const addIncomeHandler = () => {
    // Handle some logic to update state
    returnHandler();
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
              label="How often?"
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
