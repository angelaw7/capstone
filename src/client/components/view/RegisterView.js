import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { commonStyles, DEFAULT_COLOURS } from "../../styles/commonStyles";
import { Button, Text } from "tamagui";
import { TouchableOpacity } from "react-native-gesture-handler";

const RegisterView = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

        {/* We can change this up later with a checkbox or like an eye icon */}
        <TouchableOpacity
          style={styles.showPassword}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={{ display: "flex", alignItems: "center" }}>
            {showPassword ? "Hide" : "Show"} Password
          </Text>
        </TouchableOpacity>
      </View>

      {/* conditionally render this block if user's password doesn't meet firebase password criteria or smth */}
      <View>
        <Text style={styles.passwordCriteriaText}>Password Criteria</Text>
        <View>
          <ul>
            <li style={styles.passwordCriteria}>Minimum 8 characters</li>
            <li style={styles.passwordCriteria}>One lowercase character</li>
            <li style={styles.passwordCriteria}>One uppercase character</li>
            <li style={styles.passwordCriteria}>
              One special Character [!,@,#,$,%,..]
            </li>
          </ul>
        </View>
      </View>

      <View style={styles.createPasswordBox}>
        <Button
          backgroundColor={DEFAULT_COLOURS.primary}
          marginTop={20}
          paddingHorizontal="20%"
        >
          <Text fontWeight="500" color="white">
            Continue
          </Text>
        </Button>
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
      </View>
      <TouchableOpacity
        style={{ margin: "1rem" }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={{ textDecorationLine: "underline", color: "green" }}>
          {"Already have an account? Log in!"}
        </Text>
      </TouchableOpacity>
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
