import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const AddCategoryBudgetModal = ({
  visible,
  modalHandler,
  currency,
  updateCategoryHandler,
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [amount, setAmount] = useState("");

  const [validField, setValidField] = useState(false);

  const closeModalHandler = () => {
    modalHandler(false);
  };

  useEffect(() => {
    setValidField(amount && categoryName);
  }, [categoryName, amount]);

  const submitHandler = () => {
    const newCategory = {
      category: categoryName,
      amount: amount,
    };

    updateCategoryHandler(newCategory);
    setCategoryName("");
    setAmount("");
    closeModalHandler();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalBox}>
        <View style={styles.modalView}>
          <Text style={styles.title}>New Category</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Category Name"
            value={categoryName}
            onChangeText={setCategoryName}
          ></TextInput>
          <TextInput
            style={styles.textInput}
            placeholder={`Amount (${currency})`}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          ></TextInput>
          <View style={styles.buttonsContainer}>
            <Pressable
              onPress={closeModalHandler}
              style={[styles.button, { backgroundColor: "#ff9179" }]}
            >
              <Text>Cancel</Text>
            </Pressable>
            <Pressable
              style={[
                styles.button,
                { backgroundColor: !validField ? "#D3D3D3" : "#7bff79" },
              ]}
              onPress={validField ? submitHandler : null}
            >
              <Text>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    height: "30%",
    width: "70%",
    margin: 48,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 24,
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 12,
    padding: 12,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: "30%",
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddCategoryBudgetModal;
