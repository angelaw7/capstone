import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import BackArrow from "../../assets/icons/BackArrow";
import Slider from "@react-native-community/slider";
import { Dropdown } from "react-native-element-dropdown";
import AddCategoryBudgetModal from "./AddCategoryBudgetModal";

const currencies = [
  { label: "$", value: "$" },
  { label: "€", value: "€" },
  { label: "£", value: "£" },
  { label: "¥", value: "¥" },
  { label: "₹", value: "₹" },
  { label: "₩", value: "₩" },
];

const NewBudgetPage = ({ navigation }) => {
  const [alertValue, setAlertValue] = useState(0);
  const [currency, setCurrency] = useState("$");
  const [openModal, setOpenModal] = useState(false);

  const [categories, setCategories] = useState([
    { category: "Food", amount: 0.0 },
    { category: "Leisure", amount: 0.0 },
    { category: "Shopping", amount: 0.0 },
    { category: "Misc", amount: 0.0 },
  ]);

  const updateCategoryHandler = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const categoryUpdateHandler = (category, newValue) => {
    const newCategory = categories.map((entry) => {
      return entry.category === category
        ? { category: category, amount: newValue }
        : entry;
    });
    setCategories(newCategory);
  };

  const dropdownChangeHandler = (item) => {
    setCurrency(item.value);
  };

  const returnHandler = () => {
    // To-Do
    navigation.navigate("MyBudget");
  };

  const addBudgetHandler = () => {
    // To-Do
    // Handle some logic to update state
    returnHandler();
  };

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Pressable style={styles.backArrow} onPress={returnHandler}>
          <BackArrow size={35} />
        </Pressable>
        <Text style={styles.headerTitle}>New Budget</Text>
      </View>
      <View style={styles.contentBox}>
        <View style={styles.entryBox}>
          <Text>Set budget for:</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={styles.entryBox}>
          <Text>Projected Income:</Text>
          <Text>{currency}2,492.11</Text>
        </View>
        <View style={styles.entryBox}>
          <Text>Total Budget:</Text>

          <View style={styles.totalBudgetValueBox}>
            <View style={styles.currency}>
              <Dropdown
                data={currencies}
                labelField="label"
                valueField="value"
                style={styles.dropdown}
                value={currency}
                onChange={(item) => dropdownChangeHandler(item)}
              />
            </View>
            <TextInput
              style={[
                styles.textInput,
                {
                  width: "80%",
                  border: "none",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                },
              ]}
            ></TextInput>
          </View>
        </View>
        <View style={styles.setLimitBox}>
          <View style={styles.limitForBox}>
            <Text>Set Limit for:</Text>
          </View>
          <View style={styles.limitsValueBox}>
            {categories.map((entry, index) => {
              return (
                /* key can be an uuid or something idk lol */
                <View style={styles.entryBox} key={index}>
                  <Text>{entry.category}</Text>
                  <View style={styles.categoryCurrency}>
                    <View style={styles.currencyText}>
                      <Text>{currency}</Text>
                    </View>
                    <TextInput
                      keyboardType="numeric"
                      placeholder={entry.amount}
                      style={[
                        styles.textInput,
                        { width: "40%", textAlign: "right" },
                      ]}
                      value={entry.value}
                      onChangeText={(newValue) =>
                        categoryUpdateHandler(entry.category, newValue)
                      }
                    ></TextInput>
                  </View>
                </View>
              );
            })}
            <AddCategoryBudgetModal
              visible={openModal}
              modalHandler={setOpenModal}
              currency={currency}
              updateCategoryHandler={updateCategoryHandler}
            />
            <Pressable
              style={styles.addBudget}
              onPress={() => setOpenModal(true)}
            >
              <Text>+ Add</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.alertTextBox}>Send Alert At: {alertValue}%</Text>
        <Slider
          style={{ height: 40, marginVertical: -20 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
          step={1}
          value={alertValue}
          onValueChange={setAlertValue}
        />
        <View style={styles.sliderLabels}>
          <Text style={styles.sliderLabel}>0%</Text>
          <Text style={styles.sliderLabel}>50%</Text>
          <Text style={styles.sliderLabel}>100%</Text>
        </View>
      </View>
      <Pressable style={styles.addNewBudget} onPress={addBudgetHandler}>
        <Text>+ Add Budget</Text>
      </Pressable>
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
  contentBox: {
    display: "flex",
    rowGap: 16,
  },
  entryBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
  },
  setLimitBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  limitsValueBox: {
    rowGap: 12,
  },
  addBudget: {
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    width: "30%",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  limitForBox: {
    marginTop: 9,
  },
  totalBudgetValueBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "black",
    maxWidth: 177,
  },
  currency: {
    padding: 8,
    width: "35%",
    textAlign: "center",
    borderRightColor: "black",
    borderRightWidth: 1,
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "104.5%",
  },
  sliderLabel: {
    fontSize: 14,
    color: "#333",
  },
  alertTextBox: {
    textAlign: "center",
    fontSize: 16,
  },
  addNewBudget: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
    width: "40%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#C6FFC9",
  },
  dropdown: {
    width: "100%",
  },
  categoryCurrency: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  currencyText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});

export default NewBudgetPage;
