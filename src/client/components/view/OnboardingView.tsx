import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import BackArrow from "../../assets/icons/BackArrow";
import { DEFAULT_COLOURS } from "../../styles/commonStyles";
import HorizontalRule from "../common/HorizontalRule";
import { Button, Checkbox, Label } from "tamagui";
import CheckMark from "../../assets/icons/CheckMark";
import { useState } from "react";
import { NavigationProps, RouteProps } from "../../types";
import { Dropdown } from "react-native-element-dropdown";

interface OnboardingViewProps {
  navigation: NavigationProps;
  route: RouteProps;
}

const sexData = [{ sex: "Male" }, { sex: "Female" }];

const occupationData = [
  { occupation: "Software Engineer" },
  { occupation: "Graphic Designer" },
  { occupation: "Product Manager" },
  { occupation: "Data Scientist" },
  { occupation: "Teacher" },
  { occupation: "Nurse" },
  { occupation: "Accountant" },
  { occupation: "Marketing Specialist" },
  { occupation: "Web Developer" },
  { occupation: "Sales Manager" },
  { occupation: "Project Manager" },
  { occupation: "HR Specialist" },
  { occupation: "Construction Worker" },
  { occupation: "Financial Analyst" },
  { occupation: "Chef" },
  { occupation: "Customer Support Representative" },
  { occupation: "Photographer" },
  { occupation: "Consultant" },
  { occupation: "Lawyer" },
  { occupation: "Civil Engineer" },
  { occupation: "Unemployed AF" },
];

const OnboardingView = ({ navigation, route }: OnboardingViewProps) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [keepLogin, setKeepLogin] = useState(false);

  const createAccountHandler = () => {
    // TODO: add user to db

    // Redirect user to overview page if user account is successful, else show error or smth idk
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "Overview",
          params: {
            name: `${firstName} ${lastName}`,
          },
        },
      ],
    });
  };

  return (
    <View style={styles.onboardingBox}>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Please Enter Your Information</Text>
      </View>
      <View style={styles.nameBox}>
        <TextInput
          placeholder="First Name"
          style={styles.textInput}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Middle Name"
          style={styles.textInput}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
          value={middleName}
          onChangeText={setMiddleName}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.textInput}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <HorizontalRule />

      {/* Replace these with the corresponding dropdowns later */}
      <View style={styles.demographicDataBox}>
        <Dropdown
          style={styles.textInput}
          data={sexData}
          labelField="sex"
          valueField="sex"
          placeholder="Sex/Gender"
          placeholderStyle={{ fontSize: 14 }}
          selectedTextStyle={{ fontSize: 14 }}
          onChange={({ sex }) => setSex(sex)}
          itemTextStyle={{ fontSize: 14 }}
          iconColor="black"
        />
        <TextInput
          placeholder="Date of Birth"
          style={styles.textInput}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
          value={dob}
          onChangeText={setDob}
        />
        <Dropdown
          style={styles.textInput}
          data={occupationData}
          labelField="occupation"
          valueField="occupation"
          placeholder="Occupation/Industry"
          placeholderStyle={{ fontSize: 14 }}
          selectedTextStyle={{ fontSize: 14 }}
          onChange={({ occupation }) => setOccupation(occupation)}
          itemTextStyle={{ fontSize: 14 }}
          iconColor="black"
          search
        />
      </View>

      <View style={styles.checkBox}>
        <Checkbox
          marginRight={12}
          id="check"
          checked={keepLogin}
          onCheckedChange={() => setKeepLogin(!keepLogin)}
        >
          <Checkbox.Indicator>
            <CheckMark size={20} />
          </Checkbox.Indicator>
        </Checkbox>
        <Label size={10} htmlFor="check">
          Stay signed in on this device
        </Label>
      </View>

      <Button
        backgroundColor={DEFAULT_COLOURS.primary}
        width={"60%"}
        marginTop={20}
        marginHorizontal={"auto"}
        onPress={createAccountHandler}
      >
        <Text>Create Account</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingBox: {
    height: "100%",
    backgroundColor: "white",
    display: "flex",
  },
  headerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
    margin: 12,
    position: "relative",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
  },
  backArrow: {
    position: "absolute",
    left: 12,
  },
  textInput: {
    width: "60%",
    backgroundColor: "#EDEDED",
    height: 40,
    padding: 14,
    borderRadius: 10,
  },
  nameBox: {
    display: "flex",
    alignItems: "center",
    rowGap: 16,
    marginBottom: 12,
  },
  hRule: {
    margin: 12,
  },
  demographicDataBox: {
    display: "flex",
    alignItems: "center",
    rowGap: 16,
    marginVertical: 12,
  },
  checkBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
  },
});

export default OnboardingView;
