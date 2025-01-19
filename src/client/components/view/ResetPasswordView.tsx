import { useState } from "react";
import { StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import { DEFAULT_COLOURS } from "../../styles/commonStyles";
import { Button } from "tamagui";

const ResetPasswordView = () => {
  const [email, setEmail] = useState("");

  const resetPasswordHandler = () => {
    /* Some logic to send out the email reset password link */

    /* Also perform some sort of validation on the email */
    console.log(email);
  };

  return (
    <View style={styles.mainBox}>
      <View style={styles.resetPasswordBox}>
        <Text style={styles.resetPasswordText}>Reset your password</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email address"
          style={styles.inputTextBox}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
          value={email}
          onChangeText={setEmail}
        />
        <Button
          onPress={resetPasswordHandler}
          backgroundColor={DEFAULT_COLOURS.primary}
          margin={12}
        >
          <Text style={styles.resetPasswordButtonText}>Reset Password</Text>
        </Button>
        <View style={styles.resend}>
          <Text>Did not receive an email?</Text>
          <Pressable style={{ textDecorationLine: "underline" }}>
            <Text>Resend</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: "white",
    height: "100%",
  },
  resetPasswordBox: {
    width: "100%",
    height: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  resetPasswordText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  inputTextBox: {
    height: "5%",
    width: "60%",
    borderRadius: 10,
    backgroundColor: "#EDEDED",
    padding: 12,
  },
  resetPasswordButtonText: {
    color: "white",
    fontSize: 16,
  },
  resend: {
    display: "flex",
    flexDirection: "row",
    columnGap: 8,
  },
});

export default ResetPasswordView;
