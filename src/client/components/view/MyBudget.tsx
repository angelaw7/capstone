import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import BackArrow from "../../assets/icons/BackArrow";
import AddIcon from "../../assets/icons/AddIcon";
import HorizontalRule from "../common/HorizontalRule";
import EntrySource from "../common/EntrySource";
import { NavigationProps } from "../../types";

interface MyBudgetProps {
  navigation: NavigationProps;
}

const MyBudget = ({ navigation }: MyBudgetProps) => {
  const returnHandler = () => {
    navigation.navigate("Manage");
  };

  const addNewBudgetHandler = () => {
    navigation.navigate("NewBudget");
  };

  return (
    <View style={styles.background}>
      <View style={styles.headerBox}>
        <Pressable style={styles.backIcon} onPress={returnHandler}>
          <BackArrow size={35} />
        </Pressable>
        <Text style={styles.title}>My Budget</Text>
        <Pressable style={styles.addIcon} onPress={addNewBudgetHandler}>
          <AddIcon size={35} />
        </Pressable>
      </View>

      <View>
        <View style={styles.recurring}>
          <Text style={styles.sectionTitle}>Current</Text>
          <HorizontalRule />

          <EntrySource description="November General" additionalInfo="$1,200" />
        </View>

        <View style={styles.recurring}>
          <Text style={styles.sectionTitle}>Future</Text>
          <HorizontalRule />

          <EntrySource description="December General" additionalInfo="$1,500" />
        </View>

        <View>
          <Text style={styles.sectionTitle}>History</Text>
          <HorizontalRule />

          <EntrySource description="October General" additionalInfo="$1,200" />
        </View>
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
  addIcon: {
    position: "absolute",
    right: 24,
  },
  sectionTitle: {
    fontSize: 20,
  },
  recurring: {
    marginBottom: 24,
  },
});

export default MyBudget;
