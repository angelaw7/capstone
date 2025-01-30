import React, { useState } from "react";
import { Button, Modal, Text, TextInput, StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

interface AddExpenseModalProps {
  visible: boolean;
  onClose: VoidFunction;
  onSave: (...args: any[]) => void;
}

const AddExpenseModal = ({
  visible,
  onClose,
  onSave,
}: AddExpenseModalProps) => {
  const [category, setCategory] = useState("Groceries");
  const [rawName, setRawName] = useState("");
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSave = () => {
    const id = uuidv4();
    const newItem = {
      id: id,
      category,
      rawName,
      name,
      cost,
    };
    onSave(newItem);
    onClose();
    setRawName("");
    setName("");
    setCost("");
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Item</Text>

          <Text>Category:</Text>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Groceries" value="Groceries" />
            <Picker.Item label="Cleaning" value="Cleaning" />
            <Picker.Item label="Clothes" value="Clothes" />
            <Picker.Item label="Misc" value="Misc" />
          </Picker>

          <Text>Raw Name:</Text>
          <TextInput
            style={styles.input}
            value={rawName}
            onChangeText={setRawName}
          />

          <Text>Name:</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text>Cost:</Text>
          <TextInput style={styles.input} value={cost} onChangeText={setCost} />

          <View style={styles.modalButtons}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Save" onPress={handleSave} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default AddExpenseModal;
