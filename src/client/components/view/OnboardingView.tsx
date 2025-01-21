import { StyleSheet, Text, TextInput, View } from "react-native";
import BackArrow from "../../assets/icons/BackArrow";
import { DEFAULT_COLOURS } from "../../styles/commonStyles";
import HorizontalRule from "../common/HorizontalRule";
import { Button, Checkbox, Label } from "tamagui";
import CheckMark from "../../assets/icons/CheckMark";

const OnboardingView = () => {
  return (
    <View style={styles.onboardingBox}>
      <View style={styles.headerBox}>
        <BackArrow size={20} style={styles.backArrow} />
        <Text style={styles.headerText}>Please Enter Your Information</Text>
      </View>
      <View style={styles.nameBox}>
        <TextInput
          placeholder="First Name"
          style={styles.textInput}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
        <TextInput
          placeholder="Middle Name"
          style={styles.textInput}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.textInput}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
      </View>

      <HorizontalRule />

      {/* Replace these with the corresponding dropdowns later */}
      <View style={styles.demographicDataBox}>
        <TextInput
          placeholder="Sex/Gender"
          style={styles.textInput}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
        <TextInput
          placeholder="Date of Birth"
          style={styles.textInput}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
        <TextInput
          placeholder="Occupation/Industry"
          style={styles.textInput}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
      </View>

      <View style={styles.checkBox}>
        <Checkbox marginRight={12} id="check">
          <Checkbox.Indicator>
            <CheckMark size={20} />
          </Checkbox.Indicator>
        </Checkbox>
        <Label size={10} htmlFor="check">
          Enable Notifications
        </Label>
      </View>

      <Button
        backgroundColor={DEFAULT_COLOURS.primary}
        width={"60%"}
        marginTop={20}
        marginHorizontal={"auto"}
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
