import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RightArrow from "../../assets/icons/RightArrow";
import GroupIcon from "../../assets/icons/GroupIcon";

const EntrySource = ({ incomeTitle, additionalInfo, group }) => {
  return (
    <View style={styles.box}>
      <View style={styles.textBox}>
        {group ? (
          <View style={styles.group}>
            <Text style={[styles.text]}>{incomeTitle}</Text>
            <View style={styles.groupIcon}>
              <GroupIcon size={30} />
            </View>
          </View>
        ) : (
          <Text style={[styles.text, { width: "65%" }]}>{incomeTitle}</Text>
        )}
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
  group: {
    width: "65%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  groupIcon: { marginLeft: 8 },
});

export default EntrySource;
