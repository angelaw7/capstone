import React, { useEffect, useState } from "react";
import { View, Text } from "tamagui";
import { ActivityIndicator, Dimensions, StyleSheet } from "react-native";

import HomePageMetricsBox from "../common/HomePageMetricsBox";
import SpendingDetails from "../common/SpendingDetails";
import { NavigationProps, RouteProps } from "../../types";
import { nameCase } from "../../utils";
import { useUser } from "../../contexts/UserContext";

type HomePageProps = {
  navigation: NavigationProps;
  route: RouteProps;
};

const HomePage = ({ navigation, route }: HomePageProps) => {
  const { user } = useUser();
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const fName = user?.first_name;
    const mName = user?.middle_name;
    const lName = user?.last_name;

    const fullName = nameCase(`${fName}${mName ? ` ${mName} ` : " "}${lName}`);

    setFullName(fullName);
  }, [user]);

  if (!user) return <ActivityIndicator size="large" />;

  return (
    <View alignItems="center" style={styles.background}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome Back {fullName}</Text>
      </View>
      <View style={styles.homepage}>
        <HomePageMetricsBox navigation={navigation} route={route} />
        <SpendingDetails />
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
    height: height * 0.17,
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

export default HomePage;
