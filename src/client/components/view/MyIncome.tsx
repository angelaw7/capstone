import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import BackArrow from "../../assets/icons/BackArrow";
import AddIcon from "../../assets/icons/AddIcon";
import HorizontalRule from "../common/HorizontalRule";
import EntrySource from "../common/EntrySource";
import { NavigationProps } from "../../types";

interface MyIncomeProps {
  navigation: NavigationProps;
}

const MyIncome = ({ navigation }: MyIncomeProps) => {
  const returnHandler = () => {
    navigation.navigate("Overview");
  };

  const addNewIncomeHandler = () => {
    navigation.navigate("NewIncome");
  };

  return (
    <View style={styles.background}>
      <View style={styles.headerBox}>
        <Pressable style={styles.backIcon} onPress={returnHandler}>
          <BackArrow size={35} />
        </Pressable>
        <Text style={styles.title}>My Income</Text>
        <Pressable style={styles.addIcon} onPress={addNewIncomeHandler}>
          <AddIcon size={35} />
        </Pressable>
      </View>

      <View>
        <View style={styles.recurring}>
          <Text style={styles.sectionTitle}>Recurring</Text>
          <HorizontalRule />

          <EntrySource description="$40 - Biweekly" additionalInfo="Tutoring" />
          <HorizontalRule />
        </View>

        <View>
          <Text style={styles.sectionTitle}>History</Text>
          <HorizontalRule />

          <EntrySource
            description="$40 (recurring)"
            additionalInfo={"Tutoring \nNov 11, 2024"}
          />
          <HorizontalRule />

          <EntrySource
            description="$100"
            additionalInfo={"Raffle \nNov 6, 2024"}
          />
          <HorizontalRule />
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

export default MyIncome;
