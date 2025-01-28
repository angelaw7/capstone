import React from "react";
import { View, Text } from "tamagui";
import { Dimensions, StyleSheet } from "react-native";

import ProfileIcon from "../../assets/icons/ProfileIcon";

const ProfilePage = () => {
  /* TODO: Should store user name in state somewhere especially if we navigate back
  from the expense/income/budget page lool */
  // const username = route.params?.name;

  return (
    <View alignItems="center" style={styles.background}>
      <View style={styles.headerContainer}>
        <ProfileIcon size={50} style={{ alignSelf: "center" }} />
        <Text style={styles.title}>"USER"</Text>
      </View>
      <View style={styles.homepage}>
        <Text>Profile stuff</Text>
      </View>
    </View>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#9E599A",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: height * 0.25,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  background: {
    backgroundColor: "white",
    height: "100%",
    display: "flex",
  },
  homepage: {
    width: "100%",
    height: "100%",
    padding: 24,
    display: "flex",
    rowGap: 24,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
});

export default ProfilePage;
