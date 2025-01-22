import { useState } from "react";
import { StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import { DEFAULT_COLOURS } from "../../styles/commonStyles";
import { Button } from "tamagui";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import BackArrow from "../../assets/icons/BackArrow";
import { NavigationProps } from "../../types";

interface ResetPasswordViewProps {
  navigation: NavigationProps;
}

const ResetPasswordView = ({ navigation }: ResetPasswordViewProps) => {
  const [email, setEmail] = useState("");
  const [sentEmail, setSentEmail] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const resetPasswordHandler = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSentEmail(true);
      setErrMessage("");
    } catch (err) {
      const errCode = err.code;
      const errMessage = err.message;

      setSentEmail(false);
      switch (errCode) {
        case "auth/missing-email":
          setErrMessage(
            "You must enter an email address in order to continue.",
          );
          break;
        case "auth/invalid-email":
          setErrMessage("The email address entered is invalid.");
          break;
        default:
          setErrMessage("An error has occurred. Please try again later.");
          break;
      }
    }
  };

  const returnHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.mainBox}>
      <View style={styles.resetPasswordBox}>
        <Pressable style={styles.backArrow} onPress={returnHandler}>
          <BackArrow size={25} />
        </Pressable>
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
        {sentEmail && (
          <Text style={{ width: "50%", margin: 12, color: "red" }}>
            If the email is associated with an account, a reset link will have
            been sent.
          </Text>
        )}
        {errMessage.length !== 0 && (
          <Text style={{ width: "50%", margin: 12, color: "red" }}>
            {errMessage}
          </Text>
        )}
        <Button
          onPress={resetPasswordHandler}
          backgroundColor={DEFAULT_COLOURS.primary}
          margin={12}
        >
          <Text style={styles.resetPasswordButtonText}>Reset Password</Text>
        </Button>
        <View style={styles.resend}>
          <Text>Did not receive an email?</Text>
          <Pressable>
            <Text style={{ textDecorationLine: "underline" }}>Resend</Text>
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
    position: "relative",
    width: "100%",
    height: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  backArrow: {
    position: "absolute",
    left: 20,
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
