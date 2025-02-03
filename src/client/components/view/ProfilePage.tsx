import React, { useEffect, useState } from "react";
import { View, Text, Button } from "tamagui";
import { Dimensions, StyleSheet } from "react-native";

import ProfileIcon from "../../assets/icons/ProfileIcon";
import { DEFAULT_COLOURS } from "../../styles/commonStyles";

import { signOut, getAuth } from "firebase/auth";
import { auth } from "../../firebase";
import { NavigationProps } from "../../types";
import { nameCase } from "../../utils";
import { useUser, User } from "../../contexts/UserContext";

interface ProfilePageProps {
  navigation: NavigationProps;
}

const ProfilePage = ({ navigation }: ProfilePageProps) => {
  const { user } = useUser();
  const [name, setName] = useState("");

  useEffect(() => {
    const fName = user!.first_name;
    const mName = user!.middle_name;
    const lName = user!.last_name;

    const fullName = nameCase(`${fName}${mName ? ` ${mName} ` : " "}${lName}`);
    setName(fullName);
  }, []);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (e: any) {
      console.error("There was an error logging you out", e.message);
    }
  };

  const { dob, email, sex, occupation } = user as User;

  return (
    <View alignItems="center" style={styles.background}>
      <View style={styles.headerContainer}>
        <ProfileIcon size={100} style={{ alignSelf: "center" }} />
        <Text style={styles.title}>{name}</Text>
      </View>

      <View style={styles.homepage}>
        <View style={styles.entry}>
          <Text style={styles.field}>Email:</Text>
          <Text style={styles.fieldValue}>{email}</Text>
        </View>
        <View style={styles.entry}>
          <Text style={styles.field}>Date of Birth:</Text>
          <Text style={styles.fieldValue}>{dob.split("T")[0]}</Text>
        </View>
        <View style={styles.entry}>
          <Text style={styles.field}>Occupation:</Text>
          <Text style={styles.fieldValue}>{occupation}</Text>
        </View>
        <View style={styles.entry}>
          <Text style={styles.field}>Sex:</Text>
          <Text style={styles.fieldValue}>{sex.toUpperCase()}</Text>
        </View>
      </View>

      <View style={styles.manageAccountButtons}>
        <Button
          backgroundColor={"red"}
          paddingHorizontal="20%"
          onPress={() => {}}
        >
          <Text fontWeight="500" color="white">
            Delete Account
          </Text>
        </Button>
        <Button
          backgroundColor={DEFAULT_COLOURS.primary}
          paddingHorizontal="20%"
          onPress={handleLogOut}
        >
          <Text fontWeight="500" color="white">
            Log Out
          </Text>
        </Button>
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
    height: "50%",
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
  entry: {
    display: "flex",
    flexDirection: "row",
    columnGap: 24,
    width: "100%",
  },
  field: {
    width: "30%",
    fontWeight: 700,
    fontSize: 16,
  },
  fieldValue: {
    fontSize: 16,
    width: "70%",
  },
  manageAccountButtons: {
    margin: 12,
    display: "flex",
    justifyContent: "center",
    // flexDirection: "row",
    rowGap: 12,
    width: "75%",
  },
});

export default ProfilePage;
