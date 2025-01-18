import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const DisplayExpenseItems = ({ items, onExpenseDelete }) => {
  if (items.length === 0) {
    return <Text style={styles.emptyText}>No items added yet!</Text>;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemCard}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemCategory}>{item.category}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onExpenseDelete(item.id)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.itemText}>Name: {item.name}</Text>
          <Text style={styles.itemText}>Raw Name: {item.rawName}</Text>
          <Text style={styles.itemText}>Cost: ${item.cost}</Text>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemCategory: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: "#fff",
    fontSize: 14,
  },
  itemText: {
    marginTop: 5,
    fontSize: 16,
    color: "#555",
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});

export default DisplayExpenseItems;
