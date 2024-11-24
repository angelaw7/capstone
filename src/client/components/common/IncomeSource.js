import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RightArrow from "../../assets/icons/RightArrow";

const IncomeSource = ({ incomeTitle, additionalInfo }) => {
  return (
    <View style={styles.box}>
      <View style={styles.textBox}>
        <Text style={[styles.text, { width: "65%" }]}>{incomeTitle}</Text>
        <Text style={[styles.text, { width: "35%", textAlign: "center" }]}>
          {additionalInfo}
        </Text>
      </View>
      <View style={styles.rightArrow}>
        <RightArrow />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    marginVertical: 8,
  },
  textBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
    height: 50,
  },
  rightArrow: {
    position: "absolute",
    right: 0,
  },
  text: {
    fontSize: 18,
  },
});

export default IncomeSource;
