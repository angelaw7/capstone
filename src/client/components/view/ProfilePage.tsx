import React, { useEffect, useState } from "react";
import { View, Text, Button } from "tamagui";
import { Dimensions, StyleSheet } from "react-native";

import ProfileIcon from "../../assets/icons/ProfileIcon";
import ManageUserService from "../../services/managerUserService";
import { DEFAULT_COLOURS } from "../../styles/commonStyles";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { NavigationProps } from "../../types";

type User = {
  first_name: string;
  middle_name?: string;
  last_name: string;
  dob: string;
  email: string;
  occupation: string;
  sex: "male" | "female";
  userid: number;
};

interface ProfilePageProps {
  navigation: NavigationProps;
}

const ProfilePage = ({ navigation }: ProfilePageProps) => {
  const [userData, setUserData] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      /* Find this email from auth state */
      try {
        const response = await ManageUserService.getUser(
          "ericc.sune@gmail.com",
        );
        setUserData(response[0]);
      } catch (e: any) {
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  if (loading) return <Text>Loading...</Text>;

  const nameCase = (name: string) => {
    return name
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");
  };

  const { dob, email, sex, occupation } = userData as User;

  const firstName = userData!.first_name;
  const middleName = userData!.middle_name;
  const lastName = userData!.last_name;

  const fullName = nameCase(
    `${firstName}${middleName ? ` ${middleName} ` : " "}${lastName}`,
  );

  return (
    <View alignItems="center" style={styles.background}>
      <View style={styles.headerContainer}>
        <ProfileIcon size={100} style={{ alignSelf: "center" }} />
        <Text style={styles.title}>{fullName}</Text>
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
