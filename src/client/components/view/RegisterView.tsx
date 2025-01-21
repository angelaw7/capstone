import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import { commonStyles, DEFAULT_COLOURS } from "../../styles/commonStyles";
import { Button, Text } from "tamagui";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  validatePassword,
} from "firebase/auth";

const RegisterView = ({ navigation, route }) => {
  const [email, setEmail] = useState(
    route.params?.email ? route.params?.email : "",
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [registerErrorMessage, setRegisterErrorMessage] = useState("");

  const createAccountHandler = async () => {
    try {
      if (password !== confirmPassword) {
        const error = new Error("Passwords do not match.");
        error.code = "password-mismatch";
        throw error;
      }
      const status = await validatePassword(auth, password);

      /* We can choose to conditionally render which of the password criteria we show with these validation checks,
	  or we can just show all YOLO lol */
      const {
        containsLowercaseLetter,
        containsUppercaseLetter,
        containsNonAlphanumericCharacter,
        meetsMinPasswordLength,
        // isValid,
      } = status;

      const user = await createUserWithEmailAndPassword(auth, email, password);
      setRegisterErrorMessage("");
      navigation.reset({
        index: 0,
        /* Probably link a name attribute eventually */
        routes: [
          {
            name: "Onboarding",
            params: {
              email: email,
            },
          },
        ],
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      /* Enum-ify this type later along with the error codes for login auth */
      switch (errorCode) {
        case "auth/invalid-email":
          setRegisterErrorMessage("Email is invalid.");
          break;
        case "auth/email-already-in-use":
          setRegisterErrorMessage(
            "There already exists an account with this email.",
          );
          break;
        case "auth/missing-password":
          setRegisterErrorMessage("Password is missing.");
          break;
        case "auth/password-does-not-meet-requirements":
          setRegisterErrorMessage("Password requirements not met.");
          break;
        case "password-mismatch":
          setRegisterErrorMessage(errorMessage);
          break;
        default:
          setRegisterErrorMessage(
            "An error occurred while signing up. Please try again later.",
          );
          break;
      }
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>{"Sign Up for Plutos"}</Text>
      <View style={styles.registerContainer}>
        <TextInput
          placeholder="Email"
          style={commonStyles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
        <TextInput
          placeholder="Enter Password"
          style={commonStyles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
        <TextInput
          placeholder="Confirm Password"
          style={commonStyles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
        {/* Note: Checked the length instead of just using the 'registerErrorMessage' boolean condition since when the component
		compiles, it will be treated as plain text and React Native complains if you put plain text in a View node without a Text
		Node. Doing registerErrorMessage.length && <Text>some text lol</Text> will cause errors
		*/}
        {registerErrorMessage.length !== 0 && (
          <Text style={{ color: "red" }}>{registerErrorMessage}</Text>
        )}

        {/* We can change this up later with a checkbox or like an eye icon */}
        <Pressable
          style={styles.showPassword}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={{ display: "flex", alignItems: "center" }}>
            {showPassword ? "Hide" : "Show"} Password
          </Text>
        </Pressable>
      </View>

      {/* conditionally render this block if user's password doesn't meet firebase password criteria or smth */}
      <View>
        <Text style={styles.passwordCriteriaText}>Password Criteria</Text>
        <View>
          <Text style={styles.passwordCriteria}>Minimum 8 characters</Text>
          <Text style={styles.passwordCriteria}>One lowercase character</Text>
          <Text style={styles.passwordCriteria}>One uppercase character</Text>
          <Text style={styles.passwordCriteria}>
            One special Character [!,@,#,$,%,..]
          </Text>
        </View>
      </View>

      <View style={styles.createPasswordBox}>
        <Button
          backgroundColor={DEFAULT_COLOURS.primary}
          marginTop={20}
          paddingHorizontal="20%"
          onPress={createAccountHandler}
        >
          <Text fontWeight="500" color="white">
            Continue
          </Text>
        </Button>
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
      </View>
      <Pressable
        style={{ margin: "1rem" }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={{ textDecorationLine: "underline", color: "green" }}>
          {"Already have an account? Log in!"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    marginTop: 15,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    marginLeft: 50,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    width: "80%",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  alternateSignInContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    justifyContent: "flex-start",
    marginTop: 5,
    marginBottom: 5,
  },
  createPasswordBox: {
    width: "60%",
    height: "2rem",
    textAlign: "center",
    fontSize: 20,
    margin: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  passwordCriteriaText: {
    fontSize: 20,
    color: "red",
    margin: "1rem",
  },
  passwordCriteria: {
    margin: 0,
    color: "red",
  },
  showPassword: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default RegisterView;
