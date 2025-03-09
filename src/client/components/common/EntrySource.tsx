import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface EntrySourceProps {
  description: string;
  additionalInfo: string;
}

const EntrySource = ({ description, additionalInfo }: EntrySourceProps) => {
  return (
    <View style={styles.box}>
      <View style={styles.textBox}>
        <Text style={[styles.text, { width: "65%" }]}>{description}</Text>
        <Text style={[styles.text, { width: "35%", textAlign: "center" }]}>
          {additionalInfo}
        </Text>
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
    width: "100%",
    height: 50,
    marginLeft: 5,
  },
  text: {
    fontSize: 18,
  },
});

export default EntrySource;
