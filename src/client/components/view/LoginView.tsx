import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { commonStyles, DEFAULT_COLOURS } from "../../styles/commonStyles";
import { Button, Text } from "tamagui";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import MicrosoftIcon from "../../assets/icons/MicrosoftIcon";
import AppleIcon from "../../assets/icons/AppleIcon";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { NavigationProps } from "../../types";
import { supabase } from "../../supabase";

interface LoginViewProps {
  navigation: NavigationProps;
}

const LoginView = ({ navigation }: LoginViewProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentialError, setCredentialError] = useState("");

  const testClick = async () => {
    // Can enable RLS once I set up auth table to connect as primary/foreign key constraint
    const { data, error, status } = await supabase
      .from("users")
      .select("first_name", "last_name");
    //   .eq("userid", 2);

    console.log(data, status);

    if (error && status !== 406) {
      console.error(error);
    }
  };

  // we can also do other login options like signing in with popup or redirect
  const loginWithEmailPassword = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, username, password);
      navigation.reset({
        index: 0,
        routes: [{ name: "Overview", params: { name: username } }],
      });
    } catch (e: any) {
      switch (e.code) {
        case "auth/invalid-email":
          setCredentialError(
            "The email address entered is invalid. Please enter a valid email address.",
          );
          break;
        case "auth/missing-password":
          setCredentialError(
            "Password is required. Please enter your password to continue.",
          );
          break;
        case "auth/invalid-credential":
          setCredentialError(
            "The email or password entered is incorrect. Please try again.",
          );
          break;
        default:
          setCredentialError(
            "There was a problem with your request. Please try again later.",
          );
          break;
      }
    }
  };

  // this will probs go into a separate page - register page??
  //   const registerUser = async () => {

  // 	// three state objects: password, confirmPassword, email
  // 	const passwordMatch = password === confirmPassword;
  // 	const validCredentials = email && passwordMatch;

  // 	try {
  // 		//
  // 		const user = await createUserWithEmailAndPassword(auth, email, password);
  // 	} catch (e) {
  // 		const {code, message} = e
  // 		// do something with this lol idk print it out or smth
  // 	}
  //   }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>{"Login to Plutos"}</Text>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="Email/Phone Number"
          style={commonStyles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
        <TextInput
          placeholder="Password"
          style={commonStyles.input}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor={DEFAULT_COLOURS.secondary}
        />
      </View>

      <Button
        backgroundColor={DEFAULT_COLOURS.primary}
        paddingHorizontal="20%"
        onPress={loginWithEmailPassword}
      >
        <Text fontWeight="500" color="white">
          Continue
        </Text>
      </Button>

      {credentialError.length !== 0 && (
        <Text style={commonStyles.errorText}>{credentialError}</Text>
      )}

      <Pressable
        style={{ marginTop: 15 }}
        onPress={() => {
          navigation.navigate("ResetPassword");
        }}
      >
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </Pressable>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <View>
          <Text paddingHorizontal={30}>or</Text>
        </View>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.alternateSignInContainer}>
          <GoogleIcon size={30} style={{ marginTop: 15, marginRight: 15 }} />
          <Button flex={1} marginTop={15} onPress={testClick}>
            <Text fontWeight="bold">Continue with Google</Text>
          </Button>
        </View>

        <View style={styles.alternateSignInContainer}>
          <MicrosoftIcon size={33} style={{ marginTop: 15, marginRight: 12 }} />
          <Button flex={1} marginTop={15}>
            <Text fontWeight="bold">Continue with Microsoft</Text>
          </Button>
        </View>

        <View style={styles.alternateSignInContainer}>
          <AppleIcon size={36} style={{ marginTop: 15, marginRight: 10 }} />
          <Button flex={1} marginTop={15}>
            <Text fontWeight="bold">Continue with Apple</Text>
          </Button>
        </View>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
      </View>
      <Pressable
        style={{ margin: 16 }}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.signUpText}>
          {"Don't have an account? Sign up!"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 10,
    marginBottom: 15,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    width: "80%",
    justifyContent: "flex-start",
  },
  forgotPasswordText: {
    textDecorationLine: "underline",
    color: "red",
    marginTop: 15,
    marginBottom: 15,
  },
  signUpText: {
    textDecorationLine: "underline",
    color: "red",
    marginTop: 15,
    marginBottom: 15,
  },
});

export default LoginView;
