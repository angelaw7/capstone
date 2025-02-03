import React, { useEffect, useState } from "react";
import { View, Text } from "tamagui";
import { Dimensions, StyleSheet } from "react-native";

import BudgetBox from "../common/BudgetBox";
import SpendingDetails from "../common/SpendingDetails";
import { NavigationProps, RouteProps } from "../../types";
import { getAuth } from "firebase/auth";
import { nameCase } from "../../utils";
import ManageUserService from "../../services/managerUserService";

type HomePageProps = {
  navigation: NavigationProps;
  route: RouteProps;
};

const HomePage = ({ navigation, route }: HomePageProps) => {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const curAuth = getAuth();
      const userEmail = curAuth.currentUser!.email;
      const response = await ManageUserService.getUser(userEmail);

      const firstName = response[0].first_name;
      const middleName = response[0].middle_name;
      const lastName = response[0].last_name;

      const fullName = nameCase(
        `${firstName}${middleName ? ` ${middleName} ` : " "}${lastName}`,
      );

      setFullName(fullName);
    };

    fetchData();
  }, []);

  return (
    <View alignItems="center" style={styles.background}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome Back {fullName}</Text>
      </View>
      <View style={styles.homepage}>
        <BudgetBox navigation={navigation} route={route} />
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
